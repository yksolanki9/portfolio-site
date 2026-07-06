import React from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { blogPosts } from "../data";
import { SectionHeading } from "./ui/SectionHeading";

export const Blogs: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      id="blog"
      className="max-w-content mx-auto px-6 lg:px-10 py-24 lg:py-32"
    >
      <SectionHeading
        index="04"
        kicker="Writing"
        title="Words & tutorials"
        description="I write about Node.js, JavaScript internals, and building things, published on Dev.to, Scaler Topics, and Fyle Stories."
      />

      <div ref={ref} className="mt-16">
        {blogPosts.map((post, index) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8 items-center py-7 border-t border-line reveal ${
              inView ? "is-visible" : ""
            } ${index === blogPosts.length - 1 ? "border-b" : ""}`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-faint mb-2">
                <span className="font-medium text-accent">{post.platform}</span>
                <span className="h-1 w-1 rounded-full bg-line" />
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-line" />
                <span>{post.publishedDate}</span>
                <span className="h-1 w-1 rounded-full bg-line" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-ink tracking-tight group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted max-w-2xl line-clamp-1">
                {post.description}
              </p>
            </div>

            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="hidden md:block w-4 h-4 text-faint opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
