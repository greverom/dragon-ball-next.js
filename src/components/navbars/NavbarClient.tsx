"use client";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

const NavbarClient = () => {
  return <Navbar />;
};

export default NavbarClient;