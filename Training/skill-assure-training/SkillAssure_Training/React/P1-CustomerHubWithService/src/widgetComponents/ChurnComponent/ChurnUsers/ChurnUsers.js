import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Icon, Table } from 'semantic-ui-react'
import data from '../../../mock/ChurnTab/ChurnUser.json'
class ChurnUsers extends React.Component {
    render() {
        return (
            <Segment style={{
                overflowY: 'scroll', float: 'left', height: '385px', position: 'relative', width: '100%'
            }}>
                <h3><b>Churn Users</b></h3>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Customer ID</Table.HeaderCell>
                            <Table.HeaderCell>Churn</Table.HeaderCell>
                            <Table.HeaderCell>Churn Probability</Table.HeaderCell>
                            <Table.HeaderCell>Gender</Table.HeaderCell>
                            <Table.HeaderCell>Senior Citizen</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            data.map((item) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{item.customerId}</Table.Cell>
                                        <Table.Cell>{item.churn}</Table.Cell>
                                        <Table.Cell>{item.predChurnRob}</Table.Cell>
                                        <Table.Cell>{item.gender}</Table.Cell>
                                        <Table.Cell>{item.seniorCitizen}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>

            </Segment>
        )
    }
}



export default ChurnUsers;