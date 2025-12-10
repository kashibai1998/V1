import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import SideBarComponent from '../components/SideBarComponent/SideBarComponent';
import BusinessSideBarComponent from '../components/BusinessSideBarComponent/BusinessSideBarComponent';

class Layout extends Component {

    // getRoutes = routes => {
    //     return routes.map((prop, key) => {
    //         if (prop.layout === "/admin") {
    //             return (
    //                 <Route
    //                     path={prop.layout + prop.path}
    //                     render={props => (
    //                         <prop.component
    //                             {...props}
    //                         />
    //                     )}
    //                     key={key}
    //                 />
    //             );
    //         } else {
    //             return null;
    //         }
    //     });
    // };

    render() {
        let layout = this.props.location.state
        let str=this.props.location.pathname
        if(str.search('churn')>0|| str.search('arpu')>0||str.search('sentiment')>0){
            layout={}
        }
        return (
            <div>
                <Header />
                {

                    layout==undefined &&
                    <SideBarComponent />
                }
                {
                    layout!=undefined &&
                    <BusinessSideBarComponent />
                }
                <Footer />
            </div>
        )
    }
}
export default Layout; 