"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu"; 
import ThemeSwitch from "../ui/ThemeSwitch";
import SearchNavbar from "./SearchNavbar";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-gray-700 p-5 shadow-lg">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        
        <h1 className="text-white text-2xl font-bold">Mi App</h1>

        <div className="flex items-center space-x-6 ml-auto">
          <ul className="hidden md:flex space-x-4">
            <li>
            <Link
                href="/"
                className={`text-white px-3 py-2 rounded-lg transition-all duration-300 relative 
                hover:bg-opacity-60 ${
                  pathname === "/" ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white" : ""
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
            <Link
                href="/dragonball"
                className={`text-white px-3 py-2 rounded-lg transition-all duration-300 relative 
                hover:bg-opacity-60 ${
                  pathname === "/dragonball" ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white" : ""
                }`}
              >
                Dragon Ball
              </Link>
            </li>

          </ul>
          <SearchNavbar/> 

          <ThemeSwitch />

          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;