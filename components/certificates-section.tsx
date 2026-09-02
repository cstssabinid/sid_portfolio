import { Award, FolderOpen } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { certificates } from '@/data/portfolio';

export function CertificatesSection() {
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
          description="Verified credentials and professional milestones will appear here as they are added."
        />
        {certificates.length === 0 ? (
          <div className="empty-state">
            <span>
              <Award aria-hidden="true" />
            </span>
            <div>
              <h3>Credentials coming soon</h3>
              <p>
                This section is ready for verified certificate images, PDF
                files, and credential links—without publishing placeholder
                achievements.
              </p>
            </div>
            <div className="empty-state-path">
              <FolderOpen aria-hidden="true" />
              public/images/certificates/
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
