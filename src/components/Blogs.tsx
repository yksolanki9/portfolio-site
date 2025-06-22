import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { blogPosts } from "../data";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Blogs: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality - changed to 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Changed from 4000 to 5000

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
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
            Sharing knowledge through technical articles on Node.js, JavaScript,
            APIs, and full-stack development
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={`relative transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Main Blog Card */}
          <div className="relative glass-card rounded-3xl p-8 mb-8 hover-tilt group transform transition-all duration-500 hover:scale-[1.02]">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Blog Content */}
              <div className="space-y-6">
                {/* Platform Badge */}
                <div className="flex items-center gap-3">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getPlatformColor(
                      blogPosts[currentIndex].platform
                    )} text-white`}
                  >
                    {blogPosts[currentIndex].platform}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-gray-700 text-gray-300">
                    {blogPosts[currentIndex].category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-custom-cyan transition-colors duration-300">
                  {blogPosts[currentIndex].title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  {blogPosts[currentIndex].description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{blogPosts[currentIndex].publishedDate}</span>
                  <span>•</span>
                  <span>{blogPosts[currentIndex].readTime}</span>
                </div>

                {/* CTA Button */}
                <a
                  href={blogPosts[currentIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-cyan text-black font-semibold rounded-full hover:bg-gradient-purple hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-custom-cyan/50"
                >
                  Read Article
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Blog Image */}
              <div className="relative">
                <div className="glass-card rounded-2xl p-4 bg-gradient-to-br from-custom-cyan/10 to-neon-purple/10">
                  <div className="aspect-video rounded-xl overflow-hidden border border-gray-600 relative group">
                    <img
                      src={blogPosts[currentIndex].image}
                      alt={blogPosts[currentIndex].title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="glass-card p-3 rounded-full hover:bg-custom-cyan/20 transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-custom-cyan shadow-lg shadow-custom-cyan/50"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="glass-card p-3 rounded-full hover:bg-custom-cyan/20 transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
