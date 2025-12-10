import React from 'react';
// import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import BarChartComponent from '../../widgetComponents/ChurnComponent/BarChartComponent/BarChartComponent';
import ChurnModalWindowFilter from '../../widgetComponents/ChurnComponent/ChurnModalWindowFilter/ChurnModalWindowFilter';
import ChurnUsers from '../../widgetComponents/ChurnComponent/ChurnUsers/ChurnUsers';
// import PieChartComponent from '../../widgetComponents/ChurnComponent/PieChartComponent/PieChartComponent';
import ChurnInsightsComponents from '../../widgetComponents/ChurnComponent/ChurnInsightsComponents/ChurnInsightsComponents';
import PieChartComponent from '../../components/PieChartComponent/PieChartComponent';

class Churn extends React.Component {


    state = {
        filterData: null,
        height: "350vh",
        width: "480%",
        labels: [
            "Loss of sim card",
            "Service issue",
            "call drops",
            "montly charge",
            "Billing issues"
        ],
        dataPoints: [25, 13, 35, 20, 7],
        backgroundColor: [
            "#EF8E9D",
            "blue",
            "green",
            "orange",
            "red"
        ],

    }


    getFormFilterData = (data) => {
        this.setState({
            filterData: data
        })
    }

    render() {

        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12} textAlign="center">
                            <h2><b>CHURN Dashboard</b></h2>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign={'right'}>
                            <ChurnModalWindowFilter getFormFilterData={this.getFormFilterData} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row stretched style={{ paddingTop: '0px' }}>
                        <Grid.Column width={5} >
                            <PieChartComponent data={this.state.labels} height={this.state.height} width={this.state.width} backgroundColor={this.state.backgroundColor} points={this.state.dataPoints} />
                        </Grid.Column>
                        <Grid.Column width={11} >
                            <ChurnInsightsComponents />
                        </Grid.Column>
                    </Grid.Row >
                    <Grid.Row stretched>
                        <Grid.Column width={5} >
                            <BarChartComponent />
                        </Grid.Column>
                        <Grid.Column width={11} >
                            <ChurnUsers />
                        </Grid.Column>
                    </Grid.Row >
                </Grid >
            </div >
        )
    }
}



export default Churn;