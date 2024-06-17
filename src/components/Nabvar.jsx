import React from 'react'
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from "../assets/styles/img/Pokeball_icon-icons.com_67533.png"
import "../assets/styles/css/navbar.css"

function Nabvar() {
    return (

        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >
                    <img
                        alt="Logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}Pokémon's</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mt-2 d-inline-block barraSeparacion">
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/"}> Home </NavLink >
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/Busqueda"}> Busqueda </NavLink >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nabvar