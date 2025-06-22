import type { Particle } from "../types";

// Generate floating particles for background animations
export const generateParticles = (count: number = 6): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 4,
  }));
};

// Optimized scroll handler with requestAnimationFrame
export const createOptimizedScrollHandler = (callback: () => void) => {
  let ticking = false;

  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Calculate scroll progress percentage
export const calculateScrollProgress = (): number => {
  if (typeof window === "undefined") return 0;

  return (
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100
  );
};

// Smooth scroll to element
export const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Check if element is in viewport
export const isElementInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
