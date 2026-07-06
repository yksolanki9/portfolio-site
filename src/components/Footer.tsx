import * as React from "react";
import { NAV_ITEMS } from "../constants";
import { name } from "../data";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const scrollTo = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    document
      .getElementById(href.substring(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-paper-alt">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 self-start"
            aria-label="Back to top"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink text-paper text-xs font-semibold">
              YS
            </span>
            <span className="font-display text-base text-ink">{name}</span>
          </button>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href, item.external)}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-line">
          <p className="text-sm text-faint">
            © {year} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
