import Chart from 'chart.js';
import React from 'react';
import { Grid, Header, Segment, Loader, Dropdown } from 'semantic-ui-react';
import DropDownComponent from '../../../components/DropDownComponent/DropDownComponent';


const options = [
    { key: 2, text: 'past month', value: 1 },
    { key: 1, text: 'past week', value: 0 },
]
class BarChartComponent extends React.Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            // data: [5, 10, 20, 30, 40, 50, 60],
            // data1: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
            // data2: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
            value: 0

        }

    }
    chartRef2 = React.createRef();
    chart;

    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        // this.chartRef2.destroy();
        this.updateCanvas();
    }
    // componentWillUpdate(){
    //     this.myChartRef2.destroy();
    // }

    updateCanvas() {



        const myChartRef2 = this.chartRef2.current.getContext("2d");
        //  myChartRef2.destroy();
        let dcalls = {
            label: this.props.data.graph[this.state.value].channel.Data[0].text,
            data: this.props.data.graph[this.state.value].channel.data,
            backgroundColor: 'orange',
            borderWidth: 0,
            yAxisID: "dcalls"
        };

        let icalls = {
            label: this.props.data.graph[this.state.value].channel.Data[1].text,
            data: this.props.data.graph[this.state.value].channel.data1,
            backgroundColor: 'green',
            borderWidth: 0,
            yAxisID: "icalls"
        };

        let rcalls = {
            label: this.props.data.graph[this.state.value].channel.Data[2].text,
            data: this.props.data.graph[this.state.value].channel.data2,
            backgroundColor: 'blue',
            borderWidth: 0,
            yAxisID: "rcalls"
        };

        let chartOptions = {
            legend: {
                display: true,
                position: 'bottom',
            },
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 0.2
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: this.props.label
                    },
                    id: "dcalls",

                }, {
                    id: "icalls",
                    display: false
                },
                {
                    id: "rcalls",
                    display: false
                },
                ]
            }
        };

        if (this.chart) {
            this.chart.destroy();
        }
        let labels
        if (this.state.value == 0) {
            labels = ['sun', 'mon', 'tue',
                'wed', 'thu', 'fri', 'sat']
        }
        else{
            labels=['week-1', 'week-2', 'week-3','week-4']
        }
        this.chart = new Chart(myChartRef2, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    dcalls, icalls, rcalls
                ],
                legend: {
                    display: true,
                    legendText : ['Current','Vs last week/month/year','% Change']
                        },     
            

                backgroundColor: '#2196f3',
            },
            options: chartOptions
        });

    }
    handleChange = (e, { value }) => this.setState({ value })
    render() {
        console.log(this.props.data,"chartXvalues");
        if (this.props.data == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        return (
            <div>
                <Segment>
                    <Grid padded>
                        <Grid.Row>
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

                        </Grid.Row>
                    </Grid>
                    <canvas
                        ref={this.chartRef2}
                        width="500px"
                        height={"190vh"}
                    />
                </Segment>
            </div>
        )
    }
}

export default BarChartComponent