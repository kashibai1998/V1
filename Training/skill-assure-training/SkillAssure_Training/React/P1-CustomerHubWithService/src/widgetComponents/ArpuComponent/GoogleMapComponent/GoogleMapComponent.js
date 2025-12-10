import React from 'react';
import { Card } from 'semantic-ui-react';
import LandingPage from './LandingPage.js';
class GoogleMapComponent extends React.Component {
   
    getRegionValue=(data)=>{
        this.props.getCountryData(data)
    }

    render() {

        return (
            <div>
                <Card.Header as='h3'><b>ARPU Graphical analysis</b></Card.Header>
                <LandingPage filterData={this.props.filterData} getRegionValue={this.getRegionValue}/>
            </div>
        )
    }
}

export default GoogleMapComponent;