import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <Nav>
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/recruiters">Recruiters</Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;