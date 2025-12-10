import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Segment, Card } from 'semantic-ui-react';
import customerDetailsImage from '../../../assets/dashboard/customerDetails.png';
import AreaOfInterest from '../AreaOfInterestComponent/AreaOfInterestComponent';
import Entertainement from '../EntertainementComponent/EntertainementComponent';
import './CustomerDynamicComponent.scss';
import InfoDetailsComponent from '../../../components/InfoDetailsComponent/InfoDetailsComponent';
import CustomerDynamicImageText from '../../../mock/DashboardTab/CustomerDynamicImageText.json'


class CustomerDynamicComponent extends PureComponent {
    static propTypes = {

    }
    constructor(props) {
        super(props)
        this.state = {
            value: 1
        }
    }
    handleLanguage = (selectedValue) => {
        this.setState({
            value: selectedValue
        });

    }

    render() {

        let data = this.props.data
        console.log(data)
        let id = this.props.customerId
        console.log(id)
        let entertainementData;
        // let index = this.state.value - 1
        let interestAreaData
        let adsData
        if (data != undefined) {
            entertainementData = data.entertainment
            interestAreaData = data.interest
            // adsData = data.customerData[index].adsDetails
            console.log(adsData);
            console.log(adsData, " entertainementData")
            console.log(data, "entertainementData")

            return (
                <div>
                    <Segment>
                        <Grid className="customer-dynamic" >
                            <h3 className="customer-heading"> CUSTOMER DYNAMICS</h3>
                            <Grid.Row>
                                <Grid.Column width={3} >
                                    <Image src={customerDetailsImage} className="left-img" />
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <Grid>
                                        <Grid.Row style={{ paddingBottom: '0px' }}>
                                            <Grid.Column width={11}>
                                                <Entertainement entertainementData={entertainementData} onSelectLanguage={this.handleLanguage} />
                                            </Grid.Column>
                                            <Grid.Column width={5} style={{ paddingLeft: '0px' }}>
                                                <Grid.Row className="info-customer">
                                                    <Grid.Row style={{ marginTop: '15%' }} />
                                                    {
                                                        CustomerDynamicImageText.map((item) => {
                                                            if (this.props.customerId == item.id)
                                                                return (
                                                                    <Card className="card-img" style={{ backgroundImage: `url(${require('../../../assets/dashboard/' + item.adsDetails[0].image)})` }}>
                                                                        <InfoDetailsComponent data={item.adsDetails[0].text} />
                                                                    </Card>
                                                                )
                                                        })
                                                    }
                                                </Grid.Row>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={11}>
                                                <AreaOfInterest interestAreaData={interestAreaData} />
                                            </Grid.Column>
                                            <Grid.Column width={5} style={{ paddingLeft: '0px' }}>
                                                <Grid.Row className="info-customer1" >
                                                    {
                                                        CustomerDynamicImageText.map((item) => {
                                                            if (this.props.customerId == item.id)
                                                                return (
                                                                    <Card className="card-img1" style={{ backgroundImage: `url(${require('../../../assets/dashboard/' + item.adsDetails[1].image)})` }}>
                                                                        <InfoDetailsComponent data={item.adsDetails[1].text} />
                                                                    </Card>
                                                                )
                                                        })
                                                    }
                                                </Grid.Row>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
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

export default CustomerDynamicComponent
