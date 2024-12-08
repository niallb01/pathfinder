import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-500 text-white relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="hover:underline">
          <div className="text-2xl font-bold">PathFinder</div>
        </Link>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/free-courses" className="hover:underline">
            Free Courses
          </Link>

          {/* Resources Dropdown */}
          <div ref={resourcesRef} className="relative">
            <button
              onClick={toggleResources}
              className="hover:underline focus:outline-none flex items-center space-x-1"
            >
              <span>Resources</span>
            </button>
            {isResourcesOpen && (
              <div className="absolute bg-white text-black mt-2 py-2 shadow-lg rounded">
                <Link
                  to="/tutorials"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Tutorials
                </Link>
                <Link
                  to="/articles"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Articles
                </Link>
                <Link to="/tools" className="block px-4 py-2 hover:bg-gray-100">
                  Tools
                </Link>
              </div>
            )}
          </div>

          <Link to="/ai-tools" className="hover:underline">
            AI Tools
          </Link>
          <Link to="/task-manager" className="hover:underline">
            Task Manager
          </Link>
          <Link to="/self-care" className="hover:underline">
            Self Care
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
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
