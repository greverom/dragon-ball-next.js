"use client";

import { usePathname } from "next/navigation";
import { MobileMenuContainer, NavLink } from "../../Styles/navbar.styled"; 
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null; 

  return (
    <MobileMenuContainer>
      <li>
        <NavLink href="/" className={pathname === "/" ? "active" : ""} onClick={toggleMenu}>
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink href="/dragonball" className={pathname === "/dragonball" ? "active" : ""} onClick={toggleMenu}>
          Dragon Ball
        </NavLink>
      </li>
    </MobileMenuContainer>
  );
};


export default MobileMenu;