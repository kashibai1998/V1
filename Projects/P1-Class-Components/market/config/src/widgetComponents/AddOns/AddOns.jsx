import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Card, Grid } from 'semantic-ui-react';
import addOnsData from '../../actions/HomePageActions/AddOnsAction';
import './AddOns.scss';

class AddOns extends Component {

    componentWillMount() {
        let id = localStorage.getItem('userId')
        const ADD_ONS_ACTION = addOnsData(id);
        this.props.dispatch(ADD_ONS_ACTION);
    }

    render() {
        let addOnsData = this.props.addOnsData

        if (typeof addOnsData === "undefined" || addOnsData.length === 0) {
            return (
                <h1>Loading</h1>
            );
        }

        return (
            <div className="add-ons">
                <Card fluid>
                    <Grid columns={2} divided stackable>
                        <Grid.Row className="add-ons-content">
                            <Grid.Column >
                                <h2>Current add-ons</h2>
                                {
                                    addOnsData.currentAddOns.map((item) =>{
                                        return(
                                            
                                                <Grid.Row>
                                                      <Grid.Column width={8}>
                                                          <p>{item.name}</p>
                                                      </Grid.Column>
                                                      <Grid.Column width={4}>
                                                          <p>{item.value}</p>
                                                      </Grid.Column>
                                                      <Grid.Column>
                                                          <p><a href="#"><b>X</b></a></p>
                                                      </Grid.Column>
                                                </Grid.Row>
                                            
                                        )
                                    })
                                }
                            </Grid.Column>

                            <Grid.Column>
                                <h2>Popular add-ons</h2>
                                <Grid columns={3}>
                                    <Grid.Column>
                                        <p>{addOnsData.currentAddOns[0].name}</p>
                                        <p>{addOnsData.currentAddOns[1].name}</p>
                                        <p>{addOnsData.currentAddOns[2].name}</p>
                                    </Grid.Column>
                                    <Grid.Column >
                                        <p>{addOnsData.popularAddOns[0].value}</p>
                                        <p>{addOnsData.popularAddOns[1].value}</p>
                                        <p>{addOnsData.popularAddOns[2].value}</p>
                                    </Grid.Column>

                                    <Grid.Column>
                                        <p><a href="#"><b>ADD</b></a></p>
                                        <p><a href="#"><b>ADD</b></a></p>
                                        <p><a href="#"><b>ADD</b></a></p>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        addOnsData: state.AddOnsReducer.addOnsData
    }
}
export default connect(mapStateToProps)(AddOns);


// we can write this methods for assigning global state from store to this class as props 

