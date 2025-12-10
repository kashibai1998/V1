import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Icon, Table } from 'semantic-ui-react'
import SocialSentimentData from '../../../mock/SocialSentiment/SocialSentiment.json'
class SocialSentiment extends React.Component {


    render() {
        console.log(this.props.SocialSentimentData, "socioSentiment")
        return (
            <Segment style={{
                overflowY: 'scroll', float: 'left', height: '30vh', position: 'relative'
            }}>
                <h3><b>Social Sentiment</b></h3>
                <Table celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Text</Table.HeaderCell>
                            <Table.HeaderCell>Sentiment</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.SocialSentimentData.map((item) => {
                                return (
                                    <Table.Row >
                                        <Table.Cell>{item.text}</Table.Cell>
                                        <Table.Cell>{item.sentiment}</Table.Cell>
                                    </Table.Row>
                                )
                            })

                        }
                    </Table.Body>
                </Table>

            </Segment >

        )
    }
}



export default SocialSentiment;