import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from 'semantic-ui-react';
import Header from "../components/Header/Header.js";
import routes from "../routes.js";
import './Layout.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.myCallback = this.myCallback.bind(this);
    this.state = {
      searchValue: null
    };
  }

  myCallback = (localuser) => {
    this.setState({ searchValue: localuser });
    
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
                searchValue={this.state.searchValue}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render() {
    console.log(this.state.searchValue)
    return (
      <div className="layout">
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column>
              <Header />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid celled='internally'>
          <Grid.Row >
            <Grid.Column>
              <div ref="mainPanel">
                <Switch>{this.getRoutes(routes)} </Switch>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
       
      </div>
    );
  }
}

export default Layout;
