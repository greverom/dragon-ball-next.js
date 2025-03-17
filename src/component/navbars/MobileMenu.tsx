"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const pathname = usePathname();

  if (!isOpen) return null; 

  return (
    <ul className="md:hidden mt-2 p-4 space-y-2 text-left">
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
  );
};

export default MobileMenu;