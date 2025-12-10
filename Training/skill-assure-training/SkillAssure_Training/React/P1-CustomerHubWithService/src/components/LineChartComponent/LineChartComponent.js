import React from 'react';
// import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
// import './CustomerComponent.scss'
import Chart from 'chart.js';


class LineChartComponent extends React.Component {
    constructor() {
        super();
        this.state = {

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

    // componentWillMount() {
    //     for (let i = 0; i < this.state.data.length; i++) {
    //         console.log(this.state.data[i].state[i]);
    //         if (this.state.data[i].date == "november") {
    //             for (let j = 0; j < this.state.data[i].state.length; j++) {
    //                 // console.log(this.state.data[i].state[j].properties.arpu_Avg)
    //                 this.state.value.push(this.state.data[i].state[j].properties.arpu_Avg)
    //                 this.state.county.push(this.state.data[i].state[j].stateName)
    //             }
    //         }
    //         if (this.state.data[i].date == "december") {
    //             for (let j = 0; j < this.state.data[i].state.length; j++) {
    //                 this.state.value1.push(this.state.data[i].state[j].properties.arpu_Avg)
    //             }
    //         }
    //         if (this.state.data[i].date == "january") {
    //             for (let j = 0; j < this.state.data[i].state.length; j++) {
    //                 this.state.value2.push(this.state.data[i].state[j].properties.arpu_Avg)
    //             }
    //         }

    //     }
    // }

    componentDidUpdate() {
        this.updateChange();
    }
    updateChange() {
        console.log(this.props.mobileData)
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        new Chart(myChartRef2, {
            type: 'bar',
            data: {

                labels: [1, 2, '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],


                datasets: [
                    {
                        type: 'line',
                        label: this.props.mobileLabel,
                        //data: [3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2],
                        data: this.props.mobileData,
                        fill: false,
                        borderWidth: 2,
                        borderColor: 'orange',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                    {
                        type: 'line',
                        label: this.props.accessoriesLabel,

                        //data: [3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2],
                        data: this.props.accessoriesData,
                        fill: false,
                        borderWidth: 2,
                        borderColor: '#66B968',
                        lineTension: 0,
                        backgroundColor: "white",
                    },

                    {
                        type: 'line',
                        label: this.props.ottLabel,

                        //data: [3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2],
                        data: this.props.ottData,
                        fill: false,
                        borderWidth: 2,
                        borderColor: '#70A6F9',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                    {
                        type: 'line',
                        label: this.props.newConnectionLabel,

                        //data: [3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2],
                        data: this.props.newConnection,
                        fill: false,
                        borderWidth: 2,
                        borderColor: '#FC806C',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                    // {
                    //     type: 'line',
                    //     label: 'Jan',
                    //     data: this.state.value2,
                    //     // data: [0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 30],
                    //     fill: false,
                    //     borderWidth: 2,
                    //     borderColor: 'lightblue',
                    //     lineTension: 0,
                    //     backgroundColor: "white",
                    // },
                ]
            },
            options: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
                scales: {
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'No of order placed'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: true,
                        },
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
        console.log(this.props.mobileData)
        return (
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <h3><b>Order Trend</b></h3>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>

                        <Grid.Column width={15}>
                            <canvas
                                ref={this.chartRef2}
                                width="100px"
                                height={"40vh"}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row>
                
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column />
                </Grid.Row> */}
                </Grid>
            </Segment>
        );
    }
}

export default LineChartComponent;




