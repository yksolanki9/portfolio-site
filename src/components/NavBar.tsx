import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { NAV_ITEMS } from "../constants";
import type { NavBarProps } from "../types";

export const NavBar = ({ isMobileView, setIsMenuOpen }: NavBarProps) => {
  const [activeSection, setActiveSection] = React.useState<string>("");

  React.useEffect(() => {
    const sections = NAV_ITEMS.filter((item) => !item.external).map((item) =>
      item.href.substring(1)
    );

    // Set up Intersection Observer for better performance
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the middle portion of viewport
      threshold: 0,
    };

    let currentIntersections = new Map<string, boolean>();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        currentIntersections.set(entry.target.id, entry.isIntersecting);
      });

      // Find the first intersecting section in order
      let newActiveSection = "";
      for (const section of sections) {
        if (currentIntersections.get(section)) {
          newActiveSection = section;
          break;
        }
      }

      // Update active section and URL using callback to avoid stale closure
      setActiveSection((currentActive) => {
        if (newActiveSection !== currentActive) {
          if (newActiveSection === "home") {
            // When home section is active, clear the URL fragment
            if (window.location.hash) {
              window.history.replaceState(null, "", window.location.pathname);
            }
          } else if (newActiveSection) {
            // Update URL fragment for other sections
            if (window.location.hash !== `#${newActiveSection}`) {
              window.history.replaceState(null, "", `#${newActiveSection}`);
            }
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

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
        currentIntersections.set(section, false);
      }
    });

    // Handle initial hash on page load
    const hash = window.location.hash.substring(1);
    if (hash && NAV_ITEMS.some((item) => item.href === `#${hash}`)) {
      setActiveSection(hash);
      // Scroll to the section after a brief delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If no hash, start with home as active
      setActiveSection("home");
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank");
    } else {
      const section = href.substring(1);

      if (section === "home") {
        // For home section, use root URL
        window.history.pushState(null, "", window.location.pathname);
      } else {
        // For other sections, use fragment
        window.history.pushState(null, "", href);
      }

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
      }
    }
    if (isMobileView) {
      setIsMenuOpen(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  if (isMobileView) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-lg"
        onClick={handleBackdropClick}
      >
        <div className="glass-card rounded-3xl p-6 max-w-sm w-full mx-4 transform animate-slide-up">
          {/* Mobile Menu Items */}
          <nav className="space-y-4">
            {NAV_ITEMS.map((item, index) => {
              const isActive =
                !item.external && activeSection === item.href.substring(1);
              const isResume = item.external;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.external)}
                  className={`w-full group relative p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "bg-gradient-to-r from-custom-cyan/30 to-neon-purple/30 text-white border-2 border-custom-cyan shadow-lg shadow-custom-cyan/20"
                      : isResume
                      ? "bg-transparent text-gray-300 hover:text-white border border-transparent hover:bg-glass-white/10"
                      : "text-gray-300 hover:text-white hover:bg-glass-white border border-transparent hover:border-gray-600"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-medium ${
                        isActive || isResume ? "text-glow" : ""
                      }`}
                    >
                      {item.label}
                      {isResume && (
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="inline w-4 h-4 ml-2 animate-bounce text-neon-pink flex-shrink-0"
                        />
                      )}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-custom-cyan animate-pulse shadow-sm shadow-custom-cyan"
                          : isResume
                          ? "bg-gray-500 group-hover:bg-gray-400"
                          : "bg-gray-600 group-hover:bg-neon-purple"
                      }`}
                    />
                  </div>

                  {/* Enhanced animated underline */}
                  <div
                    className={`absolute bottom-0 left-4 right-4 h-[2px] transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-custom-cyan to-neon-purple opacity-100 shadow-sm shadow-custom-cyan/50"
                        : isResume
                        ? "bg-gradient-to-r from-gray-500 to-gray-400 opacity-0 group-hover:opacity-50"
                        : "bg-gradient-to-r from-custom-cyan to-neon-purple opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Close hint */}
          <div className="text-center mt-8 text-gray-400 text-sm">
            Tap anywhere outside to close
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 animate-slide-down">
      <div className="glass-card rounded-full px-6 py-3 shadow-2xl">
        <ul className="flex items-center space-x-6">
          {NAV_ITEMS.map((item, index) => {
            const isActive =
              !item.external && activeSection === item.href.substring(1);
            const isResume = item.external;
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href, item.external)}
                  className={`group relative transition-all duration-300 hover:scale-110 ${
                    isActive
                      ? "px-4 py-2 text-sm font-medium text-custom-cyan text-glow"
                      : isResume
                      ? "px-6 py-2.5 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold rounded-full shadow-lg shadow-neon-purple/30 hover:shadow-neon-pink/40 hover:from-neon-pink hover:to-neon-orange transform hover:scale-105"
                      : "px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`${
                      isResume ? "flex items-center justify-center" : ""
                    }`}
                  >
                    {item.label}
                    {isResume && (
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="w-4 h-4 ml-2 animate-bounce flex-shrink-0"
                      />
                    )}
                  </div>

                  {/* Active indicator - only for non-resume items */}
                  {!isResume && (
                    <div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-custom-cyan animate-pulse"
                          : "bg-transparent group-hover:bg-neon-purple"
                      }`}
                    />
                  )}

                  {/* Hover effect for navigation items - not resume */}
                  {!isResume && (
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 bg-gradient-to-r from-custom-cyan/20 to-neon-purple/20" />
                  )}

                  {/* Enhanced glow effect for resume button */}
                  {isResume && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-pulse" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
