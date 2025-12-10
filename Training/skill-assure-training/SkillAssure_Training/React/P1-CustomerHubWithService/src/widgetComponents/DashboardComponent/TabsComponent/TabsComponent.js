import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Segment, Card, Icon, Menu, Grid, Loader } from 'semantic-ui-react'
import TabsInsights from '../../../components/TabsInsights/TabsInsights'
import BarChartComponent from '../BarChartComponent/BarChartComponent'
import InfoComponent from '../../../components/InfoComponent/InfoComponent'
import BandWidthOutageComponent from '../BandWidthOutageComponent/BandWidthOutageComponent'
import DevicesComponent from '../DevicesComponent/DevicesComponent'
import TopConnectsComponent from '../TopConnectsComponent/TopConnectsComponent'
import TabCardComponent from '../../../components/TabCardComponent/TabCardComponent'
import ConsumptionComponent from '../ConsumptionComponent/ConsumptionComponent';
import CalendraComponent from '../CalanderComponent/CalanderComponent';
import { getCustomerProfileData } from '../../../actions/CustomerActions/CustomerProfileAction'
import getTabData from '../../../actions/DashboardActions/TabAction'
import getChartData from '../../../actions/DashboardActions/ChartAction';
import topConnectOffer from '../../../mock/DashboardTab/Offer/topConnectOffer.json';
import voiceAnalyticsOffer from '../../../mock/DashboardTab/Offer/VoiceAnalyticsOffer.json';
import dataAnalyticsOffer from '../../../mock/DashboardTab/Offer/DataAnalyticsOffer.json';
import consumptionOffer from '../../../mock/DashboardTab/Offer/ConsumptionOnLocationOffer.json';
import contentAnalyticsOffer from '../../../mock/DashboardTab/Offer/ContentAnalyticsOffer.json';
import QuiteDaysOffer from '../../../mock/DashboardTab/Offer/QuiteDaysOffer.json';
import BandWidthOffer from '../../../mock/DashboardTab/Offer/BandWidthOffer.json';
import DevicesOffer from '../../../mock/DashboardTab/Offer/DevicesOffer.json';

const data = [
    {
        heading: "20",
        subHeading: "New Connects"
    },
    {
        heading: "30",
        subHeading: "Actively connected"
    },
    {
        heading: "50",
        subHeading: "Total Connects"
    }
]
const data1 = [
    {
        heading: "40%",
        subHeading: "Average time of day (8 AM to 11 PM) Spent on work"
    },
    {
        heading: "20%",
        subHeading: "Average time spend of Leisure"
    }
]

class TabsComponent extends React.Component {
    state = { activeItem: 'tab1' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentDidMount() {
        console.log("doneeeee")
        this.props.getCustomerProfileData(this.props.ids)
        this.props.getTabData(this.props.ids)
        this.props.getChartData(this.props.ids)
        this.setState({ ids: this.props.ids })

    }

    componentDidUpdate() {
        if (this.state.ids != this.props.ids) {
            this.props.getTabData(this.props.ids)
            this.props.getChartData(this.props.ids)
            this.setState({ ids: this.props.ids })
            this.props.getCustomerProfileData(this.props.ids)
        }

    }



    render() {
        console.log(this.props.customer)
        let TabData = this.props.TabData
        console.log(TabData)
        if (TabData == undefined || this.props.ChartData == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        console.log(this.props.ChartData.dataAnalytics)
        console.log(this.props.topConnectData)
        const { activeItem } = this.state
        return (

            <div className="tabs-style">
                <Menu attached='top' tabular fluid widths={4}>
                    <Menu.Item
                        name='tab1'
                        active={activeItem === 'tab1'}
                        onClick={this.handleItemClick}
                        className="link-style"
                    >
                        <TabCardComponent data={TabData.customerData.graph[0].channel} Name="call" symbol={" "} style={activeItem === 'tab1' ? "tab-card-active" : "tab-card"} />
                    </Menu.Item>
                    <Menu.Item
                        name='tab2'
                        active={activeItem === 'tab2'}
                        onClick={this.handleItemClick}
                        className="link-style"
                    >
                        <TabCardComponent data={TabData.customerData.graph[1].channel} Name="usb" symbol={"Min"} style={activeItem === 'tab2' ? "tab-card-active" : "tab-card"} />
                    </Menu.Item>
                    <Menu.Item
                        name='tab3'
                        active={activeItem === 'tab3'}
                        onClick={this.handleItemClick}
                        className="link-style"
                    >
                        <TabCardComponent data={TabData.customerData.graph[2].channel} Name="tv" symbol={"%"} style={activeItem === 'tab3' ? "tab-card-active" : "tab-card"} />
                    </Menu.Item>
                    <Menu.Item
                        name='tab4'
                        active={activeItem === 'tab4'}
                        onClick={this.handleItemClick}
                        className="link-style"
                    >
                        <TabCardComponent data={TabData.customerData.graph[3].channel} Name="map marker alternate" symbol={"devices"} style={activeItem === 'tab4' ? "tab-card-active" : "tab-card"} />
                    </Menu.Item>
                </Menu>

                {
                    activeItem == 'tab1' &&
                    < Segment attached='bottom'>

                        <TabsInsights tabsInsights={TabData.customerData.graph[0].channel.Data} />

                        <Grid columns={2} stackable >
                            <Grid.Row stretched>
                                <Grid.Column>
                                    <BarChartComponent label={"Min"} data={this.props.ChartData.voiceData.customerData} />
                                </Grid.Column>
                                <Grid.Column>
                                    <TopConnectsComponent customer={this.props.customer} topConnectData={this.props.topConnectData} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid columns={2} stackable >
                            <Grid.Row stretched>
                                <Grid.Column>
                                    {/* <InfoComponent data={this.props.ChartData.voiceData.customerData.adds} /> */}
                                    {
                                        voiceAnalyticsOffer.map((item) => {
                                            if (item.id == this.props.customerId)
                                                return (
                                                    <InfoComponent data={item.offer} />
                                                )
                                        })
                                    }
                                </Grid.Column>
                                <Grid.Column>
                                    {/* {this.props.topConnectData != undefined &&

                                        <InfoComponent data={this.props.topConnectData.offer} />
                                    } */}
                                    {
                                        topConnectOffer.map((item) => {
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
                }


                {
                    activeItem == 'tab2' &&
                    <Segment attached='bottom'>

                        <TabsInsights tabsInsights={TabData.customerData.graph[1].channel.Data} />

                        <Grid columns={2} stackable style={{ marginTop: '20px' }}>
                            <Grid.Row stretched>
                                <Grid.Column>
                                    <BarChartComponent label={"MB"} data={this.props.ChartData.dataAnalytics.customerData} />
                                </Grid.Column>
                                <Grid.Column>
                                    <ConsumptionComponent data={this.props.ChartData.consumptionData} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid columns={2} stackable >
                            <Grid.Row stretched>
                                <Grid.Column>
                                    {/* <InfoComponent data={this.props.ChartData.dataAnalytics.customerData.adds} /> */}
                                    {
                                        dataAnalyticsOffer.map((item) => {
                                            if (item.id == this.props.customerId)
                                                return (
                                                    <InfoComponent data={item.offer} />
                                                )
                                        })
                                    }
                                </Grid.Column>
                                <Grid.Column>
                                    {/* <InfoComponent data={this.props.ChartData.consumptionData.customerData.addNew} /> */}
                                    {
                                        consumptionOffer.map((item) => {
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
                }

                {
                    activeItem == 'tab3' &&
                    <Segment attached='bottom'>
                        <TabsInsights tabsInsights={TabData.customerData.graph[2].channel.Data} />
                        <Grid columns={2} stackable style={{ marginTop: '20px' }}>
                            <Grid.Row stretched>
                                <Grid.Column>
                                    <BarChartComponent label={"Hours"} data={this.props.ChartData.contentData.customerData} />
                                </Grid.Column>
                                <Grid.Column>
                                    <CalendraComponent data={TabData.customerData.graph[2].channel} days={TabData.customerData.graph[2].channel.Data[0].days} userId={this.props.customerId} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid columns={2} stackable >
                            <Grid.Row stretched>
                                <Grid.Column>
                                    {/* <InfoComponent data={this.props.ChartData.contentData.customerData.adds} /> */}
                                    {
                                        contentAnalyticsOffer.map((item) => {
                                            if (item.id == this.props.customerId)
                                                return (
                                                    <InfoComponent data={item.offer} />
                                                )
                                        })
                                    }
                                </Grid.Column>
                                <Grid.Column>
                                    {/* <InfoComponent data={this.props.TabData.customerData.graph[2].channel.adds} /> */}
                                    {
                                        QuiteDaysOffer.map((item) => {
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
                }


                {
                    activeItem == 'tab4' &&
                    <Segment attached='bottom'>
                        <TabsInsights tabsInsights={TabData.customerData.graph[3].channel.Data} />
                        <Grid columns={2} stackable style={{ marginTop: '20px' }}>
                            <Grid.Row stretched>
                                <Grid.Column>
                                    <BandWidthOutageComponent data={this.props.ChartData.bandwidthData.customerData} />
                                </Grid.Column>
                                <Grid.Column>
                                    <DevicesComponent deviceData={this.props.deviceData} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid columns={2} stackable >
                            <Grid.Row stretched>
                                <Grid.Column>
                                    {/* <InfoComponent data={this.props.ChartData.bandwidthData.customerData.adds} /> */}
                                    {
                                        BandWidthOffer.map((item) => {
                                            if (item.id == this.props.customerId)
                                                return (
                                                    <InfoComponent data={item.offer} />
                                                )
                                        })
                                    }
                                </Grid.Column>
                                <Grid.Column>
                                    {/* <InfoComponent data={this.props.deviceData.consumptionData.adds} /> */}
                                    {
                                        DevicesOffer.map((item) => {
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
                }
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    customer: state.CustomerProfileReducers.customerProfileData,
    ids: state.userIdReducer.ids,
    TabData: state.TabReducer.TabData,
    ChartData: state.ChartReducer.ChartData
})

function mapDispatchToProps(dispatch) {
    return {
        getCustomerProfileData: (ids) => {
            dispatch(getCustomerProfileData(ids));
        },
        getTabData: (ids) => dispatch(getTabData(ids)),
        getChartData: (ids) => dispatch(getChartData(ids))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsComponent)