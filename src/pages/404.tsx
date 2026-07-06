import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-screen bg-paper flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="section-index text-sm font-medium tracking-widest text-accent uppercase">
          404
        </p>
        <h1 className="mt-4 font-display text-6xl sm:text-7xl tracking-tightest text-ink">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-muted">
          Sorry, we couldn't find the page you were looking for.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper hover:bg-accent transition-colors"
        >
          Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found - Yash Solanki</title>;
