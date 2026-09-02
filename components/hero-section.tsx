import { ArrowDownRight, ArrowUpRight, FolderKanban } from 'lucide-react';

import { personalInfo, projects } from '@/data/portfolio';

export function HeroSection() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid container-shell">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span aria-hidden="true" />
            {personalInfo.eyebrow}
          </p>
          <h1 id="hero-title">
            Hi, I’m <strong>{personalInfo.name}</strong>
          </h1>
          <p className="hero-headline">{personalInfo.headline}</p>
          <p className="hero-description">{personalInfo.introduction}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              View my work
              <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="button-secondary" href="#contact">
              Start a conversation
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <dl className="hero-stats" aria-label="Portfolio highlights">
            <div>
              <dt>{projects.length}</dt>
              <dd>Live systems</dd>
            </div>
            <div>
              <dt>
                {new Set(projects.map((project) => project.category)).size}
              </dt>
              <dd>Product domains</dd>
            </div>
            <div>
              <dt>End-to-end</dt>
              <dd>Delivery ownership</dd>
            </div>
          </dl>
        </div>

        <div
          className="hero-visual"
          aria-label="Sabin Izere DUKUZUMUKIZA profile placeholder"
        >
          <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
          <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
          <div className="profile-frame">
            <span className="profile-label">Profile</span>
            <span className="profile-initials" aria-hidden="true">
              {personalInfo.initials}
            </span>
            <div className="profile-meta">
              <FolderKanban aria-hidden="true" />
              <span>Building systems with purpose</span>
            </div>
          </div>
          <div className="availability-chip">
            <span aria-hidden="true" />
            Open to meaningful projects
          </div>
        </div>
      </div>
      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll to About section"
      >
        <span>Scroll to explore</span>
        <ArrowDownRight aria-hidden="true" />
      </a>
    </section>
  );
}
