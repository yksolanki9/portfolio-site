import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="px-16">
      <div className="pt-12 h-screen">
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
      <div className="pt-12 h-screen">
        <div className="flex mx-12">
          <div>IMAGE TITLE</div>
          <div className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
