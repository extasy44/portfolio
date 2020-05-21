import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import auth0 from '../../services/auth0';

const BaNavLink = (props) => {
    const { route, title, className } = props;

    return (
      <Link href={route}>
        <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
      </Link>
    );
}

const Login = () => {
    return (
        <span className="nav-link port-navbar-link clickable" onClick={auth0.login}>Log in</span>
    )
}

const LogOut = () => {
  return <span className="nav-link port-navbar-link clickable" onClick={auth0.logout}>Log Out</span>;
};

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { isAuthenticated, user, className } = props;
  console.log('Header : ',props);

  return (
    <div>
      <Navbar
        className={`port-navbar port-nav-base absolute ${className}`}
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand className="port-navbar-brand" href="/">
          Heejun
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="port-navbar-container" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BaNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BaNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BaNavLink route="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BaNavLink route="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BaNavLink route="/cv" title="Cv" />
            </NavItem>
            {!isAuthenticated && (
              <NavItem className="port-navbar-item">
                <Login />
              </NavItem>
            )}
            {isAuthenticated && (
              <NavItem className="port-navbar-item">
                <LogOut />
              </NavItem>
            )}
            {isAuthenticated && (
              <NavItem className="port-navbar-item">
                <span className="nav-link">{user}</span>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;