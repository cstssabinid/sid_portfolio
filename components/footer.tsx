import { ArrowUp } from 'lucide-react';

import { personalInfo } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell footer-inner">
        <div>
          <span className="footer-mark">{personalInfo.initials}</span>
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
        <a href="#home" aria-label="Back to top">
          Back to top
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
