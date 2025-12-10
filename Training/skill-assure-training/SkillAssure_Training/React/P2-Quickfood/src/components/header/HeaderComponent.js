import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const HeaderComponent = () => {
    const activeStyle = { color: "#F15B2A" };
    return (
        <nav className="navbar">
            <Navbar.Brand>
                {/* <Link className="navbar-brand" to="/"> */}
                <h2>Quick Food</h2>
                {/* </Link> */}
            </Navbar.Brand>
            <Link to="/">
                Home
            </Link>
            <Link to="about">
                About
            </Link>
            {/* <ul>
                <li>
                    <Link to="/">
                         Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                         About
                    </Link>
                </li>
                <li>
                    <Link to="/course">
                         Course
                    </Link>
                </li>
            </ul>  */}
        </nav>
    );
};
export default HeaderComponent;