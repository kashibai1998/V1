import React from 'react';
import { Grid } from 'semantic-ui-react';
import Chart from 'chart.js';
// import arpuData from '../../../mock/MapJson/UkStateArpuTrend.json'
// import USarpuData from '../../../mock/MapJson/UsStateArpuTrend.json'
class CallToRevRatioComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            // data: arpuData,
            // value: [],
            // county: []
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
        },
        {
            type: "bar",
            fillColor: "rgba(220,20,220,0.2)",
            strokeColor: "rgba(220,20,220,1)",
            pointColor: "rgba(220,20,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [32, 25, 33, 88, 12, 92, 33]
        }
        ]
    };

    chartRef2 = React.createRef();
    componentDidMount() {
        this.updateChange();
    }
    componentDidUpdate() {
        this.updateChange();
    }

    // componentWillMount() {
    //     for (let i = 0; i < this.state.data.length; i++) {
    //         console.log(this.state.data[i].state[i]);
    //         this.state.county.push(this.state.data[i].state[i].stateName)
    //         if (this.state.data[i].date == "november") {
    //             for (let j = 0; j < this.state.data[i].state.length; j++) {
    //                 this.state.value.push(this.state.data[i].state[j].properties.arpu_Avg)
    //             }
    //         }
    //         if (this.state.data[i].date == "december") {
    //             for (let j = 0; j < this.state.data[i].state.length; j++) {
    //                 this.state.value.push(this.state.data[i].state[j].properties.arpu_Avg)
    //             }
    //         }
    //         if (this.state.data[i].date == "january") {
    //             for (let j = 0; j < this.state.data[i].state.length; j++) {
    //                 this.state.value.push(this.state.data[i].state[j].properties.arpu_Avg)
    //             }
    //         }
    //     }
    // }

    updateChange() {
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        new Chart(myChartRef2, {
            type: 'bar',
            data: {
                labels: this.props.county,
                datasets: [
                    {
                        borderWidth: 20,
                        data: this.props.value,
                        backgroundColor: "blue",
                                    
                    },
                    {
                        borderWidth: 0,
                        
                    },
                    {
                        type: 'line',
                        data: this.props.value,
                        fill: false,
                        borderWidth: 3,
                        maxBarThickness: 5,
                        borderColor: 'orange',
                        lineTension: 0,
                        steppedLine: true,
                        backgroundColor: "orange",
                    }
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
        return (
            <Grid style={{height:"100%"}}>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <h3><b>Call To Rev Ratio</b></h3>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <canvas
                            ref={this.chartRef2}
                            width="100px"
                            height={"53vh"}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{ margin: '0px', padding: '0px' }}>
                    <Grid.Column width={16} textAlign={'center'}>
                        <h4><b>State</b></h4>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16} textAlign={'center'}>
                        <h5><b>Total day calls Total day charge</b></h5>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default CallToRevRatioComponent;




