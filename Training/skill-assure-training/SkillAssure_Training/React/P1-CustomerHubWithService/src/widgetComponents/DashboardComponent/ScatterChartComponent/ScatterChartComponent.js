import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Chart from 'chart.js';
import { Grid, Segment, Dropdown, Card, Icon } from 'semantic-ui-react';
import { List } from 'semantic-ui-react'

class ScatterChartComponent extends PureComponent {
    constructor(props) {
        super(props)
    }

    chartRef2 = React.createRef();
    componentDidMount() {
        console.log(this.props.scatterData)
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        var yLabels = {
            2: 'Online', 3: 'Mobile App', 4: 'Retail', 5: 'Email', 6: 'SMS', 7: 'Chatbot'
        }
        if (this.props.scatterData != undefined) {
            new Chart(myChartRef2, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'Service', // Name the series
                            data: this.props.scatterData.service, // Specify the data values array
                            borderColor: '#62D397', // Add custom color border            
                            backgroundColor: '#2196f3',
                            pointBorderWidth: '5'
                            // Add custom color background (Points and Fill)

                        },
                        {
                            label: 'Sales', // Name the series
                            data: this.props.scatterData.sales, // Specify the data values array
                            borderColor: '#EF8E9D', // Add custom color border            
                            backgroundColor: '#2196f3',
                            pointBorderWidth: '5'
                            // Add custom color background (Points and Fill)

                        },
                        {
                            label: 'Bills', // Name the series
                            data: this.props.scatterData.bills, // Specify the data values array
                            borderColor: '#5A77EB', // Add custom color border            
                            backgroundColor: '#2196f3',
                            pointBorderWidth: '5'
                            // Add custom color background (Points and Fill)

                        }

                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            ticks: {
                                callback: function (value, index, values) {
                                    // for a value (tick) equals to 8
                                    return yLabels[value];
                                    // 'junior-dev' will be returned instead and displayed on your chart
                                }
                            }
                        }]
                    }

                }
            });
        }

    }

    componentDidUpdate() {

        console.log(this.props.scatterData)
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        var yLabels = {
            2: 'Online', 3: 'Mobile App', 4: 'Retail', 5: 'Email', 6: 'SMS', 7: 'Chatbot'
        }
        if (this.props.scatterData != undefined) {
            new Chart(myChartRef2, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'Service', // Name the series
                            data: this.props.scatterData.service, // Specify the data values array
                            borderColor: '#62D397', // Add custom color border            
                            backgroundColor: '#2196f3',
                            pointBorderWidth: '5'
                            // Add custom color background (Points and Fill)

                        },
                        {
                            label: 'Sales', // Name the series
                            data: this.props.scatterData.sales, // Specify the data values array
                            borderColor: '#EF8E9D', // Add custom color border            
                            backgroundColor: '#2196f3',
                            pointBorderWidth: '5'
                            // Add custom color background (Points and Fill)

                        },
                        {
                            label: 'Bills', // Name the series
                            data: this.props.scatterData.bills, // Specify the data values array
                            borderColor: '#5A77EB', // Add custom color border            
                            backgroundColor: '#2196f3',
                            pointBorderWidth: '5'
                            // Add custom color background (Points and Fill)

                        }

                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            ticks: {
                                callback: function (value, index, values) {
                                    // for a value (tick) equals to 8
                                    console.log(value);
                                    return yLabels[value];
                                    // 'junior-dev' will be returned instead and displayed on your chart
                                }
                            }
                        }]
                    }

                }
            });
        }


    }


    render() {
        return (
            <div>
                <List horizontal style={{ paddingBottom: '10%' }}>
                    <List.Item ><Icon name="circle" style={{ color: "#EF8E9D" }} />Sales</List.Item>
                    <List.Item > <Icon name="circle" style={{ color: "#5A77EB" }} />Bills</List.Item>
                    <List.Item ><Icon name="circle" style={{ color: "#62D397" }} />Service</List.Item>
                </List>
                <canvas
                    ref={this.chartRef2}
                    width={"100%"}
                    height={"70vh"}
                />

            </div>
        )


    }
}
export default ScatterChartComponent;




