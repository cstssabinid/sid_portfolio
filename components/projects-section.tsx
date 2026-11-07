'use client';

import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useState, type CSSProperties } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/data/portfolio';
import type { ProjectCategory } from '@/types/portfolio';

type Filter = 'All' | ProjectCategory;

const categories: Filter[] = [
  'All',
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('All');
  const visibleProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="container-shell">
        <SectionHeading
          id="projects-heading"
          eyebrow="Selected work"
          title="Live systems, built for real use."
          description="Six production products across distinct industries—each designed, developed, and brought online with a clear operational purpose."
        />

        <div
          className="project-filters"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={filter === category ? 'active' : ''}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div
                className="project-preview"
                style={{ '--project-accent': project.accent } as CSSProperties}
              >
                <span className="project-number">0{index + 1}</span>
                <span className="project-mark">{project.shortMark}</span>
                <span className="project-status">
                  <span aria-hidden="true" />
                  {project.status}
                </span>
              </div>
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul
                  className="tag-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <Dialog>
                    <DialogTrigger
                      id={`project-${project.id}-dialog-trigger`}
                      render={
                        <Button className="details-button" variant="outline" />
                      }
                    >
                      View details
                    </DialogTrigger>
                    <DialogContent className="project-dialog">
                      <DialogHeader>
                        <p className="project-category">{project.category}</p>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          {project.longDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="dialog-section">
                        <h4>What it delivers</h4>
                        <ul>
                          {project.features.map((feature) => (
                            <li key={feature}>
                              <CheckCircle2 aria-hidden="true" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="dialog-section dialog-role">
                        <h4>My role</h4>
                        <p>{project.role}</p>
                      </div>
                      <DialogFooter className="project-dialog-footer">
                        <a
                          className="button-primary"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open live system
                          <ExternalLink aria-hidden="true" />
                        </a>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <a
                    className="project-live-link"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live site in a new tab`}
                  >
                    Live site
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
