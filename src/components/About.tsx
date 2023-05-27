import React from "react";
//@ts-ignore
import profileImage from "../images/profile.png";

export const About = (props: any) => {
  return (
    <div
      id="about"
      className="2xl:pt-64 lg:pt-32 min-[700px]:pt-24 lg:p-16 max-[400px]:p-4 p-8 md:h-screen about-section"
    >
      <div className="flex md:flex-row flex-col justify-center h-full items-center pb-10">
        <div className="xl:basis-3/12 lg:basis-4/12 basis-5/12 pt-20 md:pt-0">
          <img
            className="h-[200px] sm:h-[300px] md:h-auto"
            src={profileImage}
          />
        </div>
        <div className="text-md md:text-lg md:leading-8 font-light md:pl-10 pt-10 pb-20 md:py-0 xl:basis-5/12 lg:basis-6/12 basis-7/12">
          {props.about}
        </div>
      </div>
    </div>
  );
};
