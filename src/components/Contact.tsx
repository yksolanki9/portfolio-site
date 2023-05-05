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

export const Contact = ({ urls }: any) => {
  return (
    <div className="py-24 lg:px-16 px-2 h-fit text-center">
      <div id="contact" className="text-xl pb-4 text-thin">
        Feel free to reach out to me on
      </div>
      <div>
        <a href={urls.GMAIL} target="_blank">
          <FontAwesomeIcon
            className="p-6 text-2xl cursor-pointer"
            icon={faEnvelope}
          />
        </a>
        <a href={urls.LINKEDIN} target="_blank">
          <FontAwesomeIcon
            className="p-6 text-2xl cursor-pointer"
            icon={faLinkedinIn}
          />
        </a>
        <a href={urls.GITHUB} target="_blank">
          <FontAwesomeIcon
            className="p-6 text-2xl cursor-pointer"
            icon={faGithub}
          />
        </a>
        <a href={urls.TWITTER} target="_blank">
          <FontAwesomeIcon
            className="p-6 text-2xl cursor-pointer"
            icon={faTwitter}
          />
        </a>
        <a href={urls.INSTAGRAM} target="_blank">
          <FontAwesomeIcon
            className="p-6 text-2xl cursor-pointer"
            icon={faInstagram}
          />
        </a>
        <a href={urls.DEV} target="_blank">
          <FontAwesomeIcon
            className="p-6 text-2xl cursor-pointer"
            icon={faDev}
          />{" "}
        </a>
      </div>
    </div>
  );
};
