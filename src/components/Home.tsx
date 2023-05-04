import * as React from "react";

export const Home = (props: any) => {
  return (
    <div className="pt-12 lg:px-16 md:px-8 px-4 h-screen">
      <div className="flex float-right">
        <div className="px-6">Home</div>
        <div className="px-6">Experience</div>
        <div className="px-6">Projects</div>
        {/* <div className="px-6">Blogs</div> */}
        <div className="px-6">Resume</div>
        <div className="px-6">Contact</div>
      </div>
      <div className="my-24 lg:mx-12 mx-4">
        <h3 className="sm:text-8xl text-6xl sm:pt-4 pt-24 font-bold">Hello,</h3>
        <h1 className="sm:text-8xl text-6xl pt-4 font-bold">
          I'm {props.name}
          <span>.</span>
        </h1>
        <h5 className="sm:text-2xl text-xl font-extralight sm:pt-4 pt-10 lowercase">
          {props.title}
        </h5>
      </div>
    </div>
  );
};
