import React from "react";

export const About = (props: any) => {
  return (
    <div className="2xl:pt-64 pt-40 px-16 h-screen bg-gray-800 about-section">
      <div className="flex w-9/10 md:w-4/5 xxl:w-2/3 max-w-250 mx-auto">
        <div className="min-w-[40%]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#0872BF"
              d="M44.1,-63.7C56.8,-51.5,66.5,-38.1,73.8,-22.4C81,-6.7,85.8,11.4,82.2,28.1C78.6,44.8,66.7,60.1,51.6,69.1C36.5,78.1,18.3,80.8,0.3,80.3C-17.6,79.9,-35.3,76.3,-48.8,66.8C-62.4,57.3,-72,41.9,-75.1,25.9C-78.2,9.9,-75,-6.7,-70.3,-23.4C-65.6,-40.1,-59.6,-56.9,-47.6,-69.4C-35.7,-81.8,-17.9,-89.9,-1.1,-88.4C15.7,-87,31.4,-75.9,44.1,-63.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="text-lg pt-8 md:pt-16 pl-8">{props.about}</div>
      </div>
    </div>
  );
};
