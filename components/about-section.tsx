import { Check } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { personalInfo } from '@/data/portfolio';

export function AboutSection() {
  return (
    <section
      id="about"
      className="section section-alt"
      aria-labelledby="about-heading"
    >
      <div className="container-shell about-grid">
        <SectionHeading
          id="about-heading"
          eyebrow="About me"
          title="Practical engineering, thoughtful execution."
          description="I care about both sides of a product: the system beneath it and the experience people actually use."
          align="left"
        />
        <div className="about-content">
          {personalInfo.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="focus-list" aria-label="Areas of focus">
            {personalInfo.focus.map((item) => (
              <li key={item}>
                <span>
                  <Check aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
