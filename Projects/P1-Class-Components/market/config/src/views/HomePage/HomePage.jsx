import React, { Component } from "react";
import AddOns from "../../widgetComponents/AddOns/AddOns";
import './HomePage.scss';

import { Grid,Segment } from 'semantic-ui-react'
import Filters from '../../widgetComponents/Filters/Filters'
import Products from '../../widgetComponents/Products/Products';
class HomePage extends Component {


  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: [],
      toggle:false
    };
  }


  handleData(data) {
    this.setState({
      fromChild: data
    });
  
  }

  render() {
    
    return (
      <div className="home-page">
        <Grid>
          <Grid.Row className='home-row'>
            <Grid.Column width={3}>
              <Filters handlerFromParant={this.handleData} />
            </Grid.Column>
            <Grid.Column width={9}>
              <Segment basic={1}><Products data={this.state.fromChild} toggle={this.state.toggle}/></Segment>
            </Grid.Column>
            <Grid.Column width={4}>
            </Grid.Column>
           </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default HomePage;
