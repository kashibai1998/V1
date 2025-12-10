import React from 'react'
import './DevicesComponent.scss'
import { Grid, Image, Segment, Icon } from 'semantic-ui-react'
class DevicesComponent extends React.Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let data = this.props.deviceData
        if (data) {
            console.log(data)
            return (
                <div className="top-connect-section">
                    <Segment>
                        <Grid>
                            <Grid.Row columns={4}>
                                <Grid.Column><b>DEVICES</b></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={5}><b>{data.consumptionData.data[0].consumptionDetails.consumptionLeve1}</b></Grid.Column>
                                <Grid.Column width={5}><b>{data.consumptionData.data[0].consumptionDetails.consumptionLeve2}</b></Grid.Column>
                                <Grid.Column width={5}><b>{data.consumptionData.data[0].consumptionDetails.consumptionLeve3}</b></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={2} className="image-container">
                                    <div className="icon-container">
                                        <Icon name="point" color="blue" size="big" /></div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div className="devices-first">
                                        <div className="first-circle"><p>{data.consumptionData.data[0].consumptionDetails.consumptionDeviceFirst[0]} <b>{data.consumptionData.data[0].consumptionDetails.firstValue[0]}</b></p></div>
                                        <div className="second-circle"><p>{data.consumptionData.data[0].consumptionDetails.consumptionDeviceFirst[1]} <b>{data.consumptionData.data[0].consumptionDetails.firstValue[1]}</b></p></div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <div className="devices-second">
                                        <div className="first-circle"><p>{data.consumptionData.data[0].consumptionDetails.consumptionDeviceSecond[0]} <b>{data.consumptionData.data[0].consumptionDetails.secondValue[0]}</b> </p></div>
                                        <div className="second-circle"><p>{data.consumptionData.data[0].consumptionDetails.consumptionDeviceSecond[1]} <b>{data.consumptionData.data[0].consumptionDetails.secondValue[1]}</b></p></div>
                                        <div className="third-circle"><p>{data.consumptionData.data[0].consumptionDetails.consumptionDeviceSecond[2]} <b>{data.consumptionData.data[0].consumptionDetails.secondValue[2]}</b></p></div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <div className="devices-third">
                                        <div className="first-circle"><p>{data.consumptionData.data[0].consumptionDetails.consumptionDeviceThird[0]} <b>{data.consumptionData.data[0].consumptionDetails.thirdValue[0]}</b></p></div>
                                        <div className="second-circle"><p>{data.consumptionData.data[0].consumptionDetails.consumptionDeviceThird[1]} <b>{data.consumptionData.data[0].consumptionDetails.thirdValue[1]}</b></p></div>
                                        <div className="third-circle"><p>{data.consumptionData.data[0].consumptionDetails.consumptionDeviceThird[2]} <b>{data.consumptionData.data[0].consumptionDetails.thirdValue[2]}</b> </p></div>
                                        <div className="fourth-circle"><p>{data.consumptionData.data[0].consumptionDetails.consumptionDeviceThird[3]} <b>{data.consumptionData.data[0].consumptionDetails.thirdValue[3]}</b> </p></div>
                                    </div>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </Segment>
                </div>
            )
        }
        else {
            return (
                <div>NAN</div>
            )
        }

    }
}

export default DevicesComponent