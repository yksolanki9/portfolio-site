import * as React from "react";

interface FloatingParticlesProps {
  count?: number;
}

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
}

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

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 6,
}) => {
  const particles = React.useMemo(() => generateParticles(count), [count]);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle floating-element"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  );
};
