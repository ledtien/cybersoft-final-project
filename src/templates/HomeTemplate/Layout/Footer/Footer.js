import React from "react";
import { GlobalOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font ">
        <div className="container px-12 pt-20 mx-auto ">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/5 md:w-1/2 w-full ">
              <h2 className="title-font font-bold text-gray-700  text-base mb-5">
                Categories
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-4">
                  <a className="text-gray-600 hover:underline hover:text-gray-500 ">
                    First Link
                  </a>
                </li>
                <li className="pb-4">
                  <a className="text-gray-600 hover:underline hover:text-gray-500 ">
                    Second Link
                  </a>
                </li>
                <li className="pb-4">
                  <a className="text-gray-600 hover:underline hover:text-gray-500 ">
                    Third Link
                  </a>
                </li>
                <li className="pb-4">
                  <a className="text-gray-600 hover:underline hover:text-gray-500 ">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full ">
              <h2 className="title-font font-bold text-gray-700  text-base mb-5">
                About
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/jobs?source=footer"
                  >
                    Careers
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/news/press-releases?source=footer"
                  >
                    Press & News
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/partnerships?source=footer"
                  >
                    Partnerships
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/privacy-policy?source=footer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/terms_of_service?source=footer"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/intellectual-property?source=footer"
                  >
                    Intellectual Property Claims
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://investors.fiverr.com/"
                  >
                    Investor Relations
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full ">
              <h2 className="title-font font-bold text-gray-700  text-base mb-5">
                Support
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/support"
                  >
                    Help & Support
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/trust_safety?source=footer"
                  >
                    Trust & Safety
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/support/articles/360010451297-How-to-Start-Selling-on-Fiverr"
                  >
                    Selling on Fiverr
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/content/how-fiverr-works?show_join&source=footer"
                  >
                    Buying on Fiverr
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full ">
              <h2 className="title-font font-bold text-gray-700  text-base mb-5">
                Community
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://events.fiverr.com/"
                  >
                    Events
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://blog.fiverr.com/?utm_source=fiverr&utm_medium=website"
                  >
                    Blog
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://community.fiverr.com/welcome/?utm_source=fiverr&utm_medium=website"
                  >
                    Forum
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/community/standards?source=footer"
                  >
                    Community Standards
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://podfollow.com/ninetwentynine"
                  >
                    Podcast
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://affiliates.fiverr.com/"
                  >
                    Affiliates
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/referral_program?source=footer"
                  >
                    Invite a Friend
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/start_selling?source=footer"
                  >
                    Become a Seller
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full ">
              <h2 className="title-font font-bold text-gray-700  text-base mb-5">
                More From Fiverr
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/business?source=footer"
                  >
                    Fiverr Business
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/pro?source=footer"
                  >
                    Fiverr Pro
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/studios?source=footer"
                  >
                    Fiverr Studios
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/logo-maker?source=footer"
                  >
                    Fiverr Logo Maker
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.fiverr.com/resources/guides?source=footer"
                  >
                    Fiverr Guides
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://discover.fiverr.com/?utm_source=fiverr&utm_medium=link&utm_content=footer_link"
                  >
                    Get Inspired
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://www.clearvoice.com/"
                  >
                    ClearVoice
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://workspace.fiverr.com/?utm_source=fiverr&utm_medium=marketing_site&utm_content=footer_fib"
                  >
                    Fiverr Workspace
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://learn.fiverr.com/"
                  >
                    Learn
                  </a>
                </li>
                <li className="pb-4">
                  <a
                    className="text-gray-600 hover:underline hover:text-gray-500 "
                    href="https://workingnotworking.com/"
                  >
                    Working Not Working
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <hr style={{ width: "80%" }} />
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                width="91"
                height="27"
                viewBox="0 0 91 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#7A7D85">
                  <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#7A7D85">
                  <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
                </g>
              </svg>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-5  ">
              Fiverr International Ltd. 2022
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
              <div>
                <button className="ml-10 text-gray-500 hover:bg-slate-200 hover:rounded-full hover:text-black p-2">
                  <span className="mr-1">
                    <GlobalOutlined className="relative bottom-1" />
                  </span>
                  English
                </button>
              </div>
              <div>
                <button className="ml-3 text-gray-500 hover:bg-slate-200 hover:rounded-full hover:text-black p-2">
                  <span className="mr-1">$</span>
                  USD
                </button>
              </div>
              <div>
                <button className="ml-3 text-gray-500 hover:fill-slate-300 p-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="15.5"
                      fill="white"
                      stroke="currentColor"
                    ></circle>
                    <path d="M16 11.5833C17.1506 11.5833 18.0834 10.6506 18.0834 9.49999C18.0834 8.3494 17.1506 7.41666 16 7.41666C14.8494 7.41666 13.9167 8.3494 13.9167 9.49999C13.9167 10.6506 14.8494 11.5833 16 11.5833Z"></path>
                    <path d="M23.9167 12.4167H8.08333C7.86232 12.4167 7.65036 12.5045 7.49408 12.6607C7.3378 12.817 7.25 13.029 7.25 13.25C7.25 13.471 7.3378 13.683 7.49408 13.8392C7.65036 13.9955 7.86232 14.0833 8.08333 14.0833H13.5V25.5417C13.5 25.8179 13.6097 26.0829 13.8051 26.2782C14.0004 26.4736 14.2654 26.5833 14.5417 26.5833C14.8179 26.5833 15.0829 26.4736 15.2782 26.2782C15.4736 26.0829 15.5833 25.8179 15.5833 25.5417V19.5H16.4167V25.5417C16.4167 25.8179 16.5264 26.0829 16.7218 26.2782C16.9171 26.4736 17.1821 26.5833 17.4583 26.5833C17.7346 26.5833 17.9996 26.4736 18.1949 26.2782C18.3903 26.0829 18.5 25.8179 18.5 25.5417V14.0833H23.9167C24.1377 14.0833 24.3496 13.9955 24.5059 13.8392C24.6622 13.683 24.75 13.471 24.75 13.25C24.75 13.029 24.6622 12.817 24.5059 12.6607C24.3496 12.5045 24.1377 12.4167 23.9167 12.4167Z"></path>
                  </svg>
                </button>
              </div>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
