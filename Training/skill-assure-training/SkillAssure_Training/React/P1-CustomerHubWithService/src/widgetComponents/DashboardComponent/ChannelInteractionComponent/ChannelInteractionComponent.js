import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Segment, Dropdown, Loader } from 'semantic-ui-react';
import TimeLineComponent from '../TimeLineComponent/TimeLineComponent';
import InfoComponent from '../../../components/InfoComponent/InfoComponent';
import ScatterChartComponent from '../ScatterChartComponent/ScatterChartComponent';
import './ChannelInteractionComponent.scss';
import DropDownComponent from '../../../components/DropDownComponent/DropDownComponent';
import offerData from '../../../mock/DashboardTab/Offer/ChannelInteractionOffer.json';


const options = [
    { key: 1, text: 'past week', value: 1 },
    { key: 2, text: 'past month', value: 2 },
    { key: 3, text: 'past 3 months', value: 3 },
    { key: 4, text: 'past 6 months', value: 4 },
]

class ChannelInteractionComponent extends PureComponent {
    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {
            value: 2
        }
    }

    componentDidUpdate() {

    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        let channelInteractionData = this.props.channelInteractionData
        const { value } = this.state
        let scatterData
        let timeLineData
        let Infodata
        if (channelInteractionData != undefined) {
            scatterData = channelInteractionData.customerData.graph[value - 1].scatteredChart
            timeLineData = channelInteractionData.customerData.graph[value - 1].channelData
            Infodata = channelInteractionData.customerData.offer
        }
        console.log(this.props.customerId)

        return (

            <Segment padded>
                <Grid>
                    <Grid.Row style={{ paddingBottom: "2%" }}>
                        <Grid.Column width={8}>
                            <h3>CHANNEL INTERACTIONS</h3>
                        </Grid.Column>
                        <Grid.Column width={8} textAlign='right'>
                            <Dropdown options={options} size={'mini'} value={value} selection onChange={this.handleChange} style={{ borderRadius: '30px', minWidth: '140px' }} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <ScatterChartComponent scatterData={scatterData} />
                        </Grid.Column>
                        <Grid.Column width={1}>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <TimeLineComponent timeLineData={timeLineData} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="info-customer">
                        <Grid.Column width={16}>
                            {
                                offerData.map((item) => {
                                    if (item.id == this.props.customerId)
                                        return (
                                            <InfoComponent data={item.offer} />
                                        )
                                })
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        )
    }
}

export default ChannelInteractionComponent
