import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../../src/Components/Navigation.css";

function Navigation({ Enroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Courses", link: "/courses" },
    { id: 4, text: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed z-50 w-full mb-6 bg-yellow-600 shadow-md shadow-slate-400">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto md:px-6">
        <Link to="/" className="flex items-center">
          <img
            src="/Assets/Image/Colorful_Brain_Human_Technology_Logo-removebg-preview.png"
            alt="logo"
            className="w-16 h-16 md:w-24 md:h-24"
          />
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="w-8 h-8" />
            ) : (
              <AiOutlineMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-3/4 h-full bg-yellow-600 transition-transform duration-300 ease-in-out md:static md:flex md:w-auto md:h-auto md:bg-transparent md:translate-x-0`}
        >
          <ul className="flex flex-col items-start justify-center h-full p-6 space-y-6 md:flex-row md:space-y-0 md:space-x-8 md:p-0">
            {navItems.map((item) => (
              <li key={item.id} className="md:border-none">
                <NavLink
                  to={item.link}
                  className="block text-xl font-bold text-white transition-all hover:underline hover:text-gray-900 md:text-base"
                  onClick={toggleMenu}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
            <li className="mt-4 md:hidden">
              <a href="/enroll">
                <Button txt="Enroll Now" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <a href="/enroll">
            <Button txt="Enroll Now" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
