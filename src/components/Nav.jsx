import React from "react";
import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-4 z-20 w-full sticky top-0 bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          <img src={hamburger} alt="Humburger" width={24} height={25} />
        </div>
        <button className="w-28 bg-teal-600 rounded-full p-2 text-white mx-2 hidden lg:block">
          Sign up
        </button>
        <button className="w-28 bg-blue-500 rounded-full p-2 text-white hidden lg:block">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Nav;
