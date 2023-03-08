import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="px-16 py-12">
      <div className="flex float-right">
        <div className="px-8">Home</div>
        <div className="px-8">Projects</div>
        <div className="px-8">Resume</div>
        <div className="px-8">Contact</div>
      </div>
      <div className="my-24 mx-12">
        <h3 className="text-8xl pt-4 font-bold">Hello,</h3>
        <h1 className="text-8xl pt-4 font-bold">
          I'm Yash Solanki<span>.</span>
        </h1>
        <h5 className="text-4xl font-extralight pt-4">Full Stack Developer</h5>
      </div>
    </div>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
