import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Loader } from 'semantic-ui-react';
import ChannelInteractionComponent from '../../widgetComponents/DashboardComponent/ChannelInteractionComponent/ChannelInteractionComponent';
import CustomerAvatarComponent from '../../widgetComponents/DashboardComponent/CustomerAvatarComponent/CustomerAvatarComponent';
import CustomerDynamicComponent from '../../widgetComponents/DashboardComponent/CustomerDynamicComponent/CustomerDynamicComponent';
// import PredictionChartsComponent from '../../widgetComponents/DashboardComponent/PredictionChartsComponent/PredictionChartsComponent';
import TabsComponent from '../../widgetComponents/DashboardComponent/TabsComponent/TabsComponent';
import PredictionChartsComponent from '../../widgetComponents/DashboardComponent/PredictionChartsComponent/PredictionChartsComponent/PredictionChartsComponent';
import getDashboardData from '../../actions/DashboardActions/DashboardAction'
import getPredictionChartData from '../../actions/DashboardActions/PredictionChartAction';
import getDevicesData from '../../actions/DashboardActions/DevicesAction';
import getTopConnectData from '../../actions/DashboardActions/TopConnectAction';
import getChannelInteractionData from '../../actions/DashboardActions/ChannelInteractionAction';

class DasboardComponent extends React.Component {

    state = {
        ids: {
            customerId: 100001,
            accountId: 9101010103
        }
    }

    componentDidMount() {
        this.props.getDashboardData(this.state.ids)
        this.props.getPredictionData(this.state.ids)
        this.props.getChannelData(this.state.ids)
        this.props.getDeviceData(this.state.ids)
        this.props.getConnectData(this.state.ids)
    }

    componentDidUpdate() {
        if (this.props.ids != this.state.ids) {
            this.props.getDashboardData(this.props.ids)
            this.props.getPredictionData(this.props.ids)
            this.props.getChannelData(this.props.ids)
            this.props.getDeviceData(this.props.ids)
            this.props.getConnectData(this.props.ids)
            this.setState({
                ids: this.props.ids
            })
        }

    }
    render() {
        let ids = this.props.ids
        let customerDynamic
        let predictionData
        let channelInteractionData
        let topConnectData
        let deviceData
        if (this.props.data != undefined || this.props.predictionChart != undefined || this.props.channelInteraction != undefined || this.props.topConnect != undefined || this.props.devices != undefined) {
            customerDynamic = this.props.data
            predictionData = this.props.predictionChart
            channelInteractionData = this.props.channelInteraction
            topConnectData = this.props.topConnect
            deviceData = this.props.devices
            return (

                <Grid padded stackable doubling>
                    <Grid.Row>
                        <Grid.Column>
                            <CustomerAvatarComponent userId={ids.customerId}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <TabsComponent customerId={ids.customerId} deviceData={this.props.devices}  topConnectData ={this.props.topConnect}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Segment>
                        <Grid>
                    <Grid.Row stretched>
                        <Grid.Column width={8}>
                            <PredictionChartsComponent customerId={ids.customerId} predictionData={this.props.predictionChart} />
                        </Grid.Column>
                        <Grid.Column width={8} stretched>
                            <ChannelInteractionComponent customerId={ids.customerId} channelInteractionData={this.props.channelInteraction} />
                        </Grid.Column>
                    </Grid.Row></Grid>
                    </Segment>
    
                    <Grid.Row>
                        <Grid.Column>
                            <CustomerDynamicComponent customerId={ids.customerId}  data={customerDynamic} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )

        }
        else {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => ({
    ids: state.userIdReducer.ids,
    data: state.DashboardReducer.DashboardData,
    predictionChart: state.PredictionChartReducer.PredictionChartData,
    channelInteraction: state.ChannelInteractionReducer.ChannelInteractionData,
    devices: state.DevicesReducer.DevicesData,
    topConnect: state.TopConnectReducer.TopConnectData
})

const mapDispatchToProps = (dispatch) => ({
    getDashboardData: (ids) => { dispatch(getDashboardData(ids)); },
    getPredictionData: (ids) => { dispatch(getPredictionChartData(ids)); },
    getChannelData: (ids) => { dispatch(getChannelInteractionData(ids)); },
    getDeviceData: (ids) => { dispatch(getDevicesData(ids)); },
    getConnectData: (ids) => { dispatch(getTopConnectData(ids)); }
})

export default connect(mapStateToProps, mapDispatchToProps)(DasboardComponent)