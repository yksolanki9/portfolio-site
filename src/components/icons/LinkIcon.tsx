import * as React from "react";

interface LinkIconProps {
  className?: string;
}

export const LinkIcon: React.FC<LinkIconProps> = ({
  className = "w-3 h-3",
}) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H6.9A5.12 5.12 0 001.9 12a5.12 5.12 0 005 5.1h4v-1.9h-4c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9.1-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4a5.12 5.12 0 005-5.1c0-2.9-2.3-5.1-5-5.1z" />
  </svg>
);
