import Chart from 'chart.js';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { churnTabGraphDataset, CHURN_TAB_GRAPH_LABLES, CHURN_TAB_GRAPH_OPTIONS } from '../../../../constants/graphconstants';
import './CHURNTab.scss';

class CHURNTab extends Component {
    constructor() {
        super();
        this.state = {
            chart3Data: [20, 10, 30, 15, 40, 30, 50],
        }
    }
    chartRef3 = React.createRef();
    componentDidMount() {
          this.onChartUpdate();
        // const myChartRef3 = this.chartRef3.current.getContext("2d");
        // new Chart(myChartRef3, {
        //     type: 'line',
        //     data: {
        //         labels: CHURN_TAB_GRAPH_LABLES,
        //         datasets: churnTabGraphDataset(this.state.chart3Data)
        //     },
        //     options: CHURN_TAB_GRAPH_OPTIONS
        // });
    }
    componentDidUpdate() {
        this.onChartUpdate();

        // if (this.state.chart3Data != this.props.churnData.churngraph) {
        //     const myChartRef3 = this.chartRef3.current.getContext("2d");
        //     new Chart(myChartRef3, {
        //         type: 'line',
        //         data: {
        //             labels: CHURN_TAB_GRAPH_LABLES,
        //             datasets: churnTabGraphDataset(this.props.churnData.churngraph)
        //         },
        //         options: CHURN_TAB_GRAPH_OPTIONS
        //     });
            // this.setState({
            //     chart3Data: this.props.churnData.churngraph
            // })
        
    }

    onChartUpdate() {
        const myChartRef3 = this.chartRef3.current.getContext("2d");
        new Chart(myChartRef3, {
            type: 'line',
            data: {
                labels: CHURN_TAB_GRAPH_LABLES,
                datasets: churnTabGraphDataset(this.props.churnData.churngraph)
            },
            options: CHURN_TAB_GRAPH_OPTIONS
        });
    }
    render() {
        console.log(this.props.churnData)
        console.log(this.state.chart3Data)

        return (
            <>
                <canvas
                    ref={this.chartRef3}
                    width={"100%"}
                    height={"33vh"}
                />
                {/* <div><h3><b style={{ borderColor: "#019CDB" }}>CHURN Prediction Reason</b></h3> */}
                {/* <ul>
                        <li><span>{data.reason1}</span></li>
                        <li><span> {data.reason2} </span></li>
                    </ul> */}
                {/* <Button variant="primary" className="button">escalate</Button> */}
                {/* </div> */}
            </>
        );
    }
}
export default CHURNTab;