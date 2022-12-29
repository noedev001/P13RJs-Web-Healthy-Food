import React, { useState } from "react";
import { ContainerHeader, Link, Logo, Menu, Navbar } from "./header.styled";
import logo from "../../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <ContainerHeader>
      <Logo href="#">
        <img src={logo} alt="logo" />
      </Logo>
      <Menu onClick={() => handleClick()} cerrar={menu}>
        {menu === false ? <FaBars /> : <FaTimes />}
      </Menu>
      <Navbar cerrar={menu}>
        <Link href="#home">home</Link>
        <Link href="#product">Product</Link>
        <Link href="#about">About</Link>
        <Link href="#service">Service</Link>
        <Link href="#review">Review</Link>
        <Link href="#contact">Contact</Link>
      </Navbar>
    </ContainerHeader>
  );
};

export default Header;
