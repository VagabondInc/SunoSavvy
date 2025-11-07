'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const GUMROAD_URL = 'https://sunoaio.gumroad.com/l/downloader';

export default function HomePage() {
  useScrollMicroFx();

  return (
    <div>
      <div className="background-orbit" aria-hidden="true" />
      <div className="background-gradient" aria-hidden="true" />

      <header className="site-nav" data-animate="fade">
        <a className="brand" href="#top">
          <Image src="/app-icon.jpeg" alt="SunoSavvy icon" width={32} height={32} className="brand-image" priority />
          <span>SunoSavvy</span>
        </a>
        <nav>
          <a href="#features">Filters</a>
          <a href="#analysis">WAV Lab</a>
          <a href="#provenance">Provenance</a>
          <a href="#story">Story</a>
        </nav>
        <a className="cta primary" href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
          Buy on Gumroad
        </a>
        <span className="nav-progress" aria-hidden="true" />
      </header>

      <main id="top">
        <section className="hero" data-animate="rise">
          <div className="hero-copy">
            <p className="pill">Archival-grade exports</p>
            <h1>Keep every Suno stem, with Apple-level polish.</h1>
            <p className="lede">
              SunoSavvy mirrors your entire Studio library, layers +Owned, Personas, Covers and Stems filters, and ships provenance bundles
              before Suno even finishes generating. It feels like something Apple would ship, because that is the bar.
            </p>
            <div className="cta-row">
              <a className="cta primary" href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
                Buy once · $49
              </a>
              <a className="cta ghost" href="#analysis">
                See the WAV proof
              </a>
            </div>
            <ul className="hero-highlights">
              <li>1,000 free imports + 20 complimentary WAV renders</li>
              <li>Stripe unlock → unlimited archives & mastering</li>
              <li>Designed for zero-admin hosting on Vercel or Bryce servers</li>
            </ul>
          </div>
          <div className="hero-device" data-tilt>
            <figure>
              <Image src="/suno-wav.png" alt="SunoSavvy export console" width={1200} height={880} className="media" priority />
              <figcaption>Live Export Console · Parallel queueing · Spectral status grid</figcaption>
            </figure>
            <div className="device-card">
              <div>
                <span className="eyebrow">Realtime queue</span>
                <h3>17,241 clips mirrored</h3>
                <p>Queue begins the second page one lands, so you are never stuck waiting on 17K clips before downloads flow.</p>
              </div>
              <dl className="stat-grid">
                <div>
                  <dt>4× faster</dt>
                  <dd>Exports vs. manual pulls</dd>
                </div>
                <div>
                  <dt>0 misses</dt>
                  <dd>Avatars & credits</dd>
                </div>
                <div>
                  <dt>48 kHz</dt>
                  <dd>Mastered WAV output</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section feature-showcase" id="features" data-animate="fade">
          <div className="section-head">
            <p className="pill">Why producers switch</p>
            <h2>Fast queueing, clean provenance, luxe UI.</h2>
            <p>Every interaction mirrors Suno muscle memory—faster, safer, and obsessively detailed.</p>
          </div>
          <div className="feature-grid">
            <article>
              <h3>Studio-perfect filters</h3>
              <p>Toggle Liked, Stems, Non-Commercial, +Owned, Personas, Covers, and more with multi-select chips that match the Studio tray.</p>
            </article>
            <article>
              <h3>Parallel exporting</h3>
              <p>Queue starts processing instantly. The animated 2×2 film strip keeps you current on download status without leaving the console.</p>
            </article>
            <article>
              <h3>Cache + provenance</h3>
              <p>First pull caches locally, then only deltas fetch. Every clip gets TXT notes, JSON, tagged MP3, WAV, cover art, and checksums.</p>
            </article>
            <article>
              <h3>WAV mastering built in</h3>
              <p>Matchering with our reference master reconstructs 12–20 kHz detail so your WAVs are real, not reskinned MP3s.</p>
            </article>
          </div>
        </section>

        <section className="section split spectral" id="analysis" data-animate="slide">
          <div className="spectral-copy">
            <p className="pill">WAV Lab</p>
            <h2>We proved Suno&apos;s WAV is a resampled MP3 and fixed it.</h2>
            <p>
              Spectrogram sweeps showed Suno&apos;s WAV stops cold at ~16 kHz then paints synthetic highs. Our pipeline rebuilds harmonics, holds 48 kHz
              resolution, and documents every change.
            </p>
            <ul className="list">
              <li>Signal analysis confirms identical base data with a 16 kHz shelf.</li>
              <li>Warp-Fill reconstruction heals 12–16 kHz harmonics up to 20 kHz.</li>
              <li>Side-by-side visuals reveal the difference instantly—try it yourself.</li>
            </ul>
            <a className="cta ghost" href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
              Download proof pack
            </a>
          </div>
          <div className="spectral-lab" data-parallax>
            <figure>
              <Image src="/mp3.png" alt="Original Suno MP3 spectrogram" width={1200} height={720} className="media" />
              <figcaption>Original Suno MP3</figcaption>
            </figure>
            <figure>
              <Image src="/sunosavvy-wav.png" alt="SunoSavvy mastered WAV" width={1200} height={720} className="media" />
              <figcaption>SunoSavvy master · clean 20 kHz shelf</figcaption>
            </figure>
          </div>
        </section>

        <section className="section provenance" id="provenance" data-animate="rise">
          <div className="section-head">
            <p className="pill">Provenance bundle</p>
            <h2>Chain-of-custody tools artists can trust.</h2>
            <p>Exports ship with metadata that keeps distributors, collectors, and future you aligned on what is AI-assisted and what is original.</p>
          </div>
          <div className="provenance-grid">
            <article>
              <h3>JSON-LD records</h3>
              <p>schema.org/MusicRecording entries publish AI disclosures, checksums, and provenance URLs for every track.</p>
            </article>
            <article>
              <h3>Embedded metadata</h3>
              <p>BWF bext + iXML + ID3 fields capture credits, coding history, loudness stats, and SunoSavvy toolchain data.</p>
            </article>
            <article>
              <h3>Integrity proofs</h3>
              <p>File SHA-256, audio-stream hashes, and BWF MD5 provide verifiable lineage across re-encodes and distributors.</p>
            </article>
            <article>
              <h3>Immutable storage IDs</h3>
              <p>S3 Object-Lock version IDs plus optional IPFS CIDv1 keep your golden masters tamper-evident.</p>
            </article>
            <article>
              <h3>DDEX-friendly hygiene</h3>
              <p>Standard chunks ensure Spotify, Bandcamp, and SoundCloud ingest your disclosures without false positives.</p>
            </article>
            <article>
              <h3>Platform blurbs</h3>
              <p>Auto-generated compliance snippets for Spotify, DistroKid, YouTube, and more keep releases live.</p>
            </article>
          </div>
        </section>

        <section className="section story" id="story" data-animate="fade">
          <div className="section-head">
            <p className="pill">TL;DR Why SunoSavvy?</p>
            <h2>You deserve to keep what you create.</h2>
          </div>
          <div className="story-grid">
            <article>
              <h3>Built after watching UDIO vanish</h3>
              <p>Platforms rise and disappear overnight. SunoSavvy safeguards your art so you never lose your own catalog again.</p>
            </article>
            <article>
              <h3>Real masters, not dressed-up files</h3>
              <p>Suno&apos;s WAV downloads are larger, but the highs are synthetic. We rebuilt the pipeline to restore clarity, depth, and detail.</p>
            </article>
            <article>
              <h3>Producers-first workflow</h3>
              <p>Queue filters, monitor progress, and ship provenance bundles without leaving the console. No terminals, no guesswork.</p>
            </article>
            <article>
              <h3>Future-proof ownership</h3>
              <p>Immutable IDs, reproducible loudness notes, and distributor-ready disclosures keep DSPs confident and your releases live.</p>
            </article>
          </div>
        </section>

        <section className="section buy" id="buy" data-animate="rise">
          <div className="buy-card" data-tilt>
            <div>
              <p className="pill">Ready when you are</p>
              <h2>Download once. Deploy anywhere.</h2>
              <p>
                The installer bundles the Electron app, ffmpeg, and the Python WAV helper. Push it to Vercel, Bryce, or your own server and start
                archiving.
              </p>
            </div>
            <div className="buy-actions">
              <a className="cta primary large" href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
                Buy on Gumroad
              </a>
              <p className="micro">Universal installer · macOS · Windows · Linux</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>SunoSavvy</strong>
          <p>Made for producers who need provenance, not chaos.</p>
        </div>
        <div>
          <a href="mailto:support@sunodownloader.app">Support</a>
          <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
            Buy
          </a>
          <span>Deploys beautifully on Vercel or Bryce-hosted servers.</span>
        </div>
      </footer>
    </div>
  );
}

function useScrollMicroFx() {
  useEffect(() => {
    const animateItems = document.querySelectorAll<HTMLElement>('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    animateItems.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const progress = document.querySelector<HTMLElement>('.nav-progress');
    if (!progress) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollY / docHeight : 0;
      progress.style.setProperty('--progress', ratio.toString());
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
    const handlePointer = (event: PointerEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--tilt-x', `${(y - 0.5) * -12}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 12}deg`);
    };

    const cleanup = cards.map((card) => {
      const moveHandler = (event: PointerEvent) => handlePointer(event, card);
      const leaveHandler = () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      };
      card.addEventListener('pointermove', moveHandler);
      card.addEventListener('pointerleave', leaveHandler);
      return () => {
        card.removeEventListener('pointermove', moveHandler);
        card.removeEventListener('pointerleave', leaveHandler);
      };
    });

    return () => {
      cleanup.forEach((fn) => fn());
    };
  }, []);
}
