import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 text-white relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">PathFinder</div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#features" className="hover:underline">
            Free Courses
          </a>
          <a href="#features" className="hover:underline">
            Resources
          </a>
          <a href="#contact" className="hover:underline">
            AI Tools
          </a>
          <a href="#contact" className="hover:underline">
            Task Manager
          </a>
          <a href="#contact" className="hover:underline">
            Self Care
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Burger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-500 z-10">
          <div className="space-y-2 p-4">
            <a href="#home" className="block hover:underline">
              Home
            </a>
            <a href="#features" className="block hover:underline">
              Features
            </a>
            <a href="#contact" className="block hover:underline">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
