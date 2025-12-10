import Chart from 'chart.js';
import React, { Component } from 'react';
import { npsTabGraphDataset, NPS_TAB_GRAPH_LABLES, NPS_TAB_GRAPH_OPTIONS } from '../../../../constants/graphconstants';

class NPSTab extends Component {
    constructor() {
        super();
        this.state = {
            chart4Data: [20, 10, 25, 15, 40, 10, 50]
        }
    }

    chartRef4 = React.createRef();
    componentDidMount() {
        this.onUpdateChart();
    }
    componentDidUpdate(){
       this.onUpdateChart();
    }
    onUpdateChart(){
        const myChartRef4 = this.chartRef4.current.getContext("2d");
        new Chart(myChartRef4, {
            type: 'line',
            data: {
                labels: NPS_TAB_GRAPH_LABLES,
                datasets: npsTabGraphDataset(this.props.npsData.npsgraph)
            },
            options: NPS_TAB_GRAPH_OPTIONS
        });
        
    }
    render() {
        console.log(this.props.npsData)
        return (
            <>
                <canvas
                    ref={this.chartRef4}
                    width={"100%"}
                    height={"33vh"}
                />
                {/* <h3 style={{ color: "rgb(33, 188, 199)" }}><b style={{ color: "#019CDB" }}>Predicted NPS</b></h3>
                <p> <b>Predicted NPS for third quarter 2019 is 2.2 </b></p> */}
            </>
        );
    }
}

export default NPSTab;