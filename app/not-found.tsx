import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="section-eyebrow">404 · Page not found</p>
      <h1>This route does not exist.</h1>
      <p>The portfolio is one page, and the work is just a click away.</p>
      <Link className="button-primary" href="/">
        <ArrowLeft aria-hidden="true" />
        Return to the portfolio
      </Link>
    </main>
  );
}
