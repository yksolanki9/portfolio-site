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
      <input
        type="checkbox"
        id="menu-toggle"
        className="peer"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen((prev: boolean) => !prev)}
      />
      <label htmlFor="menu-toggle" className="cursor-pointer group">
        <div className="icon-container p-3 bg-glass-dark rounded-xl border border-gray-600 hover:border-custom-cyan transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-custom-cyan/20">
          <div className="w-1/2 bg-gradient-to-r from-custom-cyan to-neon-purple"></div>
          <div className="w-full bg-gradient-to-r from-neon-purple to-neon-pink"></div>
          <div className="w-3/4 bg-gradient-to-r from-neon-pink to-neon-orange"></div>
        </div>
      </label>
    </div>
  );
};
