import React from "react";
import Link from "next/link";
import{Creepster, Kalam} from "next/font/google";
const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});
const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kalam",
});

export default function NotFound() {
    return (
        <section className="pagenotfound flex h-screen items-center p-16 dark:bg-gray-700 dark:text-gray-100">
          <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
            <div className="max-w-md text-center">
              <h2 className={` ${ creepster.className} mb-8 text-9xl font-extrabold text-gray-600 dark:text-gray-200`}>
                <span className="sr-only">Error</span>404
              </h2>
              <p className={`${kalam.className} text-3xl font-semibold text-gray-600 dark:text-gray-400 `}>
                Sorry, we couldn't find this page.
              </p>
              <p className={`${kalam.className} mb-8 mt-4 text-xl text-gray-600 dark:text-gray-200`}>
                But don't worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link
                href="/"
                className="0 mb-2 mr-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      );
}