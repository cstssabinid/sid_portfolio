import { SectionHeading } from '@/components/section-heading';
import { certificates } from '@/data/portfolio';

export function CertificatesSection() {
  if (certificates.length === 0) return null;

  return (
    <section
      id="certificates"
      className="section section-alt"
      aria-labelledby="certificates-heading"
    >
      <div className="container-shell">
        <SectionHeading
          id="certificates-heading"
          eyebrow="Certificates & achievements"
          title="Learning that supports the work."
          description="Verified credentials and professional milestones."
        />
      </div>
    </section>
  );
}
