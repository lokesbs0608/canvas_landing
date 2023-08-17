import React from "react";
import Icon from "../../public/assets/logo.png";
import Image from "next/image";


const Header = () => {
  return (
    <header className="header_bg">
      <nav className="px-7 lg:px-6 py-2.5  ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <Image src={Icon} width={60} height={60} alt="Canvas Logo" />
          </a>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.941406"
                  width="18.125"
                  height="10"
                  rx="5"
                  fill="#AAAAAA"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.19141 5.3125C7.19141 6.17544 6.49185 6.875 5.62891 6.875C4.76596 6.875 4.06641 6.17544 4.06641 5.3125C4.06641 4.44956 4.76596 3.75 5.62891 3.75C6.49185 3.75 7.19141 4.44956 7.19141 5.3125ZM11.6561 5.3125C11.6561 6.17544 10.9565 6.875 10.0936 6.875C9.23063 6.875 8.53107 6.17544 8.53107 5.3125C8.53107 4.44956 9.23063 3.75 10.0936 3.75C10.9565 3.75 11.6561 4.44956 11.6561 5.3125ZM14.5565 6.875C15.4194 6.875 16.119 6.17544 16.119 5.3125C16.119 4.44956 15.4194 3.75 14.5565 3.75C13.6935 3.75 12.994 4.44956 12.994 5.3125C12.994 6.17544 13.6935 6.875 14.5565 6.875Z"
                  fill="white"
                />
              </svg>
            </button>
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 hidden lg:inline-block"
            >
              ENTERPRISE
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 hidden lg:inline-block"
            >
              PRICE
            </a>
            <a
              href="#"
              style={{
                borderRadius: "24px",
              }}
              className="text-white gradient_btn    font-large rounded-lg text-md px-8 lg:px-17 py-3 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-primary-800"
            >
              Monetize
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
