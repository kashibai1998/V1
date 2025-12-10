import React from 'react'
import { Grid, Segment, Image, Menu, Dropdown } from 'semantic-ui-react'
import './TopConnectsComponent.scss'
import DropDownComponent from '../../../components/DropDownComponent/DropDownComponent'
import { connect } from 'react-redux'
import { getCustomerProfileData } from '../../../actions/CustomerActions/CustomerProfileAction';
import img from '../../../assets/customer/christian.jpg'
import customerData from '../../../mock/CustomerTab/Customer.json'
const options = [
    { key: 1, text: 'past month', value: 0 },
    { key: 2, text: 'past year', value: 1 },
]
class TopConnectsComponent extends React.Component {
    static propTypes = {}

    state = {
        activeItem: 'TOP CONNECTS',
        value: 0
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleChange = (e, { value }) => this.setState({ value })



    render() {
        let data = this.props.topConnectData
        const { activeItem, value } = this.state
        console.log(value)
        if (data) {
            let topConnect = this.props.topConnectData.callData[0].topConnect
            let sameNetwork = this.props.topConnectData.callData[1].sameNetwork
            let otherNetwork = this.props.topConnectData.callData[2].otherNetwork

            console.log(this.props.customer.image)
            return (
                <div className="top-connect-section">
                    <Segment>
                        
                        <div>
                            <Menu attached='top' tabular style={{ border: '0px', padding: '0px' }}>
                                <Menu.Item
                                    name='TOP CONNECTS'
                                    active={activeItem === 'TOP CONNECTS'}
                                    onClick={this.handleItemClick}
                                    style={{ border: '0px', fontSize: '16px', padding: '0px' }}
                                />
                                <Menu.Item
                                    name='SAME NETWORK'
                                    active={activeItem === 'SAME NETWORK'}
                                    onClick={this.handleItemClick}
                                    style={{ border: '0px', fontSize: '16px' }}

                                />
                                <Menu.Item
                                    name='OTHER NETWORK'
                                    active={activeItem === 'OTHER NETWORK'}
                                    onClick={this.handleItemClick}
                                    style={{ border: '0px', fontSize: '16px', padding: '0px' }}

                                />
                                {/* <Menu.Menu> */}
                                    <Menu.Item >
                                        <Dropdown options={ options }size={'mini'} value={value} selection onChange={this.handleChange} style={{ borderRadius: '30px', minWidth: '142px',marginLeft:'-5px' }} />
                                    </Menu.Item>
                                {/* </Menu.Menu> */}
                            </Menu>
                        </div>
                        <br></br>

                        {
                            activeItem == 'TOP CONNECTS' &&
                            <div>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={1} />
                                        <Grid.Column width={4}><b>{topConnect.timelineData[value].callDetails.firstCallRange}</b></Grid.Column>
                                        <Grid.Column width={5}><b>{topConnect.timelineData[value].callDetails.secondCallRange}</b></Grid.Column>
                                        <Grid.Column width={5}><b>{topConnect.timelineData[value].callDetails.thirdCallRange}</b></Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <Grid.Column width={2} className="image-container">
                                            <div className="icon-container">
                                                <Image src={require('../../../assets/customer/' + this.props.customer.image)} size="small" circular className="user-image" />
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <div className="top-connect-first">
                                                <div className="second-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.firstImage[0])} size='small' avatar />
                                                    <span className="phone-number">{topConnect.timelineData[value].callDetails.firstCallDetails[0]}</span>
                                                </div>
                                                <div className="third-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.firstImage[1])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.firstCallDetails[1]}</span>
                                                </div>
                                                <div className="fourth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.firstImage[2])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.firstCallDetails[2]}</span>
                                                </div>
                                                <div className="fifth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.firstImage[3])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.firstCallDetails[3]}</span>
                                                </div>
                                                <div className="sixth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.firstImage[4])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.firstCallDetails[4]}</span>
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <div className="top-connect-second">
                                                <div className="zero1-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.secondImage[0])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.secondCallDetails[0]}</span>
                                                </div>
                                                <div className="first-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.secondImage[1])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.secondCallDetails[1]}</span>
                                                </div>
                                                <div className="second-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.secondImage[2])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.secondCallDetails[2]}</span>
                                                </div>
                                                <div className="third-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.secondImage[3])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.secondCallDetails[3]}</span>
                                                </div>
                                                <div className="fourth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.secondImage[4])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.secondCallDetails[4]}</span>
                                                </div>
                                                <div className="fifth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.secondImage[5])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.secondCallDetails[5]}</span>
                                                </div>
                                                <div className="sixth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.secondImage[6])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.secondCallDetails[6]}</span>
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <div className="top-connect-third">
                                                <div className="zero-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.thirdImage[0])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.thirdCallDetails[0]}</span>
                                                </div>
                                                <div className="first-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.thirdImage[1])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.thirdCallDetails[1]}</span>
                                                </div>
                                                <div className="second1-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.thirdImage[2])} size='small' avatar />
                                                    <span>{topConnect.timelineData[value].callDetails.thirdCallDetails[2]}</span>
                                                </div>
                                                <div className="third-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.thirdImage[3])} size='small' circular />
                                                    <span>{topConnect.timelineData[value].callDetails.thirdCallDetails[3]}</span>
                                                </div>
                                                <div className="fourth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.thirdImage[4])} size='small' circular />
                                                    <span>{topConnect.timelineData[value].callDetails.thirdCallDetails[4]}</span>
                                                </div>
                                                <div className="fifth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.thirdImage[5])} size='small' circular />
                                                    <span>{topConnect.timelineData[value].callDetails.thirdCallDetails[5]}</span>
                                                </div>
                                                <div className="sixth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + topConnect.timelineData[value].callDetails.thirdImage[6])} size='small' circular />
                                                    <span>{topConnect.timelineData[value].callDetails.thirdCallDetails[6]}</span>
                                                </div>
                                            </div>
                                        </Grid.Column>

                                    </Grid.Row>
                                </Grid>
                            </div>
                        }
                        {
                            activeItem == 'SAME NETWORK' &&
                            <div>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={1} />
                                        <Grid.Column width={4}><b>{sameNetwork.timelineData[value].callDetails.firstCallRange}</b></Grid.Column>
                                        <Grid.Column width={5}><b>{sameNetwork.timelineData[value].callDetails.secondCallRange}</b></Grid.Column>
                                        <Grid.Column width={5}><b>{sameNetwork.timelineData[value].callDetails.thirdCallRange}</b></Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <Grid.Column width={2} className="image-container">
                                            <div className="icon-container">
                                                <Image src={require('../../../assets/customer/' + this.props.customer.image)} size="small" circular className="user-image" />
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <div className="top-connect-first">
                                                <div className="second-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.firstImage[0])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.firstCallDetails[0]}</span>
                                                </div>
                                                <div className="third-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.firstImage[1])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.firstCallDetails[1]}</span>
                                                </div>
                                                <div className="fourth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.firstImage[2])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.firstCallDetails[2]}</span>
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <div className="top-connect-second">
                                                <div className="first-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.secondImage[0])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.secondCallDetails[0]}</span>
                                                </div>
                                                <div className="second-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.secondImage[1])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.secondCallDetails[1]}</span>
                                                </div>
                                                <div className="fourth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.secondImage[2])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.secondCallDetails[2]}</span>
                                                </div>
                                                <div className="sixth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.secondImage[3])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.secondCallDetails[3]}</span>
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <div className="top-connect-third">
                                                <div className="zero-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.thirdImage[0])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.thirdCallDetails[0]}</span>
                                                </div>
                                                <div className="first-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.thirdImage[1])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.thirdCallDetails[1]}</span>
                                                </div>
                                                <div className="third-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.thirdImage[2])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.thirdCallDetails[2]}</span>
                                                </div>
                                                <div className="fourth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.thirdImage[3])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.thirdCallDetails[3]}</span>
                                                </div>
                                                <div className="sixth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + sameNetwork.timelineData[value].callDetails.thirdImage[4])} size='small' circular />
                                                    <span>{sameNetwork.timelineData[value].callDetails.thirdCallDetails[4]}</span>
                                                </div>

                                            </div>
                                        </Grid.Column>

                                    </Grid.Row>
                                </Grid>
                            </div>
                        }
                        {
                            activeItem == 'OTHER NETWORK' &&
                            <div>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={1} />
                                        <Grid.Column width={4}><b>{otherNetwork.timelineData[value].callDetails.firstCallRange}</b></Grid.Column>
                                        <Grid.Column width={5}><b>{otherNetwork.timelineData[value].callDetails.secondCallRange}</b></Grid.Column>
                                        <Grid.Column width={5}><b>{otherNetwork.timelineData[value].callDetails.thirdCallRange}</b></Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <Grid.Column width={2} className="image-container">
                                            <div className="icon-container">
                                                <Image src={require('../../../assets/customer/' + this.props.customer.image)} size="small" circular className="user-image" />
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <div className="top-connect-first">
                                                <div className="second-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + otherNetwork.timelineData[value].callDetails.firstImage[0])} size='small' circular />
                                                    <span>{otherNetwork.timelineData[value].callDetails.firstCallDetails[0]}</span>
                                                </div>
                                                <div className="fifth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + otherNetwork.timelineData[value].callDetails.firstImage[1])} size='small' circular />
                                                    <span>{otherNetwork.timelineData[value].callDetails.firstCallDetails[1]}</span>
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <div className="top-connect-second">
                                                <div className="zero1-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + otherNetwork.timelineData[value].callDetails.secondImage[0])} size='small' circular />
                                                    <span>{otherNetwork.timelineData[value].callDetails.thirdCallDetails[0]}</span>
                                                </div>
                                                <div className="first-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + otherNetwork.timelineData[value].callDetails.secondImage[1])} size='small' circular />
                                                    <span>{otherNetwork.timelineData[value].callDetails.secondCallDetails[1]}</span>
                                                </div>
                                                <div className="fifth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + otherNetwork.timelineData[value].callDetails.secondImage[2])} size='small' circular />
                                                    <span>{otherNetwork.timelineData[value].callDetails.secondCallDetails[2]}</span>
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <div className="top-connect-third">
                                                <div className="third1-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + otherNetwork.timelineData[value].callDetails.thirdImage[0])} size='small' circular />
                                                    <span>{otherNetwork.timelineData[value].callDetails.thirdCallDetails[0]}</span>
                                                </div>
                                                <div className="fifth-circle">
                                                    <Image className="falg" src={require('../../../assets/Images/' + otherNetwork.timelineData[value].callDetails.thirdImage[1])} size='small' circular />
                                                    <span>{otherNetwork.timelineData[value].callDetails.thirdCallDetails[1]}</span>
                                                </div>
                                            </div>
                                        </Grid.Column>

                                    </Grid.Row>
                                </Grid>
                            </div>
                        }
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

// export default TopConnectsComponent

const mapStateToProps = (state) => ({
    customer: state.CustomerProfileReducers.customerProfileData
})

function mapDispatchToProps(dispatch) {
    return {
        getCustomerProfileData: (userId) => { dispatch(getCustomerProfileData(userId)); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopConnectsComponent)