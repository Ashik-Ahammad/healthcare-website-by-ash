import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';
import './Header.css'
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {

    const { user, logOut } = useFirebase();

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="/home">
                            <img
                                alt=""
                                src={logo}
                                width="100"
                                height="50"
                                className="d-inline-block align-top"
                            />{' '}
                            <h6 className="text-danger">+ULTRA PHARMA LIMITED</h6>
                        </Navbar.Brand>
                    </Container>
                    <NavLink className="nav-style" activeStyle={activeStyle} to="/home">HOME</NavLink>
                    <NavLink className="nav-style" activeStyle={activeStyle} to="/ourservices">OUR SERVICES</NavLink>
                    <NavLink className="nav-style" activeStyle={activeStyle} to="/products">PRODUCTS</NavLink>
                    <NavLink className="nav-style" activeStyle={activeStyle} to="/aboutus">ABOUT US</NavLink>

                    <span className="text-info">{user.displayName}</span>

                    {
                        user.email ?
                            <button onClick={logOut}>Log Out</button>
                            :
                            <NavLink className="nav-style" activeStyle={activeStyle} to="/login">Login</NavLink>
                    }
                </Navbar>

            </>

        </div>
    );
};

export default Header;