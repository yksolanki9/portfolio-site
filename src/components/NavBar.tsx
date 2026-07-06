import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { NAV_ITEMS } from "../constants";
import { name } from "../data";
import type { NavBarProps } from "../types";

export const NavBar = ({ isMobileView, setIsMenuOpen }: NavBarProps) => {
  const [activeSection, setActiveSection] = React.useState<string>("home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const sections = NAV_ITEMS.filter((item) => !item.external).map((item) =>
      item.href.substring(1)
    );

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const currentIntersections = new Map<string, boolean>();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        currentIntersections.set(entry.target.id, entry.isIntersecting);
      });

      let newActiveSection = "";
      for (const section of sections) {
        if (currentIntersections.get(section)) {
          newActiveSection = section;
          break;
        }
      }

      setActiveSection((currentActive) => {
        if (newActiveSection && newActiveSection !== currentActive) {
          if (newActiveSection === "home") {
            if (window.location.hash) {
              window.history.replaceState(null, "", window.location.pathname);
            }
          } else if (window.location.hash !== `#${newActiveSection}`) {
            window.history.replaceState(null, "", `#${newActiveSection}`);
          }
          return newActiveSection;
        }
        return currentActive;
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
        currentIntersections.set(section, false);
      }
    });

    const hash = window.location.hash.substring(1);
    if (hash && NAV_ITEMS.some((item) => item.href === `#${hash}`)) {
      setActiveSection(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      const section = href.substring(1);
      if (section === "home") {
        window.history.pushState(null, "", window.location.pathname);
      } else {
        window.history.pushState(null, "", href);
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
      }
    }
    if (isMobileView) setIsMenuOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setIsMenuOpen(false);
  };

  const brandInitials = "YS";

  /* ---------------- Mobile overlay ---------------- */
  if (isMobileView) {
    return (
      <div
        className="fixed inset-0 z-50 bg-paper animate-fade-in"
        onClick={handleBackdropClick}
      >
        <div className="flex flex-col h-full px-6 pt-8 pb-12">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-ink">{name}</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="text-sm tracking-widest uppercase text-muted"
            >
              Close
            </button>
          </div>

          <nav className="flex flex-col justify-center flex-1 gap-1">
            {NAV_ITEMS.map((item, index) => {
              const isActive =
                !item.external && activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.external)}
                  className="group flex items-baseline gap-4 py-2 text-left"
                >
                  <span className="section-index text-xs text-faint w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-4xl sm:text-5xl leading-tight transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-ink group-hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.external && (
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="w-4 h-4 text-faint self-center"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }

  /* ---------------- Desktop top bar ---------------- */
  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink text-paper text-xs font-semibold tracking-tight group-hover:bg-accent transition-colors">
            {brandInitials}
          </span>
          <span className="font-display text-base text-ink hidden md:inline">
            {name}
          </span>
        </button>

        <ul className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              !item.external && activeSection === item.href.substring(1);
            if (item.external) {
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href, true)}
                    className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-ink px-4 py-1.5 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
                  >
                    {item.label}
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="w-3 h-3"
                    />
                  </button>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
