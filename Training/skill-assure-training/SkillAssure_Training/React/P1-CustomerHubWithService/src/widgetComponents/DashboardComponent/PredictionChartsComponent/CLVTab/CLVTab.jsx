import Chart from 'chart.js';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { clvTabGraphDataset, CLV_TAB_GRAPH_LABLES, CLV_TAB_GRAPH_OPTIONS } from '../../../../constants/graphconstants';

class CLVTab extends Component {
    constructor() {
        super();
        this.state = {
            chart2Data: [10, 20, 30, 35, 40, 45, 50],
        }
    }
    chartRef2 = React.createRef();
    componentDidMount() {
        this.updateChange();
        // const myChartRef2 = this.chartRef2.current.getContext("2d");
        // new Chart(myChartRef2, {
        //     type: 'line',
        //     data: {
        //         labels: CLV_TAB_GRAPH_LABLES,
        //         datasets: clvTabGraphDataset(this.state.chart2Data)
        //     },
        //     options: CLV_TAB_GRAPH_OPTIONS
        // });
    }
    componentDidUpdate(){
        this.updateChange();
        // if (this.state.chart3Data != this.props.clvData.clvgraph) {
        //     const myChartRef2 = this.chartRef2.current.getContext("2d");
        //     new Chart(myChartRef2, {
        //         type: 'line',
        //         data: {
        //             labels: CLV_TAB_GRAPH_LABLES,
        //             datasets: clvTabGraphDataset(this.props.clvData.clvgraph)
        //         },
        //         options: CLV_TAB_GRAPH_OPTIONS
        //     });
        // }
    }
    updateChange(){
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        new Chart(myChartRef2, {
            type: 'line',
            data: {
                labels: CLV_TAB_GRAPH_LABLES,
                datasets: clvTabGraphDataset(this.props.clvData.clvgraph)
            },
            options: CLV_TAB_GRAPH_OPTIONS
        });
    }
    render() {
        console.log(this.props.clvData.clvgraph)
        return (
            <>
                <canvas
                    ref={this.chartRef2}
                    width={"100%"}
                    height={"33vh"}
                />
                {/* <h3 style={{ color: "rgb(33, 188, 199)" }}><b style={{ color: "#019CDB" }}>Predicted CLV</b></h3>
                <Card style={{ backgroundColor: "#019CDB" }}>
                    <Card.Body>
                        <p style={{ textAlign: "center" }}><b>Predicted ClV for 2nd quarter 2019 </b></p>
                        <h3 style={{ textAlign: "center" }}> <b> 180-MVC</b></h3>

                    </Card.Body>
                </Card> */}
            </>
        );
    }
}
export default CLVTab;