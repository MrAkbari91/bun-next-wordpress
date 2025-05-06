"use client";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header>
      <nav className="rounded-xl border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span
              className={`self-center text-4xl font-semibold whitespace-nowrap dark:text-white ${caveat.className}`}
            >
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-800">
              <li>
                <Link
                  href="/"
                  className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
