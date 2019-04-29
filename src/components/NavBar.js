import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Radial Inc. Thermostat Dashboard</NavbarBrand>
    </Navbar>
  );
};

export default NavBar;
