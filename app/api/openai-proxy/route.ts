import { NextRequest } from "next/server";

const OPENAI_ENDPOINT = "https://api.openai.com/v1/responses";
const RESPONSE_ALLOW_LIST = new Set([
  "model",
  "messages",
  "input",
  "modalities",
  "tools",
  "metadata",
  "response_format",
  "temperature",
  "top_p",
  "max_output_tokens",
  "seed",
  "parallel_tool_calls"
]);

const allowedOrigins = (process.env.PROXY_ALLOWED_ORIGINS || "")
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

const openAiKey = process.env.OPENAI_API_KEY;
const defaultModel = process.env.OPENAI_DEFAULT_MODEL || "gpt-4.1-mini";

const isOriginAllowed = (origin: string | null) => {
  if (!origin) return true; // Node/Electron clients may omit Origin entirely
  if (allowedOrigins.length === 0) return true;
  if (allowedOrigins.includes("*")) return true;
  return allowedOrigins.includes(origin);
};

const buildCorsHeaders = (origin: string | null) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", origin || "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  headers.set("Vary", "Origin");
  return headers;
};

const sanitizePayload = (payload: unknown) => {
  const result: Record<string, unknown> = {};
  if (!payload || typeof payload !== "object") {
    return result;
  }
  for (const [key, value] of Object.entries(payload)) {
    if (RESPONSE_ALLOW_LIST.has(key)) {
      result[key] = value;
    }
  }
  if (!result.model) {
    result.model = defaultModel;
  }
  result.metadata = {
    ...(typeof result.metadata === "object" && result.metadata ? (result.metadata as Record<string, unknown>) : {}),
    proxy: "suno-vision"
  };
  return result;
};

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  return new Response(null, { status: 204, headers: buildCorsHeaders(origin) });
}

export async function POST(req: NextRequest) {
  if (!openAiKey) {
    return Response.json(
      { error: "OPENAI_API_KEY is not configured on the server." },
      { status: 500, headers: buildCorsHeaders(req.headers.get("origin")) }
    );
  }

  const origin = req.headers.get("origin");
  if (!isOriginAllowed(origin)) {
    return Response.json(
      { error: "Origin not allowed." },
      { status: 403, headers: buildCorsHeaders(origin) }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { error: "Invalid JSON body." },
      { status: 400, headers: buildCorsHeaders(origin) }
    );
  }

  const payload = sanitizePayload(body);

  try {
    const upstream = await fetch(OPENAI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiKey}`
      },
      body: JSON.stringify(payload)
    });

    const text = await upstream.text();
    const headers = buildCorsHeaders(origin);
    headers.set("Content-Type", upstream.headers.get("content-type") || "application/json");
    return new Response(text, { status: upstream.status, headers });
  } catch (error) {
    const headers = buildCorsHeaders(origin);
    const message = error instanceof Error ? error.message : "Unknown error";
    return Response.json({ error: "Proxy request failed", detail: message }, { status: 502, headers });
  }
}
