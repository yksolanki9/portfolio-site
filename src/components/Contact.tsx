import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import {
  faDev,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useInView } from "react-intersection-observer";

export const Contact = ({ urls }: any) => {
  const { inView, ref } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="py-24 lg:px-16 px-2 h-fit text-center">
      <div id="contact" className="text-md sm:text-xl pb-4 text-thin">
        Feel free to reach out to me on
      </div>
      <div className={`flex justify-center items-center h-[60px] mt-4 ${inView ? 'animate-zoom-in-out': ''}`}>
        <a href={urls.GMAIL} target="_blank">
          <FontAwesomeIcon
            className="p-4 min-[450px]:p-6 text-xl hover:text-5xl transition-all duration-500 min-[450px]:text-2xl cursor-pointer"
            icon={faEnvelope}
          />
        </a>
        <a href={urls.LINKEDIN} target="_blank">
          <FontAwesomeIcon
            className="p-4 min-[450px]:p-6 text-xl hover:text-5xl transition-all duration-500 min-[450px]:text-2xl cursor-pointer"
            icon={faLinkedinIn}
          />
        </a>
        <a href={urls.GITHUB} target="_blank">
          <FontAwesomeIcon
            className="p-4 min-[450px]:p-6 text-xl hover:text-5xl transition-all duration-500 min-[450px]:text-2xl cursor-pointer"
            icon={faGithub}
          />
        </a>
        <a href={urls.TWITTER} target="_blank">
          <FontAwesomeIcon
            className="p-4 min-[450px]:p-6 text-xl hover:text-5xl transition-all duration-500 min-[450px]:text-2xl cursor-pointer"
            icon={faTwitter}
          />
        </a>
        <a href={urls.INSTAGRAM} target="_blank">
          <FontAwesomeIcon
            className="p-4 min-[450px]:p-6 text-xl hover:text-5xl transition-all duration-500 min-[450px]:text-2xl cursor-pointer"
            icon={faInstagram}
          />
        </a>
        <a href={urls.DEV} target="_blank">
          <FontAwesomeIcon
            className="p-4 min-[450px]:p-6 text-xl hover:text-5xl transition-all duration-500 min-[450px]:text-2xl cursor-pointer"
            icon={faDev}
          />{" "}
        </a>
      </div>
    </div>
  );
};
