import { Check, GraduationCap, Languages } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { education, personalInfo } from '@/data/portfolio';

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
          <div className="about-meta-grid">
            <article className="about-meta-card">
              <span className="about-meta-icon">
                <GraduationCap aria-hidden="true" />
              </span>
              <div>
                <p>Education · {education.period}</p>
                <h3>{education.qualification}</h3>
                <span>
                  {education.institution} · {education.location}
                </span>
              </div>
            </article>
            <article className="about-meta-card">
              <span className="about-meta-icon">
                <Languages aria-hidden="true" />
              </span>
              <div>
                <p>Languages</p>
                <h3>{personalInfo.languages.join(' · ')}</h3>
                <span>Professional and client communication</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
