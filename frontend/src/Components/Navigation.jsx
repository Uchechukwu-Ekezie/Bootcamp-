import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navigation({ Enroll }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items array
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Courses", link: "/courses" },
    { id: 4, text: "Contact", link: "/contact" },
  ];

  return (
    <header className="bg-yellow-600">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/Assets/Image/Colorful_Brain_Human_Technology_Logo-removebg-preview.png"
            alt="logo"
            style={{ width: "100px", height: "100px" }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:justify-center md:w-full mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className="block px-2 py-1 font-bold text-white transition-all hover:underline hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Enroll Button for Mobile */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
          <Button txt="Enroll Now" />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
