import React from 'react';
import { Table } from 'semantic-ui-react';
class FactorsAffecting extends React.Component {


    render() {
        let arpuFactorData = this.props.arpuFactorData
        console.log(arpuFactorData," arpuFactorData")
        return (
            <div>
                <h3><b>Factors Affecting ARPU </b></h3>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Insights</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            arpuFactorData.map((item) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{item}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </div>

        )

    }
}



export default FactorsAffecting;