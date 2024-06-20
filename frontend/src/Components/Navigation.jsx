import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

function Navigation({Enroll}) {
  return (
    <header className="items-center px-3 bg-yellow-600 md:flex md:justify-between">
        <Link to='/'>
            <img src="/Assets/Image/Colorful_Brain_Human_Technology_Logo-removebg-preview.png" alt="logo" style={{
              width: "100px",
              height: "100px"
              
            }}/>
        </Link>

      <div className="items-center justify-between hidden w-3/5 md:flex">
        <nav>
          <ul className="flex space-x-10 justify-starts">
            <li>
              <NavLink to="/" className="font-bold transition-all hover:underline hover:text-slate-900 hover:"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="font-bold transition-all hover:underline hover:text-slate-400 hover:">About</NavLink>
            </li>
            <li>
              <NavLink to="/courses" className="font-bold transition-all hover:underline hover:text-slate-400 hover:">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="font-bold transition-all hover:underline hover:text-slate-400 hover:">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div>
            <Button txt="Enroll Now" />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
