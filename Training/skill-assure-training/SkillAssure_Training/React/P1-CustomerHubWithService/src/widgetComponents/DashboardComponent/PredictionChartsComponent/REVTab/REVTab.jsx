import React, { Component } from 'react';
import Chart from 'chart.js';
import { revTabGraphDataset, REV_TAB_GRAPH_LABLES, REV_TAB_GRAPH_OPTIONS } from '../../../../constants/graphconstants';

class REVTab extends Component {
    constructor() {
        super();
        this.state = {
            chart1Data: [50, 30, 10, 40, 25, 45],
        }
    }
    chartRef1 = React.createRef();
    componentDidMount() {
       this.onUpdateChart()

    }
    componentDidUpdate(){
       
        this.onUpdateChart()
    }
    onUpdateChart(){
        const myChartRef1 = this.chartRef1.current.getContext("2d");
        new Chart(myChartRef1, {
            type: 'line',
            data: {
                labels: REV_TAB_GRAPH_LABLES,
                datasets: revTabGraphDataset(this.props.revData.revgraph)
            },
            options: REV_TAB_GRAPH_OPTIONS
        });
    
    }
    render() {
        console.log(this.props.revData.revgraph)
        return (
            <>
                <canvas
                    ref={this.chartRef1}
                    width={"100%"}
                    height={"33vh"}
                />
                {/* <h3 style={{ color: "rgb(33, 188, 199)" }}><b style={{ color: "#019CDB" }}>Predicted Revenue</b></h3>
                <p><b> Cutomer revenue is predicted to be increased by $500 for next quarter</b></p>
                <h3><b>No action needed to be taken</b></h3> */}
            </>
        );
    }
}

export default REVTab;