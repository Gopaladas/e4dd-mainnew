import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <div className=" icons flex justify-center align-center gap-5 bg-black w-full h-[50px] py-4">
      <a href="https://www.instagram.com/elite4dd/" className="">
        <FontAwesomeIcon icon={faInstagram} color="white" />
      </a>
      <a href="https://twitter.com/elite4dd" className="">
        <FontAwesomeIcon icon={faTwitter} color="white" />
      </a>
      <a href="https://www.linkedin.com/company/e4dd" className="">
        <FontAwesomeIcon icon={faLinkedinIn} color="white" />
      </a>

      <a href="https://facebook.com/elite4dd" className="social-icon">
        <FontAwesomeIcon icon={faFacebookF} color="white" />
      </a>
      <a href="https://wa.me/+96899369668" className="social-icon">
        <FontAwesomeIcon icon={faWhatsapp} color="white" />
      </a>
      <a href="https://t.me/+96899369668" className="social-icon">
        <FontAwesomeIcon icon={faTelegram} color="white" />
      </a>
    </div>
  );
};

export default Icons;
