import * as React from "react";

export const Home = (props: any) => {
  return (
    <div className="pt-12 px-16 h-screen">
      <div className="flex float-right">
        <div className="px-6">Home</div>
        <div className="px-6">Experience</div>
        <div className="px-6">Projects</div>
        <div className="px-6">Blogs</div>
        <div className="px-6">Resume</div>
        <div className="px-6">Contact</div>
      </div>
      <div className="my-24 mx-12">
        <h3 className="text-8xl pt-4 font-bold">Hello,</h3>
        <h1 className="text-8xl pt-4 font-bold">
          I'm {props.name}
          <span>.</span>
        </h1>
        <h5 className="text-4xl font-extralight pt-4">{props.title}</h5>
      </div>
    </div>
  );
};
