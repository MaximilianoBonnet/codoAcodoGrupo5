/* jshint esversion: 6 */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return ( < Navbar bg = "light"
        expand = "lg" >
        <
        Navbar.Brand href = "#home" > Mi Sitio Web < /Navbar.Brand> <Navbar.Toggle aria-controls="basic-navbar-nav" / >

        <
        Navbar.Collapse id = "basic-navbar-nav" >
        <
        Nav className = "mr-auto" >
        <
        Nav.Link href = "#nosotros" > Nosotros < /Nav.Link> <Nav.Link href="#servicios" > Servicios </Nav.Link > < Nav.Link href = "#contacto" > Contacto < /Nav.Link> </Nav > < /Navbar.Collapse> < /
        Navbar >
    );
}


export default NavBar;