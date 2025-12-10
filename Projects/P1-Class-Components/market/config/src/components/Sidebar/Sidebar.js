import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Sidebar.scss';
import { Icon } from 'semantic-ui-react'

export class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        console.log(this.props.routes)
        return (
            <div class="sidenav">
                {this.props.routes.map((prop, key) => {
                    if (!prop.redirect)
                        return (
                            <NavLink
                                to={prop.layout + prop.path}
                                className="nav-link "
                                activeClassName="active"
                            >
                                <Icon name={prop.icon} />
                            </NavLink>
                        );
                    return null;
                })}
            </div>
        );
    }
}