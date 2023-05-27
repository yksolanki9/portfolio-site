import * as React from "react";

export const Home = (props: any) => {
  return (
    <div className="pt-12 min-[1100px]:px-16 md:px-8 px-4 h-screen">
      {/* TODO: Replace this with sidebar */}
      <div className="hidden sm:block">
        <div className="flex float-right ">
          <div className="px-6">
            <a href="#about">About</a>
          </div>
          <div className="px-6">
            <a href="#experience">Experience</a>
          </div>
          <div className="px-6">
            <a href="#projects">Projects</a>
          </div>
          {/* <div className="px-6">Blogs</div> */}
          <div className="px-6">
            <a
              href="https://drive.google.com/file/d/1bqvbs_oy0wBS5U0bQCVIFKId4Gqhp-UA/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="px-6">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="relative top-1/3 lg:mx-12 mx-4">
        <h3 className="min-[1000px]:text-8xl min-[700px]:text-7xl min-[500px]:text-5xl text-3xl font-bold">
          Hello,
        </h3>
        <h1 className="min-[1000px]:text-8xl min-[700px]:text-7xl min-[500px]:text-5xl text-3xl pt-4 font-bold">
          I'm {props.name}
          <span>.</span>
        </h1>
        <h5 className="sm:text-2xl text-md font-extralight sm:pt-4 pt-10 lowercase">
          {props.title}
        </h5>
      </div>
    </div>
  );
};
