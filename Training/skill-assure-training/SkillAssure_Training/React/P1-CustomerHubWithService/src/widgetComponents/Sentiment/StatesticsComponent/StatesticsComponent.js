import React from 'react';
import { Dropdown, Grid, Segment, Table } from 'semantic-ui-react';
import staticData from '../../../mock/CustomerKPIDashboard/Statistic.json'
class StatesticsComponent extends React.Component {


    render() {
       
        let staticData = this.props.staticData
        if (staticData != null){
            return (
                <Segment className="statestics" style={{ overflowY: 'scroll', float: 'left', height: '260px', position: 'relative' }}>
                    <Table stackable size='large'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Statistics</Table.HeaderCell>
                                <Table.HeaderCell>County</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {
                            staticData.map((item) => {
                                return (
                                    <Table.Row >
                                        <Table.Cell>{item.static}</Table.Cell>
                                        <Table.Cell>{item.county}</Table.Cell>
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

}
export default StatesticsComponent;