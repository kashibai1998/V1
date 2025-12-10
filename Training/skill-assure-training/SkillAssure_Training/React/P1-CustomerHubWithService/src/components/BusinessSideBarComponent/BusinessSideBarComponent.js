import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import routes from "../../routes.js";
import './BusinessSideBarComponent.scss';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
const styles = {

  largeIcon: {
    width: 200,
    height: 60,
  },

};

class BusinessSideBarComponent extends React.Component {

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
            <Link to={{ pathname: '/admin/arpu', state: { page: 'businessReport' } }}>
              <Menu.Item as='a'>
                <Icon name='money bill alternate outline' />
              </Menu.Item>
            </Link>
            <Link to={{ pathname: '/admin/churn', state: { page: 'businessReport' } }}>
              <Menu.Item as='a'>
                <DirectionsRunIcon iconStyle={styles.largeIcon} />
              </Menu.Item>
            </Link>
            <Link to={{ pathname: '/admin/sentiment', state: { page: 'businessReport' } }}>
              <Menu.Item as='a'>
                <Icon name='smile' />
              </Menu.Item>
            </Link>
            <Link to={{ pathname: '/admin/channel', state: { page: 'businessReport' } }}>
              <Menu.Item as='a'>
                <Icon name='computer' />
              </Menu.Item>
            </Link>
            <Link to={{ pathname: '/admin/unified', state: { page: 'businessReport' } }}>
              <Menu.Item as='a'>
                <Icon name='id badge' />
              </Menu.Item>
            </Link>

            {/* <Link target="_blank" to={{ pathname: '/admin/feedbacklab', state: { page: 'businessReport' } }}> */}
            <a href='https://feedbacklab.climber.cloud/sense/app/e30f516b-4eec-47c4-b50f-2d6281386d95/sheet/859dc57f-3036-4f38-b88f-ae22b585da9f/state/analysis' target="_blank">

              <Menu.Item as='a'>
                <Icon name='address card' />


              </Menu.Item>
            </a>
            {/* </Link> */}
          </Sidebar>

          <Sidebar.Pusher className="pusher-style">

            <Switch>
              {this.getRoutes(routes)}
            </Switch>

          </Sidebar.Pusher>
        </Sidebar.Pushable >

      </div >
    )
  }
}


export default BusinessSideBarComponent
