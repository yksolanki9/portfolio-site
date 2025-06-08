import * as React from "react";

export const MenuIcon = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Function;
}) => {
  return (
    <div className="menu-icon fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsMenuOpen((prev: boolean) => !prev)}
        className="cursor-pointer group p-3 bg-glass-dark rounded-xl border border-gray-600 hover:border-custom-cyan transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-custom-cyan/20"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
          {/* Top line */}
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-custom-cyan to-neon-purple transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          {/* Middle line */}
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          {/* Bottom line */}
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-neon-pink to-neon-orange transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>
    </div>
  );
};
