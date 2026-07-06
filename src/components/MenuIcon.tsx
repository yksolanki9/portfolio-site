import * as React from "react";
import { name } from "../data";

export const MenuIcon = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Function;
}) => {
  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-paper/80 backdrop-blur-md border-b border-line">
      <div className="flex items-center justify-between px-5 h-14">
        <button
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2"
          aria-label="Home"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-ink text-paper text-[11px] font-semibold">
            YS
          </span>
          <span className="font-display text-sm text-ink">{name}</span>
        </button>

        <button
          onClick={() => setIsMenuOpen((prev: boolean) => !prev)}
          className="w-9 h-9 flex flex-col justify-center items-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};
