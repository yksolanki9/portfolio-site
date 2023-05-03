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

export const Contact = () => {
  return (
    <div className="py-24 lg:px-16 px-2 h-fit text-center">
      <div className="text-xl pb-4 text-thin">
        Feel free to reach out to me on
      </div>
      <div>
        <FontAwesomeIcon
          className="p-6 text-2xl cursor-pointer"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="p-6 text-2xl cursor-pointer"
          icon={faLinkedinIn}
        />
        <FontAwesomeIcon
          className="p-6 text-2xl cursor-pointer"
          icon={faGithub}
        />
        <FontAwesomeIcon
          className="p-6 text-2xl cursor-pointer"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="p-6 text-2xl cursor-pointer"
          icon={faEnvelope}
        />
        <FontAwesomeIcon className="p-6 text-2xl cursor-pointer" icon={faDev} />
      </div>
    </div>
  );
};
