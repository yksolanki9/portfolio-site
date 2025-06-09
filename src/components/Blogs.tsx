import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface BlogPost {
  id: number;
  title: string;
  platform: string;
  description: string;
  url: string;
  category: string;
  publishedDate: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Did I Build Cropping of Receipts",
    platform: "Fyle Stories",
    description: "Deep dive into one of my first projects at Fyle.",
    url: "https://stories.fylehq.com/p/how-did-i-build-cropping-of-receipts",
    category: "Mobile App",
    publishedDate: "2023",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    title: "Node.js REST API: Complete Guide",
    platform: "Scaler Topics",
    description:
      "Comprehensive guide to building robust REST APIs with Node.js, covering best practices and real-world examples.",
    url: "https://www.scaler.com/topics/nodejs/node-js-rest-api/",
    category: "Backend Development",
    publishedDate: "2023",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Node.js Fetch: Modern HTTP Requests",
    platform: "Scaler Topics",
    description:
      "Master the fetch API in Node.js for handling HTTP requests with modern JavaScript patterns and error handling.",
    url: "https://www.scaler.com/topics/nodejs/node-js-fetch/",
    category: "Node.js",
    publishedDate: "2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 4,
    title: "Node.js vs PHP: Complete Comparison",
    platform: "Scaler Topics",
    description:
      "In-depth comparison between Node.js and PHP for backend development, performance analysis, and use cases.",
    url: "https://www.scaler.com/topics/nodejs/node-js-vs-php/",
    category: "Backend Development",
    publishedDate: "2023",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "Closure in JavaScript: Deep Dive",
    platform: "Scaler Topics",
    description:
      "Understanding JavaScript closures with practical examples, common patterns, and advanced use cases.",
    url: "https://www.scaler.com/topics/nodejs/closure-in-javascript/",
    category: "JavaScript",
    publishedDate: "2023",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 6,
    title: "NPM Publish: Complete Guide",
    platform: "Scaler Topics",
    description:
      "Step-by-step guide to publishing your packages to NPM, including best practices and automation strategies.",
    url: "https://www.scaler.com/topics/npm-publish/",
    category: "Node.js",
    publishedDate: "2023",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 7,
    title: "Noob's Guide to Using Any Google API in Node.js",
    platform: "Dev.to",
    description:
      "Beginner-friendly tutorial for integrating Google APIs into Node.js applications with authentication and best practices.",
    url: "https://dev.to/yksolanki9/noobs-guide-to-using-any-google-api-in-nodejs-1j8g",
    category: "API Integration",
    publishedDate: "2023",
    readTime: "15 min read",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 8,
    title: "Require vs Import in Node.js",
    platform: "Dev.to",
    description:
      "Understanding the differences between CommonJS require and ES6 import/export in Node.js applications.",
    url: "https://dev.to/yksolanki9/require-vs-import-in-nodejs-4fap",
    category: "Node.js",
    publishedDate: "2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
  },
];

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
              <svg
                className="w-6 h-6 text-custom-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
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
              <svg
                className="w-6 h-6 text-custom-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
