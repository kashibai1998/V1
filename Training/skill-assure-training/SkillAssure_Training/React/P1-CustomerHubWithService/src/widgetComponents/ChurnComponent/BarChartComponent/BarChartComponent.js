import { BottomNavigation } from '@material-ui/core';
import { FormatBold } from '@material-ui/icons';
import Chart from 'chart.js';
import React from 'react';
import { Dropdown, Grid, Header, Loader, Segment } from 'semantic-ui-react';


const options = [
    { key: 2, text: 'past month', value: 1 },
    { key: 1, text: 'past week', value: 0 },
]
class BarChartComponent extends React.Component {

    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            // data: [5, 10, 20, 22, 30, 16, 10, 70],
            // data1: [40, 45, 55, 50, 40, 50, 45, 70],
            // data2: [15, 30, 40, 35, 10, 20, 30, 70],
            value: 0,


        }

    }
    chartRef2 = React.createRef();
    chart;

    componentDidMount() {
        this.updateCanvas();
    }
    // componentDidUpdate() {
    //     this.updateCanvas();
    // }

    updateCanvas() {



        const myChartRef2 = this.chartRef2.current.getContext("2d");
        let dcalls = {
            label: "Customers[Wales]",
            // data: this.state.data,
            data: [15, 30, 20, 22, 30, 70],
            backgroundColor: 'blue',
            borderWidth: 0,
            yAxisID: "dcalls"
        };

        let icalls = {
            // label: this.props.data.graph[this.state.value].channel.Data[1].text,
            // data: this.state.data1,
            label: "Customers[Northern Ireland]",
            data: [54, 55, 55, 58, 47, 70],
            backgroundColor: '#EF8E9D',
            borderWidth: 0,
            yAxisID: "icalls"
        };

        let rcalls = {
            // label: this.props.data.graph[this.state.value].channel.Data[2].text,
            // data: this.state.data2,
            label: "Customers[England]",
            data: [55, 60, 48, 58, 57, 70],
            backgroundColor: 'green',
            borderWidth: 0,
            yAxisID: "rcalls"
        };

        let zcalls = {
            // label: this.props.data.graph[this.state.value].channel.Data[2].text,
            // data: this.state.data2,
            label: "Customers[Scotland]",
            data: [23, 40, 40, 20, 60, 70],
            backgroundColor: 'orange',
            borderWidth: 0,
            yAxisID: "rcalls"
        };

        let chartOptions = {
            // legend: {
            //     display: true,
            //     // position: "Bottom",
            // },
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 0.6
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Customers',
                    },
                    id: "dcalls",

                },
                {
                    id: "icalls",
                    display: false,

                },
                {
                    id: "rcalls",
                    display: false
                },
                {
                    id: "zcalls",
                    display: false
                },
                ]
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
        };

        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = new Chart(myChartRef2, {
            type: 'bar',
            // legendText: this.data.labels,
            data: {

                labels: ["Loss of sim card", "Service issue", "call drops", "monthly charge", "Billing issues"],
                datasets: [
                    dcalls, icalls, rcalls, zcalls
                ]
            },
            options: chartOptions
        });

    }
    handleChange = (e, { value }) => this.setState({ value })
    render() {

        return (
            <Segment>
                {/* <Grid padded> */}
                {/* <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3'>{this.props.data.channelText}</Header>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign='right'>
                                <Dropdown options={options} size={'mini'} value={this.state.value}
                                    selection onChange={this.handleChange} style={{ borderRadius: '30px', minWidth: '8px' }} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns='5'>
                            {
                                this.props.data.graph[this.state.value].channel.Data.map((item) => {
                                    return (
                                        <Grid.Column >
                                            <Header as='h4' style={{ marginBottom: '0px' }}>{item.Value} </Header>
                                            <Header.Subheader as='h4'>{item.text}</Header.Subheader>
                                        </Grid.Column>
                                    )
                                })
                            }

                        </Grid.Row> */}
                {/* </Grid> */}
                <h3><b>State Wise Top Churn Reasons</b></h3>
                <canvas
                    ref={this.chartRef2}
                    width={"480%"}
                    height={"350vh"}
                />
            </Segment>
        )
    }
}

export default BarChartComponent