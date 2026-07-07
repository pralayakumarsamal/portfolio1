

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-3xl font-bold">
          Pralaya<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-purple-400 font-medium">
            Home
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            Contact
          </a>
        </nav>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:block bg-linear-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
        >
          Hire Me
        </a>

        {/* Mobile Icon */}
        <button className="md:hidden text-2xl">
          <FaBars />
        </button>

      </div>
    </header>
  );
};

export default Navbar;