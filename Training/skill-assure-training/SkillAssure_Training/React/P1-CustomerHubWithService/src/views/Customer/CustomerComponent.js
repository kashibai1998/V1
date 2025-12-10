import React from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import TabularComponent from '../../components/TabularComponent/TabularComponent';
import ContractComponent from '../../widgetComponents/CustomerComponent/ContractComponent/ContractComponent';
import CustomerProfileComponent from '../../widgetComponents/CustomerComponent/CustomerProfileComponent/CustomerProfileComponent';
import FamilyTreeComponent from '../../widgetComponents/CustomerComponent/FamilyTreeComponent/FamilyTreeComponent';
import PlanComponent from '../../widgetComponents/CustomerComponent/PlanComponent/PlanComponent';
import getTransactionData from '../../actions/TransactionAction'
import { connect } from 'react-redux';
import './CustomerComponent.scss'
class CustomerComponent extends React.Component {

    state = {
        ids: {
            customerId: 100001,
            accountId: 9101010103
        }
    }

    componentDidMount() {
        this.props.getTransactionData(this.state.ids)
    }

    componentDidUpdate() {
        if (this.props.ids != this.state.ids) {
            this.props.getTransactionData(this.props.ids)
            this.setState({
                ids: this.props.ids
            })
        }

    }
    render() {
        console.log(this.props.ServiceData, this.props.OrderData, this.props.BillingData)
        let ids = this.props.ids
        if (this.props.ServiceData == undefined || this.props.OrderData == undefined || this.props.BillingData == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        else {
            // console.log(this.props.ServiceData)
            return (

                <div className="customer-component" style={{ padding: '2%' }}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <CustomerProfileComponent ids={ids} />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Grid>
                                    <Grid.Row stretched>
                                        <Grid.Column width={9}>
                                            <PlanComponent ids={ids} />
                                        </Grid.Column>
                                        <Grid.Column width={7}>
                                            <ContractComponent userId={ids.customerId} />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>

                                <Grid >
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <TabularComponent userId={ids.customerId} title={'SERVICES TRANSACTIONS'} tableheader={['Ticket Number', 'Raised on', 'Issue', 'Status', 'Closure Date']} data={this.props.ServiceData} />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>

                                <Grid >
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <TabularComponent userId={ids.customerId} title={'ORDER TRANSACTIONS'} tableheader={['Order Number', 'Raised on', 'Description', 'Status', 'Closure Date']}
                                                data={this.props.OrderData} />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                <Grid >
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <TabularComponent userId={ids.customerId} title={'BILLING TRANSACTIONS'} tableheader={['Bill Number', 'Bill Date', 'Amount', 'Status', 'Dispute Bill']} data={this.props.BillingData} />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>

                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <FamilyTreeComponent ids={ids} />
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
}

const mapStateToProps = (state) => ({
    ids: state.userIdReducer.ids,
    ServiceData: state.ServiceReducer.ServiceData,
    OrderData: state.OrderReducer.OrderData,
    BillingData: state.BillingReducer.BillingData

})
const mapDispatchToProps = (dispatch) => ({
    getTransactionData: (ids) => { dispatch(getTransactionData(ids)); },


})


export default connect(mapStateToProps, mapDispatchToProps)(CustomerComponent);