import React, { useState } from "react";
import Logo from "./Logo";

const Nav = () => {
  const src = "./images/LogoBlack.png";
  const avt = "./images/profile.jpeg";
  const alt = "dribble";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 outline-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <Logo src={src} alt={alt} />
          </div>
          <button
            type="button"
            className="text-black focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>

          <div
            className={`ml-10 space-x-4 text-black ${
              isOpen ? "flex flex-col" : "hidden"
            } md:flex md:flex-row`}
          >
            <a
              href="#"
              className="inline-block hover:border-black border-transparent border-2"
            >
              Inspiration
            </a>
            <a
              href="#"
              className="inline-block hover:border-black border-transparent border-2"
            >
              Find Work
            </a>
            <a
              href="#"
              className="inline-block hover:border-black border-transparent border-2"
            >
              Learn Design
            </a>
            <a
              href="#"
              className="inline-block hover:border-black border-transparent border-2"
            >
              GoPro
            </a>
            <a
              href="#"
              className="inline-block hover:border-black border-transparent border-2"
            >
              Hire Designers
            </a>
          </div>
        </div>
        <div className="flex items-center relative">
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-2 py-1 mr-2 text-black rounded"
          />
          <div className="absolute left-0 ml-2 flex items-center justify-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
            </svg>
          </div>
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="fill-current text-black"
            >
              <path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          </div>
          <div className="ml-4">
            <img src={avt} alt="Avatar" className="h-8 w-8 rounded-full" />
          </div>
          <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded flex items-center ml-4">
            <span>Update</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
