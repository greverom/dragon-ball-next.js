"use client";

import { usePathname } from "next/navigation";
import { MobileMenuContainer, NavLink, CloseButton } from "../../Styles/navbar.styled"; 
import { useEffect } from "react";
import { X } from "lucide-react"; 

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

      <CloseButton onClick={toggleMenu}>
        <X size={28} />
      </CloseButton>

      <li>
        <NavLink href="/" className={pathname === "/" ? "active" : ""} onClick={toggleMenu} $isMobile>
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink href="/dragonball" className={pathname === "/dragonball" ? "active" : ""} onClick={toggleMenu} $isMobile>
          Dragon Ball
        </NavLink>
      </li>
    </MobileMenuContainer>
  );
};

export default MobileMenu;