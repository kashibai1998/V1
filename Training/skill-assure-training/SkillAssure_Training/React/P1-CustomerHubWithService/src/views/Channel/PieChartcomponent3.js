import Chart from 'chart.js';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';

class PieChartComponent3 extends Component {

    data1 = {
        labels: [
            "Service Change Request",
            "Billing Request",
            "Care Request",
            "Others"
        ],
        datasets: [
            {
                data: [15, 34, 34,25],
                backgroundColor: [


                    "#67B5E5",
                    "#E0E388",
                    "#8890E3",
                    "orange"
                ],

            }],
        dataPoints: [
            { y: 50, label: "Health" },
            { y: 50, label: "Finance" }],

    };

    constructor() {
        super();

    }
    chartRef2 = React.createRef();
    componentDidMount() {
        this.updateChange();
    }
    componentDidUpdate() {
        this.updateChange();
    }
    updateChange() {
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        new Chart(myChartRef2, {
            type: 'pie',
            data: this.data1,
            showInLegend: true,
            legendText: this.data1.labels,
            indexLabel: "{y}",
            fillText: 'a',
            //    data: {
            //     labels: ['India', 'China', 'US', 'Canada'],
            //       datasets: this.data1
            //     },

            options: {
                // showAllTooltips: true,
                tooltips: {
                    enabled: true
                },
                // plugins: {
                //     datalabels: {
                //         formatter: ["20", "40"],
                //         color: '#fff',
                //     }
                // },
                animation: {
                    animateRotate: false,
                    animateScale: true
                },

                elements: {
                    arc: {
                        borderColor: "#fff"
                    }
                },
                title: {
                    display: true,
                    position: "bottom",
                    text: 'Self Service Transactions',
                    fontSize: 18,
                    padding: 20,
                    fontColor: "black",
                    fontStyle: 'Normal',
                    fontFamily: "Montserrat",
                    fullWidth: true
                },
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        boxWidth: 30,
                        fontColor: "#999",
                        fontFamily: "Montserrat",
                        fullWidth: true,
                        fontColor: "black",
                    }
                },



            }
        });
    }
    render() {
        return (
            <Segment>
                <h3><b> Transactions</b></h3>
                <canvas
                    ref={this.chartRef2}
                    width={"480%"}
                    height={"200vh"}
                />
            </Segment>
        );
    }
}
export default PieChartComponent3;