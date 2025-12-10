import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Chart from 'chart.js';
import arpuData from '../../../mock/MapJson/UkStateArpuTrend.json'

class ArpuTimelineComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: arpuData,
            county: [],
            value: [],
            value1: [],
            value2:[]
        }
    }

    data = {
        datasets: [{
            type: "line",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 4, 81, 56, 55, 40]
        }
        ]
    };

    chartRef2 = React.createRef();
    chartRef3 = React.createRef();

    componentDidMount() {
        this.updateChange();
    }
    componentDidUpdate() {
        this.updateChange();
    }

    componentWillMount() {
        for (let i = 0; i < this.state.data.length; i++) {
            console.log(this.state.data[i].state[i]);
            this.state.county.push(this.state.data[i].state[i].stateName)
            if (this.state.data[i].date == "november") {
                for (let j = 0; j < this.state.data[i].state.length; j++) {
                    this.state.value.push(this.state.data[i].state[j].properties.arpu_Avg)
                }
            }
            if (this.state.data[i].date == "december") {
                for (let j = 0; j < this.state.data[i].state.length; j++) {
                    this.state.value.push(this.state.data[i].state[j].properties.arpu_Avg)
                    this.state.value1.push(this.state.data[i].state[j].properties.arpu_Avg)
                }
            }
            if (this.state.data[i].date == "january") {
                for (let j = 0; j < this.state.data[i].state.length; j++) {
                    this.state.value.push(this.state.data[i].state[j].properties.arpu_Avg)
                    this.state.value1.push(this.state.data[i].state[j].properties.arpu_Avg)

                }
            }
        }
    }

    updateChange() {
       
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        new Chart(myChartRef2, {
            type: 'line',
            data: {
                labels: ["Apr 30", "May 07", "May 14", "May 21", "May 28", "Apr 30", "June 07", "June 14", "June 21", "June 28", "June 30", "July 07", "July 14", "July 21", "July 28"],
                
                datasets: [
                    {
                        type: 'line',
                       
                        data: this.props.value,
                        
                        fill: false,
                        borderWidth: 2,
                        borderColor: 'lightgreen',
                        
                        lineTension: 0,
                        
                        backgroundColor: "white",
                    },
                    {
                        type: 'line',
                        
                        data: this.state.value1,
                       fill: false,
                        borderWidth: 2,
                        borderColor: 'orange',
                        
                        lineTension: 0,
                        
                        backgroundColor: "white",
                    },
                    {
                        type: 'line',
                        data: this.props.value-10,
                        fill: false,
                        borderWidth: 2,
                        borderColor: 'blue',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                ]
            },
            options: {
                legend: {
                    display: false
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
        const myChartRef3 = this.chartRef3.current.getContext("2d");
        new Chart(myChartRef3, {
            type: 'line',
            data: {
                labels: ["Apr 30", "May 07", "May 14", "May 21", "May 28", "Apr 30", "June 07", "June 14", "June 21", "June 28", "June 30", "July 07", "July 14", "July 21", "July 28"],
                datasets: [
                    {
                        type: 'line',
                        data: this.props.value,
                         fill: false,
                        borderWidth: 2,
                        borderColor: 'lightgreen',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                    {
                        type: 'line',
                         data: this.state.value1,
                        fill: false,
                        borderWidth: 2,
                        borderColor: 'orange',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                ]
            },
            options: {
                legend: {
                    display: false
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
        console.log(this.state.value1)
        console.log(this.state.value)
        console.log(this.props.value)
        console.log(this.state.value2)
        return (
            <Grid>
                <Grid.Row style={{ paadiing: '0px' }}>
                    <Grid.Column width={16}>
                        <h3><b>ARPU Timeline with Gender and Age group</b></h3>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={1} verticalAlign={'middle'}>
                        <h4><b>Female</b></h4>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <canvas
                            ref={this.chartRef2}
                            width="100px"
                            height={"12vh"}
                        />
                        <div style={{ textAlign: 'center', padding: '0px', margin: '0px' }}>
                            <h5><b>ARPUValue[below 18] ARPUValue[18-40]</b></h5>
                            <h5><b>ARPUValue[above 40]</b></h5>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={1} verticalAlign={'middle'}>
                        <h4><b>Male</b></h4>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <div>
                            <canvas
                                ref={this.chartRef3}
                                width="100px"
                                height={"13vh"}
                            />
                        </div>
                        <div style={{ textAlign: 'center', padding: '0px', margin: '0px' }}>
                        <h5><b>ARPUValue[below 18] ARPUValue[18-40]</b></h5>
                            <h5><b>ARPUValue[above 40]</b></h5>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ArpuTimelineComponent;