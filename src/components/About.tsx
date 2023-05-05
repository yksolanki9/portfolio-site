import React from "react";
//@ts-ignore
import profileImage from "../images/profile.png";

export const About = (props: any) => {
  return (
    <div
      id="about"
      className="2xl:pt-64 pt-40 px-16 h-screen bg-gray-800 about-section"
    >
      <div className="flex w-9/10 md:w-4/5 xxl:w-2/3 max-w-250 mx-auto">
        <div className="min-w-[40%]">
          <img className="p-10" src={profileImage} />
        </div>
        <div className="text-lg pt-8 md:pt-16 pl-8 font-light">
          {props.about}
        </div>
      </div>
    </div>
  );
};
