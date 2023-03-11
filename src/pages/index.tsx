import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <div className="pt-12 px-16 h-screen">
        <div className="flex float-right">
          <div className="px-6">Home</div>
          <div className="px-6">Projects</div>
          <div className="px-6">Blogs</div>
          <div className="px-6">Resume</div>
          <div className="px-6">Contact</div>
        </div>
        <div className="my-24 mx-12">
          <h3 className="text-8xl pt-4 font-bold">Hello,</h3>
          <h1 className="text-8xl pt-4 font-bold">
            I'm Yash Solanki<span>.</span>
          </h1>
          <h5 className="text-4xl font-extralight pt-4">
            Full Stack Developer
          </h5>
        </div>
      </div>
      <div className="pt-64 px-16 h-screen bg-gray-600 about-section">
        <div className="flex mx-12">
          <div className="min-w-[40%]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0872BF"
                d="M44.1,-63.7C56.8,-51.5,66.5,-38.1,73.8,-22.4C81,-6.7,85.8,11.4,82.2,28.1C78.6,44.8,66.7,60.1,51.6,69.1C36.5,78.1,18.3,80.8,0.3,80.3C-17.6,79.9,-35.3,76.3,-48.8,66.8C-62.4,57.3,-72,41.9,-75.1,25.9C-78.2,9.9,-75,-6.7,-70.3,-23.4C-65.6,-40.1,-59.6,-56.9,-47.6,-69.4C-35.7,-81.8,-17.9,-89.9,-1.1,-88.4C15.7,-87,31.4,-75.9,44.1,-63.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="text-lg pt-8 pl-8">
            I’m a Full Stack Developer from Mumbai, India. I am passionate about
            developing robust and scalable solutions for complex problems. As a
            full-stack developer, I have expertise in both front-end and
            back-end development, allowing me to build comprehensive and
            end-to-end web applications. I have worked with a variety of
            technologies and programming languages, including Angular, Ionic,
            React, Gatsby, Capacitor, NodeJS, NestJS, and MongoDB. I am always
            eager to learn new skills and stay up-to-date with the latest
            industry trends.
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
