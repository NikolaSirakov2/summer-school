import Image from "next/image";
import React from "react";
import NavbarText from "./NavbarText";

function Header() {

  return (
    <header className="bg-gradient-to-br from-blue-500 via-green-600 to-blue-500">
      <div className="mx-0 max-w-screen-3xl px-0 sm:px-1 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12 lg:ml-4">
            <a className="block text-primary mt-2 ml-2" href="/dashboard">
              <Image
                src="/logoipsum-331.svg"
                alt="logo"
                width={60}
                height={100}
              />
            </a>
          </div>

          <NavbarText />
        </div>
      </div>
    </header>
  );
}

export default Header;
