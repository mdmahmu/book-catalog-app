import React from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/book logo.png";
import { Link } from "react-router-dom";

const DefaultNavbar: React.FC = () => {
  return (
    <Navbar className="text-white h-[60px] box-border">
      <Link to={"/"} className="flex items-center">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9 rounded"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Book Boom
        </span>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to={"/"}>Home</Link>
        <Link to={"/books"}>All Books</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/register">Sign Up</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DefaultNavbar;
