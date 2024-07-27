import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BookPlus,
  CircleDollarSign,
  HomeIcon,
  LibraryBig,
  LogOut,
  Settings,
} from "lucide-react";

function Header() {
  const path = usePathname();

  const isActive = (href: string) => path === href;

  return (
    <header className="bg-gradient-to-br from-green-100 via-green-600 to-blue-500">
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

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              {["/", "/dashboard", "/dashboard/homeworks", "/dashboard/contacts"].includes(
                path
              ) ? (
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-black"
                      href="/dashboard"
                    >
                      {" "}
                      Учебни предмети{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-black"
                      href="/dashboard/homeworks"
                    >
                      {" "}
                      Моите домашни{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-black"
                      href="/dashboard/contacts"
                    >
                      {" "}
                      Контакти{" "}
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-black"
                      href="/dashboard"
                    >
                      {" "}
                      Учебни предмети{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-black"
                      href="/dashboard/homeworks"
                    >
                      {" "}
                      Моите домашни{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-black"
                      href="/dashboard/contacts"
                    >
                      {" "}
                      Контакти{" "}
                    </a>
                  </li>
                </ul>
              )}
            </nav>

            <div className="flex items-center gap-4 mr-4">
              {["/", "/signup", "/login", "/about", "/contact"].includes(
                path
              ) ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/login"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-primary"
                      href="/signup"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  className="hidden lg:block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                  }}
                >
                  Изход
                </a>
              )}

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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex justify-center items-center w-screen h-screen mt-2 text-white bg-yellow-500">
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard">
                          <span
                            className={`flex items-center ${
                              isActive("/dashboard") ? "text-black" : ""
                            }`}
                          >
                            <HomeIcon className="mr-2 h-8 w-8" />
                            <span className="text-2xl">Home</span>
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/mybooks">
                          <span
                            className={`flex items-center ${
                              isActive("/dashboard/mybooks") ? "text-black" : ""
                            }`}
                          >
                            <LibraryBig className="mr-2 h-8 w-8" />
                            <span className="text-2xl">My Books</span>
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/createbook">
                          <span
                            className={`flex items-center ${
                              isActive("/dashboard/createbook")
                                ? "text-black"
                                : ""
                            }`}
                          >
                            <BookPlus className="mr-2 h-8 w-8" />
                            <span className="text-2xl">Create Book</span>
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/subscriptions">
                          <span
                            className={`flex items-center ${
                              isActive("/dashboard/subscriptions")
                                ? "text-black"
                                : ""
                            }`}
                          >
                            <CircleDollarSign className="mr-2 h-8 w-8" />
                            <span className="text-2xl">Subscriptions</span>
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/account">
                          <span
                            className={`flex items-center ${
                              isActive("/account") ? "text-black" : ""
                            }`}
                          >
                            <Settings className="mr-2 h-8 w-8" />
                            <span className="text-2xl">Account</span>
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/login">
                          <span
                            className={`flex items-center ${
                              isActive("/user/login") ? "text-black" : ""
                            }`}
                          >
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
