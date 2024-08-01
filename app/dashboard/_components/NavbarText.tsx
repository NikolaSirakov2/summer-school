"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
  BookPlus,
  CircleDollarSign,
  HomeIcon,
  LibraryBig,
  LogOut,
  Settings,
} from "lucide-react";

function NavbarText() {
  const path = usePathname();
  const isActive = (href: string) => path === href;
  const role = localStorage.getItem("role");
  const firstName = localStorage.getItem("First name");
  const lastName = localStorage.getItem("Last name");
  console.error(role, firstName, lastName);

  const getGreetingMessage = () => {
    if (role === "teacher" || role === "parent") {
      return lastName && lastName.endsWith("а")
        ? `Здравейте, г-жо ${lastName}!`
        : `Здравейте, г-н ${lastName}!`;
    } else if (role === "student") {
      return `Здравей, ${firstName}!👋`;
    }
    return null;
};

  const greetingMessage = getGreetingMessage();

  return (
    
      <div className="md:flex md:items-center md:justify-between md:gap-12 lg:w-[90vw]">
        <nav aria-label="Global" className="hidden md:block">
          <div className="flex items-center gap-6">
            {greetingMessage && <p className="text-white text-xl">{greetingMessage}</p>}
          </div>
        </nav>
      
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-lg">
            <li>
              <a className="text-white transition hover:text-black" href="/dashboard">
                Учебни предмети
              </a>
            </li>
            <li>
              <a className="text-white transition hover:text-black" href="/dashboard/homeworks">
                Моите домашни
              </a>
            </li>
            <li>
              <a className="text-white transition hover:text-black" href="/dashboard/contacts">
                Контакти
              </a>
            </li>
          </ul>
      
          <div className="flex items-center gap-4 mr-4">
            {["/", "/signup", "/login", "/about", "/contact"].includes(path) ? (
              <div className="sm:flex sm:gap-4">
                <a className="rounded-md bg-primary px-5 py-2.5 text-base font-medium text-white shadow" href="/login">
                  Login
                </a>
      
                <div className="hidden sm:flex">
                  <a className="rounded-md bg-white px-5 py-2.5 text-base font-medium text-primary" href="/signup">
                    Sign Up
                  </a>
                </div>
              </div>
            ) : (
              <a
                className="hidden lg:block rounded-md bg-destructive px-5 py-2.5 text-base font-medium text-white shadow hover:opacity-90"
                href="/"
                onClick={() => {
                  localStorage.removeItem("grade");
                }}
              >
                Изход
              </a>
            )}
          </div>
        </div>
      
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-black bg-white p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex justify-center items-center w-screen h-screen mt-2 text-white bg-yellow-500">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <span className={`flex items-center ${isActive("/dashboard") ? "text-black" : ""}`}>
                      <HomeIcon className="mr-2 h-8 w-8" />
                      <span className="text-2xl">Home</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/mybooks">
                    <span className={`flex items-center ${isActive("/dashboard/mybooks") ? "text-black" : ""}`}>
                      <LibraryBig className="mr-2 h-8 w-8" />
                      <span className="text-2xl">My Books</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/createbook">
                    <span className={`flex items-center ${isActive("/dashboard/createbook") ? "text-black" : ""}`}>
                      <BookPlus className="mr-2 h-8 w-8" />
                      <span className="text-2xl">Create Book</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/subscriptions">
                    <span className={`flex items-center ${isActive("/dashboard/subscriptions") ? "text-black" : ""}`}>
                      <CircleDollarSign className="mr-2 h-8 w-8" />
                      <span className="text-2xl">Subscriptions</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account">
                    <span className={`flex items-center ${isActive("/account") ? "text-black" : ""}`}>
                      <Settings className="mr-2 h-8 w-8" />
                      <span className="text-2xl">Account</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/login">
                    <span className={`flex items-center ${isActive("/user/login") ? "text-black" : ""}`}>
                      <LogOut className="mr-2 h-8 w-8" />
                      <span className="text-2xl">Log out</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    
  );
}

export default NavbarText;
