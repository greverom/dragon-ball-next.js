"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  const pathname = usePathname();

  if (!isOpen) return null; 

  return (
    <ul className="md:hidden mt-2 p-4 space-y-2 text-left">
      <li>
        <Link
          href="/dragonball"
          className={`block text-white px-3 py-2 rounded-lg 
          ${pathname === "/dragonball" ? "font-bold" : "hover:bg-blue-600"}`}
          onClick={toggleMenu} 
        >
          Dragon Ball
        </Link>
      </li>
      <li>
        <Link
          href="/generator"
          className={`block text-white px-3 py-2 rounded-lg
          ${pathname === "/generator" ? "font-bold" : "hover:bg-blue-600"}`}
          onClick={toggleMenu}
        >
          Generar Password
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;