import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRightIcon } from "./icons";
import { blogPosts } from "../data";

export const Blogs: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === blogPosts.length - 1 ? 0 : currentIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "dev.to":
        return "from-green-500 to-green-600";
      case "scaler":
        return "from-blue-500 to-blue-600";
      case "fyle stories":
        return "from-purple-500 to-purple-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div
      id="blog"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-neon-green rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-custom-cyan rounded-lg transform rotate-45 animate-rotate-slow" />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-purple rounded-full opacity-30 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-16 h-[2px] bg-gradient-cyan"></div>
            <h2 className="text-4xl sm:text-6xl font-bold text-glow bg-gradient-to-r from-custom-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Technical Blogs
            </h2>
            <div className="w-16 h-[2px] bg-gradient-purple"></div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge through technical articles on React, Node.js,
            JavaScript, and full-stack development
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 hover-tilt transform transition-all duration-700 ease-out hover:scale-105 ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-custom-cyan transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gradient-to-r from-glass-white to-glass-dark rounded-full text-xs border border-gray-600 hover:border-custom-cyan transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => window.open(`/blog/${post.slug}`, "_blank")}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-custom-cyan to-neon-purple text-black font-medium rounded-lg transition-all duration-300 hover:scale-105 w-full justify-center"
                  >
                    <span>Read More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-card rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-custom-cyan mb-2">
              More Articles Coming Soon
            </h4>
            <p className="text-gray-300 text-sm">
              I regularly share technical insights and tutorials. Follow me on{" "}
              <a
                href="https://dev.to/yksolanki9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-cyan hover:text-neon-purple transition-colors duration-300"
              >
                Dev.to
              </a>{" "}
              for the latest articles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
