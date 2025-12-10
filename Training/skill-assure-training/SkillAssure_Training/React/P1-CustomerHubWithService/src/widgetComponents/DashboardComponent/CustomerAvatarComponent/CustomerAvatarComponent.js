import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { MdSentimentDissatisfied } from "react-icons/md";
import { List, Image, Icon, Grid, Header, Loader } from 'semantic-ui-react'
import img from '../../../assets/customer/christian.jpg'
import { getCustomerProfileData } from '../../../actions/CustomerActions/CustomerProfileAction';
import star from '../../../assets/dashboard/star.svg';
import './CustomerAvatarComponent.scss';
class CustomerAvatarComponent extends PureComponent {
    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        console.log("plan component")
        this.props.getCustomerProfileData(this.props.userId)
        this.setState({
            userId: this.props.userId
        })
    }


    componentDidUpdate() {
        if (this.props.userId != this.state.userId) {
            this.props.getCustomerProfileData(this.props.userId)
            this.setState({
                userId: this.props.userId
            })
        }
       
    }

    render() {
        let customer = this.props.customer
        console.log(customer, "customerData")
        if (customer == undefined) {
            return (
                <Loader active={true} content='Loading' />
            )
        }
        console.log(customer.memberFrom)
        var d = new Date();
        var newYear = new Date(customer.memberFrom);
        var memberYear = d.getFullYear() - newYear.getFullYear();
        var memberMonth = (Math.abs(d.getMonth() - newYear.getMonth() + 1));
        var memberFromYear = newYear.getFullYear();
        var memberFromMonth = (newYear.getMonth() + 1);
        var monthString;
        console.log(memberFromMonth);
        switch (memberFromMonth) {
            case 1: monthString = "January"; break;
            case 2: monthString = "February"; break;
            case 3: monthString = "March"; break;
            case 4: monthString = "April"; break;
            case 5: monthString = "May"; break;
            case 6: monthString = "June"; break;
            case 7: monthString = "July"; break;
            case 8: monthString = "August"; break;
            case 9: monthString = "September"; break;
            case 10: monthString = "October"; break;
            case 11: monthString = "November"; break;
            case 12: monthString = "December"; break;
            default: monthString = "Invalid month"; break;
        }
        console.log(monthString);
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <List horizontal size='massive' verticalAlign='middle'>
                                <List.Item>
                                    <Image src={require('../../../assets/customer/'+customer.image)} avatar />
                                    <List.Content>
                                        <List.Header>{customer.customerName}</List.Header>
                                        {/* <Icon name='smile outline' color={'yellow'} /> */}
                                        <MdSentimentDissatisfied className="emoji-symbol" />
                                    </List.Content>
                                </List.Item>
                            </List>

                        </Grid.Column>
                        <Grid.Column width={8} textAlign='center'>
                            <Header as='h3' disabled>
                                Since{" " + monthString + " " + " " + memberFromYear + " "} ({memberYear + " " + "Years and" + " " + memberMonth + " " + "Months"})
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={4} >
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={3} />
                                    <Grid.Column width={3} textAlign='right' style={{ paddingRight: '0px', paddingTop: '0px' }}>
                                        <Icon name="star" size={'large'} style={{ color: customer.color }} />
                                    </Grid.Column>
                                    <Grid.Column width={10} textAlign='left'>
                                        <Header as='h3' disabled >
                                            {customer.customerType}
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    customer: state.CustomerProfileReducers.customerProfileData
})

function mapDispatchToProps(dispatch) {
    return {
        getCustomerProfileData: (userId) => { dispatch(getCustomerProfileData(userId)); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerAvatarComponent)

