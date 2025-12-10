import React, { Component } from "react";
import { Segment, Table } from 'semantic-ui-react';

const arr = ['Churn for female less than 18yrs  in same category by 30%', 'Churn in Highland has dropped by 2%', 'Churn in Northumberland has dropped by 3%','Churn in Antrim has dropped by 3%','Increase of 10% in Churn in Tyrone  in 18 to 40yrs segment','Increase of 10% in Churn in Tyrone  in above 40yrs segment','Increase of 10% in Churn in Highland in below 18 segment  ']
const arr1 = ['Churn for  age between lower  in same category by 50%', 'Churn in Norfolk has dropped by 5%','Churn in Orkney Islands has dropped by 3%', 'Churn in Bedfordshire has dropped by 3%','Increase of 10% in Churn in Tyrone after introduction of Family plan in 18 to 40yrs segment']
const arr2 = ['Churn for  age >40 lower  in same category by 10%', 'Churn in Lincolnshire has dropped by 3%','Churn in Devon has dropped by 3%', 'Churn in Suffolk has dropped by 3%','Increase of 10% in Churn in Hertfordshire after introduction of Family plan ']
class ChurnInsightsComponents extends Component {
    render() {
        console.log(this.props.filterData)
        if(this.props.filterData!=null)
        return (
            <div>
                <h3><b>Factors Affecting Churn </b></h3>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Insights</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.filterData.age18To40 == null && this.props.filterData.ageAbove40 == null && this.props.filterData.ageBelow18 != null &&
                        arr.map((item) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{item}</Table.Cell>
                                </Table.Row>
                            )
                        })
                        }
                        {this.props.filterData.age18To40 != null && this.props.filterData.ageAbove40 == null && this.props.filterData.ageBelow18 == null &&
                        arr1.map((item) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{item}</Table.Cell>
                                </Table.Row>
                            )
                        })
                        }
                        { this.props.filterData.age18To40 == null && this.props.filterData.ageAbove40 != null && this.props.filterData.ageBelow18 == null &&
                        arr2.map((item) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{item}</Table.Cell>
                                </Table.Row>
                            )
                        })
                        }
                         { this.props.filterData.age18To40 != null && this.props.filterData.ageAbove40 != null && this.props.filterData.ageBelow18 != null &&
                        arr.map((item) => {
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
        else
        return(
            <div>
            <h3><b>Factors Affecting Churn </b></h3>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Insights</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
               {
                        arr.map((item) => {
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
export default ChurnInsightsComponents;