import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Chart from 'chart.js';
import arpuData from '../../../mock/MapJson/UkStateArpuTrend.json'
class ArpuTrendComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            data: arpuData,
            value: [],
            value1: [],
            value2: [],
            county: []
        }

    }
    data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            type: "line",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",

            data: [100, 65, 59, 4, 81, 56, 55, 40]
        },
        ]
    };

    chartRef2 = React.createRef();
    componentDidMount() {
        this.updateChange();
    }

    componentWillMount() {
        for (let i = 0; i < this.state.data.length; i++) {
            console.log(this.state.data[i].state[i]);
            if (this.state.data[i].date == "november") {             
                for (let j = 0; j < this.state.data[i].state.length; j++) {
                    // console.log(this.state.data[i].state[j].properties.arpu_Avg)
                    this.state.value.push(this.state.data[i].state[j].properties.arpu_Avg)
                    this.state.county.push(this.state.data[i].state[j].stateName)
                }
            }
            if (this.state.data[i].date == "december") {
                for (let j = 0; j < this.state.data[i].state.length; j++) {
                    this.state.value1.push(this.state.data[i].state[j].properties.arpu_Avg)
                }
            }
            if (this.state.data[i].date == "january") {
                for (let j = 0; j < this.state.data[i].state.length; j++) {
                    this.state.value2.push(this.state.data[i].state[j].properties.arpu_Avg)
                }
            }

        }
    }

    componentDidUpdate() {
        this.updateChange();
    }
    updateChange() {
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        new Chart(myChartRef2, {
            type: 'bar',
            data: {
                labels:this.props.county,
                 datasets: [
                    {
                        type: 'line',
                        label: 'Nov',
                        data: this.state.value,
                        fill: false,
                        borderWidth: 2,
                        borderColor: 'lightgreen',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                    {
                        type: 'line',
                        label: 'Dec',
                        data: this.state.value1,
                        fill: false,
                        borderWidth: 2,
                        borderColor: 'red',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                    {
                        type: 'line',
                        label: 'Jan',
                        data: this.state.value2,
                         fill: false,
                        borderWidth: 2,
                        borderColor: 'lightblue',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                ]
            },
            options: {
                legend: {
                    display: true,
                    position:'bottom'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            min: 'Jan 21st',
                            max: 'Apr 21st',
                        }
                    }],
                }
            }
        });
    }
    render() {
        console.log(this.state.data)
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <h3><b>ARPU Trend</b></h3>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width={1} style={{marginTop:"25%"}} textAlign='right'>
                        <h4><b>County</b></h4>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <canvas
                            ref={this.chartRef2}
                            width="100px"
                            height={"40vh"}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ArpuTrendComponent;