import React from 'react';
import { Table } from 'semantic-ui-react';

const percentData = [
    { id: 1, percent: "37%" },
    { id: 2, percent: "55%" },
    { id: 3, percent: "72%" },
    { id: 4, percent: "82%" },
    { id: 5, percent: "68%" },

]
class FactorsAffecting extends React.Component {


    render() {
        let arpuFactorData = this.props.arpuFactorData
        console.log(arpuFactorData, " arpuFactorData")
        return (
            <div>
                <h3><b>Top 5 NBA Outcomes</b></h3>
                <Table celled size={'large'}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Next Best Actions</Table.HeaderCell>
                            <Table.HeaderCell>Effectiveness</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            arpuFactorData.map((item, index) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{item}</Table.Cell>
                                        <Table.Cell>{percentData[index].percent}</Table.Cell>
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