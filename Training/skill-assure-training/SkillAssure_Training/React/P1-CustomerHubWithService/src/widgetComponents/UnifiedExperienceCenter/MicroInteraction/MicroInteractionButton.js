
import React from 'react';
import { GojsDiagram } from 'react-gojs';
import { Button, Grid, Divider } from 'semantic-ui-react';


class MicroInteractionButton extends React.Component {
    constructor(props) {
        super(props);
        // this.createDiagram = this.createDiagram.bind(this);
        // this.nodeSelectionHandler = this.nodeSelectionHandler.bind(this);

        // this.initModelHandler = this.initModelHandler.bind(this);
        this.state = {
            selectedNodeKeys: [],
            //data:[],
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


    handleClick(e, data) {
        fetch('https://websocket.vcommslab.com/alexa/websocket/faceRecognition', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                // this.props.history.push({
                // pathname: "/admin/orderDetails", state: {
                // orderedItems: result,
                // }
                // });
            })
            .catch((error) => {
            });
    }




    myFunction = (id) => {
        console.log(id)
        this.setState({
            selectedNodeKeys: [id],

        })
    }






    render() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
         console.log(h + ":" + m + ":" + s);
        let data = this.state.data
        console.log(data)
        console.log(this.props.open)
        console.log(this.state.selectedNodeKeys)
        return [
            <div>
                <h1></h1>
                <h1></h1>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={1}>


                            <Button onClick={(e) => this.handleClick(e, { "key": 200, "head": "", "foot": "Store Visit", "img": "checkout.png", "color": "white" })} >Store Visit</Button>
                            <Divider horizontal> </Divider>

                            <Button onClick={(e) => this.handleClick(e, { "key": 201, "head": "", "foot": "Contact Center Call", "img": "call-center-agent.png", "color": "white" })} >Contact Center Call</Button>
                            <Divider horizontal> </Divider>

                            <Button onClick={(e) => this.handleClick(e, { "key": 202, "head": "", "foot": "Email to contact center", "img": "email.png", "color": "white" })} >Email to contact center</Button>
                            <Divider horizontal> </Divider>

                            <Button onClick={(e) => this.handleClick(e, { "key": 203, "head": "", "foot": "website visit", "img": "www.png", "color": "white" })} >website visit</Button>
                            <Divider horizontal> </Divider>

                            <Button onClick={(e) => this.handleClick(e, { "key": 204, "head": " ", "foot": "Mobile App", "img": "mobile.png", "color": "white" })} >Mobile App</Button>
                            <Divider horizontal> </Divider>


                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                {/* <GojsDiagram
                    key="gojsDiagram"
                    diagramId="myDiagramDiv"
                    // model={data[0]}
                    model={this.state.data}
                    createDiagram={this.createDiagram}
                    className="myDiagram"
                /> */}
            </div>
        ];


    }
}

export default MicroInteractionButton;
