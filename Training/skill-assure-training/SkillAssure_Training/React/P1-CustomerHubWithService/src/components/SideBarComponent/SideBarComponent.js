import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { Icon, Menu, Segment, Sidebar, Popup } from 'semantic-ui-react';
import routes from "../../routes.js";
import './SideBarComponent.scss';
class SideBarComponent extends React.Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
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


  render() {
    return (
      <div className="sidebar-component-style">
        <Sidebar.Pushable as={Segment} className="sidebar-style">
          <Sidebar
            as={Menu}
            icon='labeled'
            vertical
            visible
            width={'100px'}
          >
            <Popup
              trigger={<Link to="/admin/dashboard">
                <Menu.Item as='a'>
                  <Icon name='home' />
                </Menu.Item>
              </Link>}
              content='Home'
              position='right'
            />
            <Popup
              trigger={<Link to="/admin/customer">
                <Menu.Item as='a'>
                  <Icon name='user' />
                </Menu.Item>
              </Link>}
              content='User'
              position='right'
            />
            <Popup
              trigger={<Link to="/admin/micro-interaction">
                <Menu.Item as='a'>
                  <Icon name='area chart' />
                </Menu.Item>
              </Link>}
              content='Micro Interaction'
              position='right'
            />
           
          </Sidebar>

          <Sidebar.Pusher className="pusher-style">

            <Switch>
              {this.getRoutes(routes)}
            </Switch>

          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    )
  }
}


export default SideBarComponent
