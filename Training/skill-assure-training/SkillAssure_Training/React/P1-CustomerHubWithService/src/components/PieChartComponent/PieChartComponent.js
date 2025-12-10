import Chart from 'chart.js';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';

class PieChartComponent extends Component {

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
            data: {
                labels: this.props.data,
                datasets: [
                    {
                        data: this.props.points,
                        backgroundColor: this.props.backgroundColor

                    }],
                dataPoints: [
                    { y: 50, label: "Health" },
                    { y: 50, label: "Finance" }],

            },
            showInLegend: true,
            legendText: this.props.data,
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
                    width={this.props.width}
                    height={this.props.height}
                />
            </Segment>
        );
    }
}
export default PieChartComponent;