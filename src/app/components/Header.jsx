import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Blog",
      dropdown: [
        { label: "India", href: "/blog/india" },
        { label: "World", href: "/blog/world" },
        { label: "War", href: "/blog/war" },
        { label: "Sport", href: "/blog/sport" },
        { label: "Education", href: "/blog/education" },
      ],
    },
    {
      label: "Services",
      megaMenu: [
        {
          title: "SEO",
          items: [
            { label: "On Page", href: "/services/seo/on-page" },
            { label: "Off Page", href: "/services/seo/off-page" },
          ],
        },
        {
          title: "Maintenance",
          items: [
            { label: "Website", href: "/services/maintenance/website" },
            { label: "Application", href: "/services/maintenance/application" },
          ],
        },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" /> */}
          <span className="self-center text-2xl font-semibold dark:text-white">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
        </Link>

        <button
          data-collapse-toggle="navbar"
          type="button"
          className="inline-flex h-10 w-10 items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar"
          aria-expanded="false"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <DarkThemeToggle />
        <div className="hidden w-full md:block md:w-auto" id="navbar">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <li key={item.label} className="relative">
                    <button
                      id={`dropdown-${item.label}`}
                      data-dropdown-toggle={`dropdownMenu-${item.label}`}
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    >
                      {item.label}
                      <svg
                        className="ms-2.5 h-2.5 w-2.5"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id={`dropdownMenu-${item.label}`}
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              if (item.megaMenu) {
                return (
                  <li key={item.label} className="group relative">
                    <button
                      id={`megamenu-${item.label}`}
                      data-dropdown-toggle={`megamenuMenu-${item.label}`}
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    >
                      {item.label}
                      <svg
                        className="ms-2.5 h-2.5 w-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id={`megamenuMenu-${item.label}`}
                      className="absolute left-0 z-10 mt-2 hidden w-[500px] rounded-lg border bg-white p-4 shadow-md group-hover:block dark:bg-gray-800"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        {item.megaMenu.map((section) => (
                          <div key={section.title}>
                            <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                              {section.title}
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                              {section.items.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="hover:text-blue-600 hover:underline dark:hover:text-blue-400"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
