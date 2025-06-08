import * as React from "react";

interface NavBarProps {
  isMobileView: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const NavBar: React.FC<NavBarProps> = ({
  isMobileView,
  setIsMenuOpen,
}) => {
  const [activeSection, setActiveSection] = React.useState<string>("");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMobileView) {
      setIsMenuOpen(false);
    }
  };

  if (isMobileView) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-lg">
        <div className="glass-card rounded-3xl p-8 max-w-sm w-full mx-4 transform animate-slide-up">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-glow bg-gradient-to-r from-custom-cyan to-neon-purple bg-clip-text text-transparent">
              Navigation
            </h3>
            <div className="w-16 h-[2px] bg-gradient-cyan mx-auto mt-2"></div>
          </div>

          {/* Mobile Menu Items */}
          <nav className="space-y-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full group relative p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "bg-gradient-to-r from-custom-cyan/20 to-neon-purple/20 text-white border border-custom-cyan/50"
                      : "text-gray-300 hover:text-white hover:bg-glass-white"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-medium ${isActive ? "text-glow" : ""}`}
                    >
                      {item.label}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-custom-cyan animate-pulse"
                          : "bg-gray-600 group-hover:bg-neon-purple"
                      }`}
                    />
                  </div>

                  {/* Animated underline */}
                  <div
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-custom-cyan to-neon-purple transition-all duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 animate-slide-in-left">
      <div className="glass-card rounded-full px-6 py-3 shadow-2xl">
        <ul className="flex items-center space-x-8">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 ${
                    isActive
                      ? "text-custom-cyan text-glow"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {item.label}

                  {/* Active indicator */}
                  <div
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-custom-cyan animate-pulse"
                        : "bg-transparent group-hover:bg-neon-purple"
                    }`}
                  />

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-custom-cyan/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
