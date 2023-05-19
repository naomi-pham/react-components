import React from "react";
import { IconBell, IconHamburger, IconLogo } from "../icons/Icons";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-light-neutral-50 text-light-neutral-600 shadow-custom-sm">
        <i>
          <IconHamburger />
        </i>
      </div>
      <i>
        <IconLogo />
      </i>
      <i className="flex h-10 w-10 items-center justify-center rounded-full bg-light-neutral-50 text-light-neutral-600 shadow-custom-sm">
        <IconBell />
      </i>
    </nav>
  );
};

export default Nav;
