"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NavbarContainer,
  NavbarContent,
  NavLinks,
  NavLink,
  ButtonContainer,
  MobileButton,
  Spacer,
} from "../../Styles/navbar.styled";

import ThemeSwitch from "../ui/ThemeSwitch";
import SearchNavbar from "./SearchNavbar";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  return (
    <>
      <NavbarContainer>
        <NavbarContent>

          <NavLinks>
            <li>
              <NavLink href="/" className={pathname === "/" ? "active" : ""}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink href="/dragonball" className={pathname === "/dragonball" ? "active" : ""}>
                Dragon Ball
              </NavLink>
            </li>
          </NavLinks>

          <ButtonContainer>
            <SearchNavbar />
            <ThemeSwitch />

            <MobileButton onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </MobileButton>
          </ButtonContainer>
        </NavbarContent>
      </NavbarContainer>

      <Spacer /> 

      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;