import { ArrowUpRight, BriefcaseBusiness, Check } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { experience } from '@/data/portfolio';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container-shell">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Owning the full path from idea to launch."
          description="Selected experience grounded in live work and verifiable production outcomes."
        />
        <div className="experience-timeline">
          {experience.map((item) => (
            <article className="experience-card" key={item.role}>
              <div className="experience-rail" aria-hidden="true">
                <span>
                  <BriefcaseBusiness />
                </span>
              </div>
              <div className="experience-content">
                <div className="experience-heading">
                  <div>
                    <p>{item.organization}</p>
                    <h3>{item.role}</h3>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p className="experience-description">{item.description}</p>
                <div className="experience-columns">
                  <div>
                    <h4>Responsibilities</h4>
                    <ul>
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>
                          <Check aria-hidden="true" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Production outcomes</h4>
                    <ul>
                      {item.achievements.map((achievement) => (
                        <li key={achievement}>
                          <Check aria-hidden="true" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className="tag-list" aria-label="Experience technologies">
                  {item.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="experience-links">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
