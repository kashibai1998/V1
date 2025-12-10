import React from 'react';
// import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
// import './CustomerComponent.scss'
import Chart from 'chart.js';


class LineChartComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            
            value: [210,220,205,250,270,240,230,220,260,280,300,310,280,320,310,330,340,310,290,330,300,280,270,260,240,220,200,180,200,210],
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
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        new Chart(myChartRef2, {
            type: 'bar',
            data: {

                labels: [1, 2, '3', '4', '5', '6', '7', '8', '9', '10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],

                
                datasets: [
                    // {
                    //     type: 'line',
                    //     label: 'Nov',
                    //     data: this.state.value,
                    //     // data: [0, 0, 7, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 7, 9, 6, 4, 7, 10, 0, 0, 7, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 7, 9, 6, 4, 7, 10, 0, 0, 7, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 7, 9, 6, 4, 7, 10, 0, 0, 7, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 7, 9, 6, 4, 7, 10, 0, 0, 7, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 7, 9, 6, 4, 7, 10, 0, 0, 7, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 7, 9, 6, 4, 7, 10, 30],
                    //     fill: false,
                    //     borderWidth: 2,
                    //     borderColor: 'lightgreen',
                    //     lineTension: 0,
                    //     backgroundColor: "white",
                    // },
                    {
                        type: 'line',
                        label: 'Orders',

                        //data: [3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2],
                        //data: [410,420,320,410,440,460,370,390,270,230,280,320,340,370,410,420,320,410,440,460,370,390,270,230,280,320,340,310,320,270],
                        data: [3.5,3.8,3.1,3.6,2.9,2.40,2.30,5.20,5.60,5.80,3.00,4.10,5.80,3.20,3.10,3.30,5.40,2.10,2.90,4.30,4.00,4.80,5.70,4.60,3.40,4.20,2.00,4.80,4.00,4.10],
                        fill: false,
                        borderWidth: 2,
                        borderColor: 'orange',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                    {
                        type: 'line',
                        label: 'Service Request',

                        //data: [3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2],
                        //data: [200,120,230,250,320,220,190,380,410,420,370,330,310,290,260,250,270,300,240,320,370,420,350,420,330,300,350,400,420,400],
                        data: [1.50,1.60,2.40,3.20,3.00,3.70,3.80,3.90,2.10,2.20,4.30,2.40,4.20,4.00,4.70,4.50,4.80,1.00,1.20,3.40,4.50,2.60,4.40,4.30,2.10,2.30,5.40,2.20,3.00,4.30,2.80],
                        fill: false,
                        borderWidth: 2,
                        borderColor: '#66B968',
                        lineTension: 0,
                        backgroundColor: "white",
                    },

                    {
                        type: 'line',
                        label: 'Billing Request',

                        //data: [3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7,2 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2],
                        data: [2.50,2.40,2.60,1.20,1.60,2.10,1.80,2.20,2.70,3.10,2.90,1.80,1.60,1.40,1.30,1.50,1.40,1.60,1.40,1.30,1.20,1.10,2.90,2.95,2.130,2.70,1.00,2.20,1.30,1.70,2.10],
                        fill: false,
                        borderWidth: 2,
                        borderColor: '#70A6F9',
                        lineTension: 0,
                        backgroundColor: "white",
                    },
                    {
                        type: 'line',
                        label: 'General Enquiry',

                        //data: [3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2, 4, 7, 9, 6, 4, 7, 10, 4, 8, 4, 5, 9, 6, 7, 10, 8, 12, 3, 0, 2],
                        data: [2.00, 2.80, 2.50, 2.80, 1.40, 1.70, 1.90, 1.70, 1.40, 1.30,1.80, 2.00, 2.10, 2.20, 1.70, 1.80, 1.90, 2.10, 1.50, 1.30,2.00, 1.80, 2.80, 2.50, 1.70, 1.70, 1.80, 2.10, 1.50, 2.20],
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
                            labelString: 'Average Call Time'
                        },
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 7,
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
        console.log(this.state.data)
        return (
            <Segment>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <h3><b>Call Drivers</b></h3>
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




