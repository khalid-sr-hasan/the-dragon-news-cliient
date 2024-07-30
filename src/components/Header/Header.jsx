import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [time, setTime] = useState(
        moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    );

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        }, 1000);

        return () => clearInterval(timeInterval);
    }, [time]);

    return (
        <div className="container mx-auto">
            <div className="text-center mt-4">
                <img src={logo} alt="" />
                <p>
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{time}</p>
            </div>

            {/* marque */}
            <div className="bg-secondary d-flex align-items-center py-4 ps-3 rounded-2 text-white">
                <Button variant="danger">Danger</Button>
                <Marquee>
                    I can be a React component, multiple React components, or
                    just some text.
                </Marquee>
            </div>

            {/* nav bar  */}
            <div className="mt-5">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0 d-flex align-items-center gap-4 fw-bold fs-5"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <NavLink className="text-decoration-none" to="/">
                                Home
                            </NavLink>
                            <NavLink
                                className="text-decoration-none"
                                to="/about"
                            >
                                About
                            </NavLink>

                            <NavLink
                                className="text-decoration-none"
                                to="/career"
                                disabled
                            >
                                Link
                            </NavLink>
                        </Nav>
                        <div className="d-flex gap-3">
                            <Button variant="outline-success">Search</Button>
                            <Button variant="secondary">Secondary</Button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
