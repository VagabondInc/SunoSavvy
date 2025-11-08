'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const GUMROAD_URL = 'https://sunoaio.gumroad.com/l/downloader';

const featureTexts = [
  {
    title: 'Local queue',
    body: 'No accounts, no cloud processing—just every file you choose writing directly into the folder you control.'
  },
  {
    title: 'Provenance packets',
    body: 'Each song gets its prompts, lyrics, and a signed receipt so you can prove ownership later without hunting screenshots.'
  },
  {
    title: 'Filters mirror Studio',
    body: 'Pick liked, owned, stems, and personas before the sync begins so you never dig through Suno again.'
  }
];

const analysisParagraphs = [
  'SunoSavvy exists because we are creators who have seen platforms shut doors without warning. UDIO users lost miles of work; I want that never to happen to the music you poured time into.',
  'The app mirrors a full Studio session—audio, lyrics, prompts, provenance—so you can stop hoping Suno will keep your queue alive and rely on a local copy instead.',
  'Everything runs on your machine. You authenticate once, choose the personas or playlists that matter, and SunoSavvy takes over from there without a single remote server touching your files.'
];

const analysisSteps = [
  'Phase 1 – Connect & detect: Authenticate with Suno and let the app inspect every generation before any copying starts.',
  'Phase 2 – Filter what matters: Use the filter grid shown in the hero screenshot to grab personas, stems, or playlists once and forever.',
  'Phase 3 – Archive forever: Export WAV, MP3, prompts, lyrics, and provenance packets straight to the drives you control.'
];

const provenanceItems = [
  'JSON + CSV metadata bundles for catalog systems, including prompts and lyric sheets.',
  'Signed PDFs that summarize authorship plus prompt/seed history per folder.',
  'Immutable checksum logs so you can prove every file is the same track you archived.',
  'Copyright submission packets with ready-to-go attachments for PROs or A&Rs.',
  'ISRC/ISWC-ready exports so distributors know exactly what they are publishing.'
];

const importanceItems = [
  'Self-sovereign storage: your library sits on your drives, untouched by remote shutdowns.',
  'Transparent provenance: distributors and sync houses get the receipts they need without you chasing screenshots.',
  'Professional ready: metadata bundles travel with every download so labels, lawyers, or teams can verify authorship instantly.',
  'Future-proof backups: the audits you perform today are still valid after a re-encode because the checksums never change.',
  'No secrets shared: the app never uploads your files, and you keep full control over where everything lands.',
  'Rights stay with you: we only mirror what Suno already gave you, so ownership never transfers when SunoSavvy runs.'
];

const tldrParagraphs = [
  'I made SunoSavvy because the worry of losing entire catalogs kept me up. If you create music, you deserve a mirror that respects your process.',
  'You can import 1,000 songs and resample 100 of them for free; the one-time unlock keeps the downloader and the WAV exports yours for life.',
  'If this feels like a sales pitch, it is—because I believe in what we are building together and want to keep your art where it belongs.'
];

const directoryScreenshots = [
  {
    title: 'Top-level directory',
    body: 'The root folder is the mirror of your Suno Studio—everything lands inside the drive you point it to, visible in the top-level directory screenshot above.',
    src: '/top-level-dir.png'
  },
  {
    title: 'Track folder layout',
    body: 'Each song folder keeps the MP3, WAV, lyrics, prompts, and provenance JSON together so the work stays grouped per track.',
    src: '/track-directory.png'
  },
  {
    title: 'Imports dashboard',
    body: 'The imports view shows how many songs are queued, how many have been secured, and the folder destinations, as seen in the imports screenshot.',
    src: '/imports.png'
  }
];

const metadataScreenshots = [
  {
    title: 'Metadata bundle',
    body: 'JSON, CSV, and signed PDFs travel with every export, highlighted in the metadata screenshot, so catalogs and distributors stay in sync.',
    src: '/metadata.png'
  },
  {
    title: 'Sidecar documents',
    body: 'Sidecar proof of provenance, prompts, and checksums sit next to each WAV—see the folder display in the sidecar screenshot.',
    src: '/sidecar.png'
  }
];

export default function HomePage() {
  useScrollMicroFx();

  return (
    <div className="page">
      <div className="background-orbit" aria-hidden="true" />
      <div className="background-gradient" aria-hidden="true" />

      <main className="page-shell">
        <section className="hero" data-scroll="rise" id="top">
          <div className="hero-copy">
          <p className="eyebrow">SunoSavvy · Local archive</p>
          <h1>Keep your Suno library on your terms.</h1>
          <p className="lede">
            I’m a creator too, so I built this tool to mirror your Studio sessions—audio, prompts, lyrics, provenance—straight to a drive you control. No drama, just files.
          </p>
            <div className="price-pill">
              <span className="price-label">Free</span>
              <span className="price-note">Name a fair price: $0+</span>
            </div>
            <p className="inventory">Limited availability · 100 left</p>
            <div className="cta-row">
              <a className="cta primary" href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
                I want this!
              </a>
              <p className="cta-note">SunoSavvy · Archive, provenance, WAV resamples</p>
            </div>
            <p className="seller">Created by Tyler Jay, fellow creator</p>
          </div>
            <div className="price-card" data-tilt>
              <p className="eyebrow">Instant digital download</p>
              <h3>Keep what you create.</h3>
            <p>
              Download once, keep every stem, and ship provenance proof alongside the restored files. Gumroad handles the unlock; SunoSavvy keeps the archive.
            </p>
              <a className="cta ghost" href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
                Open Gumroad
              </a>
            </div>
        </section>

        <section className="section feature-stack" id="features" data-scroll="fade">
          <div className="section-head">
            <h2>Local queueing, clean provenance, creator-first controls.</h2>
          </div>
          <div className="feature-layout">
            <div className="feature-grid">
              {featureTexts.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
            <figure className="image-frame">
              <Image src="/gumroad-filters.png" alt="Studio-perfect filters screenshot" width={1400} height={990} className="media" priority />
            </figure>
          </div>
        </section>

        <section className="section split" data-scroll="slide">
          <div className="text-stack">
            <h3>Queue every filter. Export while Suno still generates.</h3>
            <p>Queue control starts at launch. Send 10 songs or 200 songs per pull while respecting Suno's rate limits so you never wait on a stalled queue.</p>
          </div>
          <figure className="image-frame">
            <Image src="/gumroad-parallel.png" alt="Parallel queueing console" width={1400} height={990} className="media" />
          </figure>
        </section>

        <section className="section split reverse" data-scroll="slide">
          <figure className="image-frame">
            <Image src="/gumroad-cache.png" alt="Cache and provenance view" width={1400} height={990} className="media" />
          </figure>
          <div className="text-stack">
          <h3>Provenance packets in every folder</h3>
            <p>Every export lands with music prompts, lyrics, and a signed provenance note so you can show the work behind your creations.</p>
          </div>
        </section>

        <section className="section analysis" id="analysis" data-scroll="rise">
          <p className="eyebrow">WHY SUNO VAULT KEEPER</p>
          <h2>Local backups so you never have to wonder if your catalog is still yours.</h2>
          <div className="analysis-grid">
            <div className="analysis-copy">
              {analysisParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <ul className="analysis-list">
                {analysisSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
          <p className="result">
                Result: a complete mirror of your Suno catalog—audio, metadata, provenance—that you can open anytime without a login.
          </p>
            </div>
            <figure className="image-frame tall" data-tilt>
              <Image src="/gumroad-wav1.png" alt="Spectrogram comparison" width={1200} height={1500} className="media" />
            </figure>
          </div>
        </section>

        <section className="section provenance" id="provenance" data-scroll="fade">
          <div className="section-head">
            <h2>Provenance</h2>
            <p>
              The provenance packet is what we hand you so you can prove ownership without emailing support. Everything is generated locally and stays with your tracks.
            </p>
          </div>
          <div className="provenance-layout">
            <div className="bundle-list">
              <p className="bundle-label">It contains (For each track):</p>
              <ul>
                {provenanceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <figure className="image-frame" data-tilt>
              <Image src="/gumroad-wav2.png" alt="Provenance artifacts" width={1200} height={1500} className="media" />
            </figure>
          </div>
        </section>

        <section className="section importance" data-scroll="rise">
          <div className="section-head">
            <h2>Why this matters</h2>
          </div>
          <ul className="importance-list">
            {importanceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section directories" data-scroll="fade">
          <div className="section-head">
            <h2>What lives on your drives</h2>
            <p>The new screenshots capture how SunoSavvy mirrors your catalog, then organizes every file, metadata bundle, and provenance note.</p>
          </div>
          <div className="directory-grid">
            {directoryScreenshots.map((shot) => (
              <article key={shot.title} className="directory-card">
                <figure className="image-frame">
                  <Image src={shot.src} alt={shot.title} width={1400} height={990} className="media" />
                </figure>
                <h3>{shot.title}</h3>
                <p>{shot.body}</p>
              </article>
            ))}
          </div>
          <div className="metadata-grid">
            {metadataScreenshots.map((shot) => (
              <article key={shot.title} className="directory-card">
                <figure className="image-frame">
                  <Image src={shot.src} alt={shot.title} width={1400} height={990} className="media" />
                </figure>
                <h3>{shot.title}</h3>
                <p>{shot.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section tldr" id="story" data-scroll="fade">
          <div className="section-head">
            <h2>Creator note</h2>
          </div>
          <div className="tldr-copy">
            {tldrParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section final-cta" data-scroll="rise">
          <div className="cta-panel" data-tilt>
            <div>
              <p className="eyebrow">Download Free</p>
              <h3>Archive now, keep receipts forever.</h3>
              <p>Name a fair price: $0+ · Limited availability · 100 left</p>
            </div>
            <div className="cta-row">
              <a className="cta primary" href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
                I want this!
              </a>
              <a className="cta ghost" href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
                View on Gumroad
              </a>
            </div>
          </div>
          <p className="rights-note">
            Your songs stay yours; files flow directly from Suno to your computer just as if you clicked download inside Studio. Nothing touches a VOMG server.
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} VOMG · Los Angeles, CA · hello@suno.vision</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
            Gumroad Listing
          </a>
        </div>
      </footer>
    </div>
  );
}

function useScrollMicroFx() {
  useEffect(() => {
    const animateItems = document.querySelectorAll<HTMLElement>('[data-scroll]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.25 }
    );
    animateItems.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollY / docHeight : 0;
      root.style.setProperty('--scroll-depth', ratio.toFixed(4));
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
      card.style.setProperty('--tilt-x', `${(y - 0.5) * -10}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 10}deg`);
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
