import React from 'react';
import '../App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand color="light" className="logo" href="/">
        Radial Inc.
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/components/">Dashboard</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Menu
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
