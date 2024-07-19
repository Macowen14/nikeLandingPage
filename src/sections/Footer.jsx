import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container " id="contact-us">
      <div className="flex flex-col justify-between items-start gap-6 lg:flex-row">
        <div className="flex flex-col items-start w-full lg:w-1/4 mb-8 lg:mr-10">
          <a href="/">
            <img src={footerLogo} alt="Nike logo" width={130} height={46} />
          </a>
          <p className="text-gray-400 mt-6 text-base leading-8 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store.{" "}
            <span className="capitalize">
              Find your perfect size in store. Get rewards.
            </span>
          </p>
          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((media, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-12 h-12"
              >
                <img
                  src={media.src}
                  alt={media.alt}
                  width={30}
                  height={30}
                  className="rounded-full bg-white"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start w-full lg:w-3/4 lg:flex-row lg:justify-between md:flex-row md:justify-between">
          {footerLinks.map((section, index) => (
            <div key={index} className="mb-8 lg:mb-0 lg:w-1/4">
              <h4 className="font-montserrat text-2xl text-white leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="mt-3 text-gray-400 font-montserrat text-base leading-normal cursor-pointer hover:text-gray-300"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 sm:mt-0">
        <div className="text-gray-400 text-sm leading-8 font-montserrat">
          Copyright © 2023 Nike. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
