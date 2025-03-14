"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-white text-2xl font-bold">Mi App</h1>

        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              href="/dragonball"
              className={`text-white px-3 py-2 rounded-lg 
              ${pathname === "/dragonball" ? "bg-blue-800" : "hover:bg-blue-700"}`}
            >
              Dragon Ball
            </Link>
          </li>
          <li>
            <Link
              href="/generator"
              className={`text-white px-3 py-2 rounded-lg 
              ${pathname === "/generator" ? "bg-blue-800" : "hover:bg-blue-700"}`}
            >
              Generar Password
            </Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;