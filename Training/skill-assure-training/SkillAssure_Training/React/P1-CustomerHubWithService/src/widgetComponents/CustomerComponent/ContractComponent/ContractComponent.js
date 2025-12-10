import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Header, Segment, Table, Loader } from 'semantic-ui-react'
import './ContractComponent.scss'
import getContractData from '../../../actions/CustomerActions/ContractAction'

class ContractComponent extends React.Component {


    formatDate = (nowDate) => {
        let date=new Date(nowDate)
        return date.getDate() + "/" + (date.getMonth() + 1) + '/' + date.getFullYear();
    }

    render() {
        console.log(this.props.planData)
        let planData = this.props.planData
        if (planData == undefined) {
            return (
                <div>
                    <Loader active={true}>Loading</Loader>
                </div>
            )
        }
        return (
            <div className="contract-component">
                <Segment className="segment">
                    <Grid padded>
                        <b>CONTRACT</b>
                        <Table basic='very'>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Contract Expires</Table.Cell>
                                    <Table.Cell textAlign="right">{this.formatDate(planData[0].startDate)}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Eligible to upgrade</Table.Cell>
                                    <Table.Cell textAlign="right">{this.formatDate(planData[0].eligibleToUpgrade)}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Discount expires</Table.Cell>
                                    <Table.Cell textAlign="right">{this.formatDate(planData[0].discountexpire)}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Sport package expires</Table.Cell>
                                    <Table.Cell textAlign="right">{this.formatDate(planData[0].endDate)}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid>
                </Segment>

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    planData: state.PlanReducer.planData
})

function mapDispatchToProps(dispatch) {
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractComponent)
