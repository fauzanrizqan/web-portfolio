// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  const [isVisible, setIsVisible] = useState(false); // Navbar initially hidden

  useEffect(() => {
    const handleScroll = () => {
      // Show Navbar when scrolling down from the top
      if (window.scrollY > 940) {
        setIsVisible(true);
      } else {
        // Hide Navbar at the very top
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only render the Navbar if `isVisible` is true
  if (!isVisible) {
    return (// return Navbar but hidden
    <Navbar sticky="top" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">fauzanrizqan()</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )}

  return (
    <Navbar sticky="top" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">fauzanrizqan()</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
