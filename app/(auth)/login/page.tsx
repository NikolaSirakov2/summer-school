"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { users } from "@/data/users";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const router = useRouter();

  const handleClick = async (event: React.MouseEvent) => {
    const emailRegex = /\S+@\S+\.\S+/;
    let errors = { email: false, password: false };
    if (!emailRegex.test(email)) {
      errors.email = true;
    }
    if (password === "") {
      errors.password = true;
    }
    if (errors.email || errors.password) {
      event.preventDefault();
    }

    if (!errors.email && !errors.password) {
      event.preventDefault();

      //   try {
      //     const token = await loginUser(email, password);
      //     console.log('Success:', token);

      //     localStorage.setItem('token', token);

      //     router.push('/dashboard');
      //   } catch (error) {
      //     if (error instanceof Error) {
      //       console.error("Error:", error.message);
      //     }
      //     }
    }

    setError(errors);
    if (!errors.email && !errors.password) {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.setItem("First name", user.firstName);
        localStorage.setItem("Last name", user.lastName);
        localStorage.setItem("role", user.role);
        if (user.role === "student" && user.grade !== undefined) {
          localStorage.setItem("grade", user.grade);
        }
        router.push("/dashboard");
      } else {
        console.error("Error: Invalid credentials");
      }
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-[100vh] lg:grid-cols-12">
        <div className="w-3/4 m-10 md:hidden mt-20 ml-12">
          <Image
            src="/blackboard1.jpg"
            alt="running"
            width={950}
            height={600}
            className="rounded-2xl"
          />
        </div>

        <main className="flex items-center justify-center px-8 md:py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 md:min-h-[60vh]">
          <div className="max-w-xl lg:max-w-3xl">
            <form action="#" className="mt-2 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Имейл{" "}
                </label>

                <input
                  type="email"
                  className="mt-1 w-full rounded-md border-2 border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && (
                  <p className="text-red-500">Please enter a valid email</p>
                )}
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Парола
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-2 border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error.password && (
                  <p className="text-red-500">Please enter a password</p>
                )}
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Link
                  href={"#"}
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  onClick={handleClick}
                >
                  Влез
                </Link>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Нямаш акаунт? &nbsp;
                  <a href="/signup" className="text-gray-700 underline">
                    Създай акаунт
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
        <section className="relative h-48 lg:col-span-5 lg:h-full xl:col-span-6 hidden lg:flex items-center">
          <div className="w-full mb-6 mr-6">
            <Image
              src="/класна-стая1.jpg"
              alt="running"
              width={950}
              height={500}
              className="lg:rounded-full"
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Login;
