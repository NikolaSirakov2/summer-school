"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { users } from "@/data/users";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    repeatPassword: false,
  });

  const router = useRouter();
  const { toast } = useToast();

  const handleClick = async (event: React.MouseEvent) => {
    const emailRegex = /\S+@\S+\.\S+/;
    let errors = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      repeatPassword: false,
    };

    if (firstName === "") {
      errors.firstName = true;
    }
    if (lastName === "") {
      errors.lastName = true;
    }
    if (!emailRegex.test(email)) {
      errors.email = true;
    }
    if (password === "") {
      errors.password = true;
    }
    if (password !== repeatPassword) {
      errors.repeatPassword = true;
    }
    if (errors.email || errors.password || errors.repeatPassword) {
      event.preventDefault();
    }

    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      setError((prev) => ({ ...prev, email: true }));
      toast({
        title: "Error",
        description: "Email already exists",
      });
      console.error("Email already exists");
      event.preventDefault();
      return;
    }

    if (!errors.email && !errors.password && !errors.repeatPassword && !emailExists) {
      event.preventDefault();

      const defaultRole = "учител";

      const newUserId =
        users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

      const newUser = {
        id: newUserId,
        firstName,
        lastName,
        email,
        password,
        role: defaultRole,
      };

      users.push(newUser);

      toast({
        title: "Account successfully created",
        description: "You can now log in with your new account",
      });

      router.push("/login");
    }

    setError(errors);
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-[100vh] lg:grid-cols-12">
        <section className="relative h-48 lg:h-full lg:col-span-5 hidden xl:col-span-6 lg:flex items-center">
          <div className="absolute top-2 left-0 mb-6 ml-6">
            <Image
              src="/blackboard2.jpg"
              alt="running"
              width={650}
              height={600}
              className="lg:rounded-2xl max-w-[30vw]"
            />
          </div>
          <div className="absolute bottom-0 right-0 mb-6 flex justify-end">
            <Image
              src="/sport1.jpg"
              alt="running"
              width={650}
              height={600}
              className="lg:rounded-2xl max-w-[30vw]"
            />
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Име
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full rounded-md border-2 border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {error.firstName && (
                  <p className="text-red-500">Моля въведете име</p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Фамилия
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full rounded-md border-2 border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {error.lastName && (
                  <p className="text-red-500">Моля въведете фамилия</p>
                )}
              </div>
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
                  <p className="text-red-500">Моля въведете имейл</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
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
                  <p className="text-red-500">Моля въведете парола</p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Потвърждение на парола
                </label>
                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-2 border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {error.repeatPassword && (
                  <p className="text-red-500">Моля потвърдете паролата си</p>
                )}
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  Създавайки акаунт, вие се съгласявате с нашите
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    правила и условия{" "}
                  </a>
                  и{" "}
                  <a href="#" className="text-gray-700 underline">
                    политика за поверителност
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Link
                  href={
                    /\S+@\S+\.\S+/.test(email) && password === repeatPassword
                      ? "/login"
                      : "#"
                  }
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  onClick={handleClick}
                >
                  Създай акаунт
                </Link>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Вече имаш акаунт? &nbsp;
                  <a href="/login" className="text-gray-700 underline">
                    Влез сега
                  </a>
                  .
                </p>
              </div>
            </form>

            <div className="w-full mt-6 md:hidden">
              <Image
                src="/school-yard2.jpg"
                alt="running"
                layout="responsive"
                width={16}
                height={9}
                className="rounded-2xl"
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default SignUp;
