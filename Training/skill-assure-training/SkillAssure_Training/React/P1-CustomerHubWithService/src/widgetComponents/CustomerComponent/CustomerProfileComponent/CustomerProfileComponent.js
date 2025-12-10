import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Image, Icon, Segment, Checkbox, Loader } from 'semantic-ui-react'
import img from '../../../assets/customer/christian.jpg'
import './CustomerProfileComponent.scss'
import { getCustomerProfileData } from '../../../actions/CustomerActions/CustomerProfileAction'
import LoaderComponent from '../../../components/LoaderComponent/LoaderComponent'

class CustomerProfileComponent extends PureComponent {
    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        console.log("plan component")
        this.props.getCustomerProfileData(this.props.ids)
        this.setState({
            ids: this.props.ids
        })
    }

    componentDidUpdate() {
        if (this.props.ids != this.state.ids) {
            this.props.getCustomerProfileData(this.props.ids)
            this.setState({
                ids: this.props.ids
            })
        }

    }

    render() {

        console.log(this.props.customer)
        let customer = this.props.customer
        if (customer == undefined) {
            return (
                <div>
                    <Loader active={true} content='Loading' />
                </div>
            )
        }
        return (
            <div className="customer-profile">
                <Segment padded>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column className="image-container">
                                <Image src={require('../../../assets/customer/' + customer.image)} size="tiny" circular />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <br></br>
                    <Grid padded>
                        <Grid.Row className="profile-info">
                            {/* <Grid.Column width={4}></Grid.Column> */}
                            <Grid.Column width={12}><b>{customer.customerName}</b></Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="profile-info">
                            {/* <Grid.Column width={2}><Icon name="star" /></Grid.Column> */}
                            <Grid.Column><Icon name="star" style={{ color: customer.color }} /></Grid.Column>
                            <Grid.Column width={14}><b>{customer.customerType}</b></Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="profile-info">
                            <Grid.Column width={8}>customer since</Grid.Column>
                            <Grid.Column width={8}>{customer.memberFrom}</Grid.Column>
                        </Grid.Row>

                    </Grid>
                    <hr></hr>
                    <Grid padded>
                        <Grid.Row >
                            <Grid.Column width={2}><Icon name="call" /></Grid.Column>
                            <Grid.Column width={14}><b>Contact Information</b></Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="profile-info">
                            <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={14}>{customer.contactInfo1}<br></br>{customer.contactInfo2}</Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <hr></hr>
                    <Grid padded>
                        <Grid.Row>
                            <Grid.Column width={2}><Icon name="point" /></Grid.Column>
                            <Grid.Column width={14}><b>Address</b></Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="profile-info">
                            <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={14}>{customer.address.line1}<br></br>{customer.address.line2} <br></br>{customer.address.line3}<br></br>{customer.address.line4}</Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <hr></hr>
                    <Grid padded>
                        <Grid.Row >
                            <Grid.Column width={2}><Icon name="address book" /></Grid.Column>
                            <Grid.Column width={14}><b>Contact Preference</b></Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="profile-info">
                            <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={14}>
                                <Checkbox label='Phone (10 AM to 5 PM)' /> <br></br>
                                <Checkbox label='Text' /> <br></br>
                                <Checkbox label='Email & Post' checked={customer.contactPreference} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    customer: state.CustomerProfileReducers.customerProfileData
})

function mapDispatchToProps(dispatch) {
    return {
        getCustomerProfileData: (ids) => { dispatch(getCustomerProfileData(ids)); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfileComponent)
