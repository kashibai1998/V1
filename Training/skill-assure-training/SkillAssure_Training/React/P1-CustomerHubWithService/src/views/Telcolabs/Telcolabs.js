
import React from 'react';
import { GojsDiagram } from 'react-gojs';
import { Button, Grid, Divider, Icon, Table } from 'semantic-ui-react';
import telcourl from '../../mock/telcolaburl.json';
import Item from 'antd/lib/list/Item';
import { Link } from 'react-router-dom';


class Telcolabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNodeKeys: [],
            data: {
                "nodeDataArray": [
                    { "key": 0, "head": "", "foot": "Store Visit", "img": "bill.png", "color": "white" },
                    { "key": 1, "head": "", "foot": "Contact Center Call", "img": "sms.png", "color": "white" },
                    { "key": 2, "head": "", "foot": "Email to contact center", "img": "email.png", "color": "white" },
                    { "key": 3, "head": "", "foot": "website visit", "img": "call-center-agent.png", "color": "red" },
                    { "key": 4, "head": " ", "foot": "Mobile App", "img": "action.png", "color": "white" },
                ],
                "linkDataArray": [

                ]
            }
            // clickedDate: new Date()
        };
    }


    render() {
        console.log(telcourl[0])
        return [
            <div>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Table celled striped stackable size='large'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='5'>Telcolabs Url</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {
                                        telcourl[0].Contract.map((item) => {
                                            console.log(item)
                                            return (
                                                <Table.Row>
                                        <Table.Cell collapsing textAlign='center'>
                                            {item.Sl_No}</Table.Cell>
                                        <Table.Cell textAlign='center' style={{"padding":"2%"}}>{item.project_Name}</Table.Cell>
                                        <Table.Cell collapsing textAlign='center'>
                                          <a href ={item.Application} target="_blank">  {item.Application} </a>
                                        </Table.Cell>
                                    </Table.Row>
                                    )
                                })

                                    }
                                 </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        ];


    }
}

export default Telcolabs;
