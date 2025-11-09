'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const GUMROAD_URL = 'https://sunoaio.gumroad.com/l/downloader';

const featureTexts = [
  {
    title: 'Filters mirror Suno',
    body: 'Pick Liked, Personas, Covers, Extensions, Full Songs, Public, and Remasters before the sync begins so you never dig through Suno again.'
  },
  {
    title: 'Provenance packets',
    body: 'Each song gets prompts, lyrics, and signed receipts so you can prove ownership later without hunting screenshots.'
  }
];

const tldrParagraphs = [
  'I made SunoSavvy because the worry of losing entire catalogs kept me up. If you create music, you deserve a mirror that respects your process.',
  'You can import 1,000 songs and resample 100 of them for free; the one-time unlock keeps the downloader and the WAV exports yours for life.',
  'The library stays local and never touches any VOMG server—files flow from Suno to your computer and end there.'
];

const directoryScreenshots = [
  {
    title: 'Top-level directory',
    body: 'The root folder is the mirror of your Suno library—everything lands inside the drive you point it to, visible in the top-level directory screenshot above.',
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
              I’m a creator too, so I built this tool to mirror your Suno library—audio, prompts, lyrics, provenance—straight to a drive you control. No drama, just files.
            </p>
            <div className="cta-row">
              <a className="cta primary" href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">
                Get it for free
              </a>
              <p className="cta-note">Archive, provenance, WAV resamples for your Suno library</p>
            </div>
            <p className="seller">Created by Tyler Jay, fellow creator</p>
          </div>
          <div className="price-card" data-tilt>
            <p className="eyebrow">Instant digital download</p>
            <h3>Keep what you create.</h3>
            <p>
              Download once, keep every song, and save provenance proof alongside every saved song. The library stays local and never touches any servers—it goes straight
              from Suno to your computer.
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
              <Image src="/gumroad-filters.png" alt="Suno filters screenshot" width={1400} height={990} className="media" priority />
            </figure>
          </div>
        </section>

        <section className="section split reverse" data-scroll="slide">
          <figure className="image-frame">
            <Image src="/feature-queue.png" alt="Queue dashboard view" width={1400} height={990} className="media" />
          </figure>
          <div className="text-stack">
            <h3>Library stays local</h3>
            <p>When Suno downloads a song, SunoSavvy mirrors that download to your selected folder. No VOMG server ever sees those files.</p>
          </div>
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
            Your songs stay yours; files flow directly from Suno to your computer just as if you clicked download inside the Suno app. Nothing touches a VOMG server.
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
