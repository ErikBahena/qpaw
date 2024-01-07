import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="w-full bg-white px-8 text-gray-700">
      <div className="container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row">
        <div className="relative flex flex-col md:flex-row">
          <Link
            href="#_"
            className="texdt-gray-900 mb-5 flex items-center font-medium md:mb-0 lg:w-auto lg:items-center lg:justify-center"
          >
            <span className="mx-auto flex select-none items-center gap-2 text-xl font-black leading-none text-gray-900">
              <Image src="/logo.png" alt="logo" width={30} height={30} /> Qpaw
            </span>
          </Link>
          <nav className="mb-5 flex flex-wrap items-center text-base md:mb-0 md:ml-8 md:border-l md:border-gray-200 md:pl-8">
            <Link
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Blog
            </Link>
          </nav>
        </div>

        <div className="ml-5 inline-flex items-center space-x-6 lg:justify-end">
          <Link
            href="#"
            className="whitespace-no-wrap text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="whitespace-no-wrap inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium leading-6 text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
