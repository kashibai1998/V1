import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js';
import './BandWidthOutageComponent.scss';
import { bandwidthGraphDataset, outageGraphDataset, BANDWIDTH_GRAPH_LABLES, BANDWIDTH_GRAPH_LABLES_OPTIONS, OUTAGE_GRAPH_LABLES_OPTIONS, OUTAGE_GRAPH_LABLES } from '../../../constants/graphconstants';
import { Segment, Grid,Loader, Dropdown } from 'semantic-ui-react';



const options = [
    { key: 1, text: 'past month', value: 0 },
    { key: 2, text: 'past week', value: 1 },
]
class BandWidthOutageComponent extends React.Component {
    static propTypes = {}

    constructor() {
        super();
        this.state = {
            chart2Data: [150, 120, 130, 110, 140, 115, 140, 135, 125],
            chart3Data: [0, 0, 140],
            value:1
        }
    }
    chartRef2 = React.createRef();
    chartRef3 = React.createRef();
    chart;
    chart1;

    componentDidMount(){
        this.chartUpdate()
    }
    componentDidUpdate(){
        this.chartUpdate()
    }
    chartUpdate() {
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        const myChartRef3 = this.chartRef3.current.getContext("2d");


        console.log(this.props.data.graph)

        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = new Chart(myChartRef2, {
            type: 'line',
            data: {
                labels: BANDWIDTH_GRAPH_LABLES,
                datasets: bandwidthGraphDataset(this.props.data.graph[this.state.value].bandwidthData)
            },
            options: BANDWIDTH_GRAPH_LABLES_OPTIONS
        });
           

        if (this.chart1) {
            this.chart1.destroy();
        }
        let labels=OUTAGE_GRAPH_LABLES
        if(this.state.value==0){
            labels=["week-1", "week-2", "week-3", "week-4"]
        }
        this.chart1=new Chart(myChartRef3, {
            type: 'line',
            data: {
                labels: labels,
                datasets: outageGraphDataset(this.props.data.graph[this.state.value].outageData)
            },
            options: OUTAGE_GRAPH_LABLES_OPTIONS
        });
    }
    handleChange = (e, { value }) => this.setState({ value })
    render() {
        
        if (this.props.data == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        return (
            <div>
                <Segment style={{borderRadius:"20px"}}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}><b>BANDWIDTH</b></Grid.Column>
                            <Grid.Column width={11} textAlign="right"><Dropdown options={options} size={'mini'} value={this.state.value} selection onChange={this.handleChange} style={{ borderRadius: '30px', minWidth: '8px' }} /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <canvas
                                ref={this.chartRef2}
                                width={"100%"}
                                height={"20vh"}
                            />
                        </Grid.Row>
                        <Grid.Row style={{padding:"0px", marginTop:"-30px"}}>
                        <Grid.Column><b>OUTAGE</b></Grid.Column>
                            <canvas
                                ref={this.chartRef3}
                                width={"100%"}
                                height={"20vh"}
                                id="scatter-graph"
                            />
                        </Grid.Row>
                    </Grid>


                </Segment>
            </div>
        )
    }
}

export default BandWidthOutageComponent