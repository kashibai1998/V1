import React, { Component } from "react";
import './Header.scss';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from '../../routes.js';
import logo from '../../assets/img/logo.png';
import person from '../../assets/img/faces/person.png';
import { FaSearch } from "react-icons/fa";

class Header extends Component {

  render() {
    return (
      <div className="header">
      <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
        <Navbar.Brand className="navbar-brand">
          <img src={logo}></img>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={this.mobileSidebarToggle} /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav as="ul" className="ml-auto">
            {/* {routes.map((prop) => {
              if (!prop.redirect)
                return (
                  <Nav.Item as="li">
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link "
                      activeClassName="active"
                    >
                      <p>{prop.name}</p>
                    </NavLink>
                  </Nav.Item>

                );
              return null;
            })} */}
            <Nav.Item as="li">
              <Nav.Link><p>Home</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link><p>FAQ</p></Nav.Link>
            </Nav.Item>
            
              
              <Nav.Item as="li">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                <input ref="usernameItem" type="text" placeholder="Enter User ID" />
              </form>
              </Nav.Item>
            
            <Nav.Item as="li" className="border-right">
              <Nav.Link><i><FaSearch onClick={this.searchbar} /></i> </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link><p>Sign out</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link><p style={{ fontWeight: "normal" }}>Alex Richardson</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <img className=" user-image" src={person}></img>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

    );
  }
}

export default Header;
