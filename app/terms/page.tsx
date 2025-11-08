import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service · SunoSavvy',
  description:
    'Terms for using SunoSavvy, the desktop archive tool from VOMG. Local operation only, rights to your songs never transfer.',
  metadataBase: new URL('https://www.suno.vision')
};

export default function TermsPage() {
  return (
    <div className="page">
      <main className="page-shell">
        <section className="legal-section">
          <p className="eyebrow">Terms of Service</p>
          <h1>Use SunoSavvy responsibly.</h1>
          <p>
            By downloading or running SunoSavvy you accept the terms below. This tool is provided by VOMG (Los Angeles, CA) to mirror your Suno Studio creations, and it
            never transfers ownership of your songs—your rights remain unchanged no matter how many exports you make.
          </p>
        </section>

        <section className="legal-section">
          <h2>Service scope</h2>
          <p>
            The desktop app operates entirely on your computer. It only talks to Suno’s public APIs (or the same endpoints the Studio UI uses) and writes files directly to your
            drives. There are no VOMG servers that process, store, or distribute your music. SunoSavvy does not upload anything to VOMG or share your data with third
            parties beyond what you already authorize through Suno.
          </p>
        </section>

        <section className="legal-section">
          <h2>Liability & warranty</h2>
          <p>
            VOMG provides the app “as is.” We make no promises about uninterrupted access, the accuracy of external data, or the availability of Suno’s services. You use the app
            at your own risk, and VOMG is not liable for lost time, lost access to Suno, or any indirect damages arising from your use. The only contact for legal or security
            notices is <a href="mailto:hello@suno.vision">hello@suno.vision</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Security expectations</h2>
          <p>
            Because SunoSavvy never routes your songs through our infrastructure, you remain in control of encryption and storage. We encourage you to keep operating
            system security up to date, store backups on drives you trust, and delete any exported copies when they are no longer needed. If Suno changes how their APIs work,
            you may need to update or reconfigure the desktop app.
          </p>
        </section>

        <section className="legal-section">
          <h2>Updates & governing law</h2>
          <p>
            VOMG reserves the right to update these terms. Continued use of the app after a change means you accept the new language. If you have questions, reach out to
            <a href="mailto:hello@suno.vision"> hello@suno.vision</a>. These terms are governed by the laws of California, USA.
          </p>
          <p>
            Need a refresher on privacy? Read the <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </section>
      </main>
    </div>
  );
}
