import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import './CardView.scss';

class CardView extends React.Component {

    // constructor(props) {
    //     super(props);
    //    this.state ={
    //     jsonPost: this.props.jsonPost,
    //    }
    // }

    render() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        let data = this.props.data
        let jsonPost = this.props.jsonPost
        console.log("aadsgf",data)
        if (data) {
            return (
                <div>
                    <Table basic='very' celled collapsing>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4'>
                                        <Header.Content>Event:</Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4'>
                                        <Header.Content>Description:</Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>
                                    {/* {data.description} */}
                                    {jsonPost.text}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4'>
                                        <Header.Content>Time:</Header.Content>
                                    </Header>
                                </Table.Cell>
                                {/* <Table.Cell>{data.time}</Table.Cell> */}
                                <Table.Cell>  <div className="row">
                                    {/* { //Check if message failed
                                        (this.props.data.time === '00')
                                            ? <div> {h + ":" + m + ":" + s} </div>
                                            : <div> {data.time} </div>
                                    } */}
                                    {jsonPost.time}
                                </div></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4'>
                                        <Header.Content> Sentiment:</Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>
                                    {/* {data.sentiment} */}
                                    {jsonPost.sentiment}
                                    </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4'>
                                        <Header.Content>Initiated By:</Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell> {data.initiated_by}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4'>
                                        <Header.Content>Channel:</Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell> 
                                    {/* {data.chanel} */}
                                    {jsonPost.channel}
                                    </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4'>
                                        <Header.Content>Resolution Status:</Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell><span className={data.resolved === "No" ? 'red text-result' : 'green text-result'}>{data.resolved}</span></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            )
        } else {
            return ("NANA")
        }

    }
}
export default CardView