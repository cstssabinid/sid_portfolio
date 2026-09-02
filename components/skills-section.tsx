import { SectionHeading } from '@/components/section-heading';
import { skillGroups } from '@/data/portfolio';

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section section-alt"
      aria-labelledby="skills-heading"
    >
      <div className="container-shell">
        <SectionHeading
          id="skills-heading"
          eyebrow="Technical toolkit"
          title="The capabilities behind the products."
          description="A practical toolkit for designing, building, validating, and delivering modern web systems."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="tag-list" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
