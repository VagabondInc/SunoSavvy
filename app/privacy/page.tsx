import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy · SunoSavvy',
  description:
    'VOMG explains how SunoSavvy keeps your music on your drives without touching our servers. Rights to your songs stay with you.',
  metadataBase: new URL('https://www.suno.vision')
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <main className="page-shell">
        <section className="legal-section">
          <p className="eyebrow">Privacy policy</p>
          <h1>SunoSavvy keeps your songs local.</h1>
          <p>
            VOMG (Los Angeles, CA) built this tool so creators can mirror their Suno catalogs without changing the ownership of their music. Your rights, metadata,
            and creative labor stay with you forever; the app only copies the same files that Suno delivers to your device manually.
          </p>
        </section>

        <section className="legal-section">
          <h2>What we process</h2>
          <p>
            SunoSavvy does not collect personal data, usage analytics, or your musical content. The desktop app runs on your computer, authenticates directly with Suno,
            and streams the files to the folders you choose. There is no VOMG server that ingests your tracks or metadata. We do not see, store, or transmit any of your songs—ever.
          </p>
        </section>

        <section className="legal-section">
          <h2>Local operation & retention</h2>
          <p>
            Every export (MP3, WAV, lyrics, prompts, provenance notes) remains on your drives. You control how long copies stay there and where they live—even if you delete
            a folder on your machine, nothing persists with us. If you need help, email <a href="mailto:hello@suno.vision">hello@suno.vision</a>; messages you send reach VOMG,
            but no automated logs are maintained beyond standard email headers.
          </p>
        </section>

        <section className="legal-section">
          <h2>Security & transparency</h2>
          <p>
            Because the app communicates only with Suno, your security depends on Suno&apos;s platform safeguards and the permissions you grant locally. We recommend keeping your
            operating system and Suno account credentials secure. We never transmit your files to the internet on behalf of VOMG, and we have no servers that hold your data.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>
            Questions about this privacy policy or our data habits? Email <a href="mailto:hello@suno.vision">hello@suno.vision</a>. We are based in Los Angeles, CA, and this policy
            is effective as of 2025. For legal background, see the <Link href="/terms">Terms of Service</Link>.
          </p>
        </section>
      </main>
    </div>
  );
}
