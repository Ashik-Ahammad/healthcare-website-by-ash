import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="100"
                                height="50"
                                className="d-inline-block align-top"
                            />{' '}
                            <h6>ULTRA PHARMA LIMITED</h6>
                        </Navbar.Brand>
                    </Container>
                    <NavLink className="nav-style" activeStyle={activeStyle} to="/home">HOME</NavLink>
                    <NavLink className="nav-style" activeStyle={activeStyle} to="/ourcourses">OUR SERVICES</NavLink>
                    <NavLink className="nav-style" activeStyle={activeStyle} to="/testinfo">PRODUCTS</NavLink>
                    <NavLink className="nav-style" activeStyle={activeStyle} to="/aboutus">ABOUT US</NavLink>
                </Navbar>

            </>

        </div>
    );
};

export default Header;