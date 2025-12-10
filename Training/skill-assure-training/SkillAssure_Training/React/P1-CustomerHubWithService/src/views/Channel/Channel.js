import React from 'react';
import * as go from 'gojs';
import { Diagram, ToolManager } from 'gojs';
import { GojsDiagram } from 'react-gojs';
import { Segment, Card, Icon, Menu, Grid, Loader } from 'semantic-ui-react'
import TabCardComponent from '../../components/TabCardComponent/TabCardComponent';
import AbandonedChart from '../../components/MyDiagram/AbandonedChart'
import './Channel.scss'
// import LineChartComponent from './LineChartComponent';
import LineChartComponent2 from './LineChart2Component';
import LineChartComponent3 from './LineChart3Component';
import LineChartComponent4 from './LineChart4Component';
import chartdata from '../../mock/Channel.json'
import Chart from 'chart.js';
import PieChartComponent from '../../components/PieChartComponent/PieChartComponent';
import LineChartComponent from '../../components/LineChartComponent/LineChartComponent';
// import LineChartComponent from '../../components/LineChartComponent/LineChartComponent';
class Channel extends React.Component {

    pielabelsData = ["Service Change Request", "Billing Request", "Care Request", "Others"]
    pielabelsPointsTab1 = [75, 14, 54, 35]
    // pielabelsDataTab2 = ["Service Change Request", "Billing Request", "Care Request", "Orders"]
    pielabelsPointsTab2 = [45, 32, 16, 16]
    pielabelsPointsTab3 = [15, 34, 34, 25]
    pielabelsPointsTab4 = [75, 14, 54, 35]
    mobileData = [410, 420, 320, 410, 440, 460, 370, 390, 270, 230, 280, 320, 340, 370, 410, 420, 320, 410, 440, 460, 370, 390, 270, 230, 280, 320, 340, 310, 320, 270];
    accessoriesData = [200, 120, 230, 250, 320, 220, 190, 380, 410, 420, 370, 330, 310, 290, 260, 250, 270, 300, 240, 320, 370, 420, 350, 420, 330, 300, 350, 400, 420, 400];
    ottData = [100, 180, 150, 170, 250, 140, 220, 130, 150, 120, 200, 160, 230, 140, 150, 170, 120, 210, 150, 140, 200, 180, 320, 330, 130, 180, 70, 120, 140, 330];
    newConnection = [300, 180, 40, 100, 170, 170, 190, 200, 150, 120, 200, 180, 110, 120, 150, 170, 190, 200, 150, 120, 200, 180, 380, 350, 150, 170, 190, 200, 150, 120]
    mobileDatatab2 = [200, 120, 230, 250, 320, 220, 190, 380, 410, 420, 370, 330, 310, 290, 260, 250, 270, 300, 240, 320, 370, 420, 350, 420, 330, 300, 350, 400, 420, 400];
    accessoriesDatatab2 = [210, 220, 100, 210, 340, 250, 200, 190, 170, 230, 190, 120, 310, 340, 310, 220, 120, 310, 240, 360, 370, 320, 290, 250, 270, 220, 140, 210, 320, 270];
    ottDatatab2 = [50, 40, 60, 120, 160, 210, 180, 220, 270, 310, 290, 180, 160, 140, 130, 150, 140, 160, 140, 130, 120, 110, 90, 95, 130, 70, 100, 120, 130, 170, 210];
    newConnectiontab2 = [300, 180, 40, 100, 170, 170, 190, 200, 150, 120, 200, 180, 110, 120, 150, 170, 190, 200, 150, 120, 200, 180, 380, 350, 150, 170, 190, 200, 150, 120];
    orderData = [3.5, 3.8, 3.1, 3.6, 2.9, 2.40, 2.30, 5.20, 5.60, 5.80, 3.00, 4.10, 5.80, 3.20, 3.10, 3.30, 5.40, 2.10, 2.90, 4.30, 4.00, 4.80, 5.70, 4.60, 3.40, 4.20, 2.00, 4.80, 4.00, 4.10];
    serviceRequestdata = [1.50, 1.60, 2.40, 3.20, 3.00, 3.70, 3.80, 3.90, 2.10, 2.20, 4.30, 2.40, 4.20, 4.00, 4.70, 4.50, 4.80, 1.00, 1.20, 3.40, 4.50, 2.60, 4.40, 4.30, 2.10, 2.30, 5.40, 2.20, 3.00, 4.30, 2.80];
    billingRequestdata = [2.50, 2.40, 2.60, 1.20, 1.60, 2.10, 1.80, 2.20, 2.70, 3.10, 2.90, 1.80, 1.60, 1.40, 1.30, 1.50, 1.40, 1.60, 1.40, 1.30, 1.20, 1.10, 2.90, 2.95, 2.130, 2.70, 1.00, 2.20, 1.30, 1.70, 2.10];
    generalEnquirydata = [2.00, 2.80, 2.50, 2.80, 1.40, 1.70, 1.90, 1.70, 1.40, 1.30, 1.80, 2.00, 2.10, 2.20, 1.70, 1.80, 1.90, 2.10, 1.50, 1.30, 2.00, 1.80, 2.80, 2.50, 1.70, 1.70, 1.80, 2.10, 1.50, 2.20]
    mobileDatatab4 = [230, 250, 270, 290, 310, 280, 280, 270, 250, 280, 300, 320, 290, 280, 270, 300, 310, 320, 270, 260, 240, 290, 310, 320, 300, 315, 300, 290, 310]
    accessoriesDatatab4 = [80, 120, 140, 120, 150, 170, 180, 190, 210, 180, 170, 150, 180, 170, 190, 220, 240, 260, 220, 190, 180, 170, 180, 200, 220, 230, 240, 260, 250, 230]
    ottDatatab4 = [50, 40, 60, 120, 160, 210, 180, 220, 270, 310, 290, 180, 160, 140, 130, 150, 140, 160, 140, 130, 120, 110, 90, 95, 130, 70, 100, 120, 130, 170, 210]
    newConnectiontab4 = [300, 320, 350, 395, 370, 320, 350, 420, 400, 460, 420, 390, 370, 340, 280, 260, 250, 280, 300, 320, 340, 300, 370, 410, 400, 390, 380, 370, 360, 340]

    constructor(props) {
        super(props);
        this.createDiagram = this.createDiagram.bind(this);
        this.nodeSelectionHandler = this.nodeSelectionHandler.bind(this);

        this.state = {
            activeItem: 'tab1',
            height: "200vh",
            width: "480%",
            backgroundColor: ["#67B5E5", "#E0E388", "#8890E3", "orange"],
            pielabelsData: this.pielabelsData,
            // pielabelsDataTab2: this.pielabelsDataTab2,
            pielabelsPointsTab1: this.pielabelsPointsTab1,
            pielabelsPointsTab2: this.pielabelsPointsTab2,
            pielabelsPointsTab3: this.pielabelsPointsTab3,
            pielabelsPointsTab4: this.pielabelsPointsTab4,
            mobileLabel: 'Mobile purchase',
            accessoriesLabel: 'Accessories purchase',
            ottLabel: 'OTT purchase',
            newConnectionLabel: 'New connection',
            orderLabel: 'Orders',
            serviceRequestLabel: 'Service Request',
            billingRequestLabel: 'Billing Request',
            generalEnquiryLabel: 'General Enquiry',
            mobileData: this.mobileData,
            accessoriesData: this.accessoriesData,
            ottData: this.ottData,
            newConnection: this.newConnection,
            mobileDatatab2: this.mobileDatatab2,
            accessoriesDatatab2: this.accessoriesDatatab2,
            ottDatatab2: this.ottDatatab2,
            newConnectiontab2: this.newConnectiontab2,
            orderData: this.orderData,
            serviceRequestdata: this.serviceRequestdata,
            billingRequestdata: this.billingRequestdata,
            generalEnquirydata: this.generalEnquirydata,
            mobileDatatab4: this.mobileDatatab4,
            accessoriesDatatab4: this.accessoriesDatatab4,
            ottDatatab4: this.ottDatatab4,
            newConnectiontab4: this.newConnectiontab4,

            onlinechartData: {
                "nodeDataArray": [
                    { key: 0, head: "", foot: "Online 6587", img: 'online.png', color: "white" },
                    { key: 1, head: "", foot: "2598 Abandoned", img: "abandon.png", color: "white" },
                    { key: 2, head: "", foot: "3989 Ordered", img: 'ordered.png', color: "white" },
                    { key: 3, head: "", foot: "1908 Online", img: "online.png", color: "white" },
                    { key: 4, head: "", foot: "678 Contact Center", img: "contactcenter.png", color: "white" },
                    { key: 5, head: "", foot: "342 Retail Store", img: "retailstore.png", color: "white" },
                    { key: 6, head: "", foot: "1061 Mobile", img: "mobile.png", color: "white" }
                ],
                "linkDataArray": [
                    { from: 0, to: 1 },
                    { from: 0, to: 2 },
                    { from: 2, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 },
                    { from: 2, to: 6 },
                ]
            },
            poschartData: {
                "nodeDataArray": [
                    { key: 0, head: "", foot: "5345 Enquiry in store", img: 'retailstore.png', color: "white" },
                    // { key: 1,head: "", foot: "1000 Abandoned", img: "abandon.png",color: "white" },
                    { key: 2, head: "", foot: "3678 Ordered", img: 'ordered.png', color: "white" },
                    { key: 3, head: "", foot: "452 Online", img: "online.png", color: "white" },
                    { key: 4, head: "", foot: "298 Contact Center", img: "contactcenter.png", color: "white" },
                    { key: 5, head: "", foot: "108 Store(PoS)", img: "retailstore.png", color: "white" },
                    { key: 6, head: "", foot: "808 Mobile", img: "mobile.png", color: "white" }
                ],
                "linkDataArray": [
                    { from: 0, to: 1 },
                    { from: 0, to: 2 },
                    { from: 2, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 },
                    { from: 2, to: 6 },
                ]
            },
            mobilechartData: {
                "nodeDataArray": [
                    { key: 0, head: "", foot: "5786 Mobile buy ", img: 'mobile.png', color: "white" },
                    { key: 1, head: "", foot: "1897 Abandoned", img: "abandon.png", color: "white" },
                    { key: 2, head: "", foot: "3889 Ordered", img: 'ordered.png', color: "white" },
                    { key: 3, head: "", foot: "878 Online", img: "online.png", color: "white" },
                    { key: 4, head: "", foot: "598 Contact Center", img: "contactcenter.png", color: "white" },
                    { key: 5, head: "", foot: "512 PoS", img: "retailstore.png", color: "white" },
                    { key: 6, head: "", foot: "1901 Mobile", img: "mobile.png", color: "white" }
                ],
                "linkDataArray": [
                    { from: 0, to: 1 },
                    { from: 0, to: 2 },
                    { from: 2, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 },
                    { from: 2, to: 6 },
                ]
            },
            contactcenterchartData: {
                "nodeDataArray": [
                    { key: 0, head: "", foot: "5013 Info about product", img: 'contactcenter.png', color: "white" },
                    { key: 1, head: "", foot: "2090 No Action", img: "abandon.png", color: "white" },
                    { key: 2, head: "", foot: "2923 Ordered", img: 'ordered.png', color: "white" },
                    { key: 3, head: "", foot: "1234 Online", img: "online.png", color: "white" },
                    { key: 4, head: "", foot: "519 Contact Center", img: "contactcenter.png", color: "white" },
                    { key: 5, head: "", foot: "501 Retail Store", img: "retailstore.png", color: "white" },
                    { key: 6, head: "", foot: "669 Mobile", img: "mobile.png", color: "white" }
                ],
                "linkDataArray": [
                    { from: 0, to: 1 },
                    { from: 0, to: 2 },
                    { from: 2, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 },
                    { from: 2, to: 6 },
                ]
            }
        };
    }

    createDiagram(diagramId) {
        const $ = go.GraphObject.make;

        const myDiagram = $(go.Diagram, diagramId, {
            initialContentAlignment: go.Spot.LeftCenter,
            layout: $(go.TreeLayout, {
                angle: 0,
                arrangement: go.TreeLayout.ArrangementHorizontal,
                treeStyle: go.TreeLayout.StyleLayered
            }),
            isReadOnly: false,
            allowHorizontalScroll: true,
            allowVerticalScroll: true,
            allowZoom: true,
            allowSelect: true,
            autoScale: Diagram.Uniform,
            contentAlignment: go.Spot.LeftCenter,
            TextEdited: this.onTextEdited
        });


        myDiagram.toolManager.panningTool.isEnabled = false;
        myDiagram.toolManager.mouseWheelBehavior = ToolManager.WheelScroll;

        function makeImagePath(img) {
            return require("../../../src/assets/Images/" + img);
        }

        myDiagram.nodeTemplate =
            $(go.Node, 'Auto',
                {
                    selectionChanged: node => this.nodeSelectionHandler(node.key, node.isSelected)
                },
                $(go.TextBlock, { margin: new go.Margin(0, 0, 0, 0), maxSize: new go.Size(100, 100), editable: false, font: "12px Georgia, Serif" },
                    new go.Binding('text', 'head')),
                $(go.Shape, "Circle",
                    { fill: "white", strokeWidth: 0, width: 60, height: 60 },
                    new go.Binding("fill", "color")),
                $(go.Picture,
                    { width: 55, height: 55 },
                    new go.Binding("source", "img", makeImagePath)),
                $(go.TextBlock, { margin: new go.Margin(80, 0, 0, 10), maxSize: new go.Size(105, 100), editable: false, font: "12px Georgia, Serif" },
                    new go.Binding('text', 'foot')),

            );
        myDiagram.linkTemplate =
            $(go.Link,
                {
                    curve: go.Link.Bezier,
                    toEndSegmentLength: 40, fromEndSegmentLength: 40
                },
                $(go.Shape,

                    { strokeWidth: 3, stroke: "#AEB0B2" }
                )
            );
        return myDiagram;
    }
    nodeSelectionHandler(nodeKey, isSelected) {
        if (isSelected) {
            this.setState({
                ...this.state,
                selectedNodeKeys: [...this.state.selectedNodeKeys, nodeKey]
            });
        } else {
            const nodeIndexToRemove = this.state.selectedNodeKeys.findIndex(key => key === nodeKey);
            console.log("un select")
            if (nodeIndexToRemove === -1) {
                this.setState({
                    ...this.state,
                    selectedNodeKeys: []
                });
                return;
            }
            this.setState({
                ...this.state,
                selectedNodeKeys: [
                    ...this.state.selectedNodeKeys.slice(0, nodeIndexToRemove),
                    ...this.state.selectedNodeKeys.slice(nodeIndexToRemove + 1)
                ]
            });
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        console.log(this.state.pielabelsData)
        console.log(this.state.data2)
        console.log(this.state.data3)
        console.log(this.state.data4)
        console.log(this.state.accessoriesData)
        return (
            <div className="channel">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16} textAlign="center">
                            <h2><b>Channel Dashboard</b></h2>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
                <div style={{ marginTop: "2%", marginBottom: "3%" }}>
                    <Menu attached='top' tabular fluid widths={4} >
                        <Menu.Item
                            name='tab1'
                            active={activeItem === 'tab1'}
                            onClick={this.handleItemClick}
                            className="link-style"
                        >

                            <div className="channel">
                                <Card className={activeItem === 'tab1' ? "tab-card-active" : "tab-card"}>

                                    {/* <Card.Header><b>Online</b></Card.Header> */}
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={3} textAlign="left">
                                                <div className="icon-section">
                                                    <Icon name='phone volume' size={'big'} />
                                                </div>

                                            </Grid.Column>
                                            <Grid.Column Width={13}>
                                                Online
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row >
                                            <Grid.Column textAlign="left" className="card-number">109831 </Grid.Column>
                                            {/* <Grid.Column style={{ textAlign: "left", fontSize: '20px' }}><b >109831</b><h2></h2> </Grid.Column> */}
                                        </Grid.Row>
                                        <Grid.Row >
                                            <Grid.Column textAlign="left">Number of visits</Grid.Column>
                                            {/* <p style={{ paddingLeft: "16px" }}>Number of visits</p> */}
                                        </Grid.Row>
                                    </Grid>

                                </Card>
                            </div>
                            {/* </Segment> */}
                            {/* <ChannelTabCardComponent Name="call" symbol={" "} style={activeItem === 'tab1' ? "tab-card-active" : "tab-card"} /> */}
                        </Menu.Item>
                        <Menu.Item
                            name='tab2'
                            active={activeItem === 'tab2'}
                            onClick={this.handleItemClick}
                            className="link-style"
                        >
                            <div className="channel">
                                <Card className={activeItem === 'tab2' ? "tab-card-active" : "tab-card"}>
                                    {/* <Card.Header>Mobile App</Card.Header> */}
                                    <Grid >
                                        <Grid.Row>
                                            <Grid.Column width={3} textAlign="left">
                                                <div className="icon-section">
                                                    <Icon name='mobile' size={'big'} />
                                                </div>

                                            </Grid.Column>
                                            <Grid.Column Width={13}>
                                                <p>Mobile App</p>
                                            </Grid.Column>

                                        </Grid.Row>
                                        <Grid.Row >
                                            <Grid.Column textAlign="left" className="card-number">100787 </Grid.Column>
                                            {/* <Grid.Column style={{ textAlign: "left", fontSize: '20px' }}><b >109831</b><h2></h2> </Grid.Column> */}
                                        </Grid.Row>
                                        <Grid.Row >
                                            <Grid.Column textAlign="left">Number of visits</Grid.Column>
                                            {/* <p style={{ paddingLeft: "16px" }}>Number of visits</p> */}
                                        </Grid.Row>

                                    </Grid>

                                </Card>
                            </div>
                            {/* <ChannelTabCardComponent data={this.state.data1} Name="usb" symbol={"Min"} style={activeItem === 'tab2' ? "tab-card-active" : "tab-card"} /> */}
                        </Menu.Item>
                        <Menu.Item
                            name='tab3'
                            active={activeItem === 'tab3'}
                            onClick={this.handleItemClick}
                            className="link-style"
                        >
                            <div className="channel">
                                <Card className={activeItem === 'tab3' ? "tab-card-active" : "tab-card"}>

                                    {/* <Card.Header>Contact Center</Card.Header> */}
                                    <Grid >
                                        <Grid.Row>
                                            <Grid.Column width={3} textAlign="left">
                                                <div className="icon-section"><Icon name='tag' size={'big'} /></div>
                                            </Grid.Column>
                                            <Grid.Column Width={13}>Contact Center</Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row >
                                            <Grid.Column textAlign="left" className="card-number">185612 </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row >
                                            <Grid.Column textAlign="left">Number of visits</Grid.Column>
                                        </Grid.Row>
                                    </Grid>

                                </Card>
                            </div>
                            {/* <TabCardComponent data={TabData.customerData.graph[2].channel} Name="tv" symbol={"%"} style={activeItem === 'tab3' ? "tab-card-active" : "tab-card"} /> */}
                        </Menu.Item>
                        <Menu.Item
                            name='tab4'
                            active={activeItem === 'tab4'}
                            onClick={this.handleItemClick}
                            className="link-style"
                        >
                            <div className="channel">
                                <Card className={activeItem === 'tab4' ? "tab-card-active" : "tab-card"}>

                                    {/* <Card.Header>PoS</Card.Header> */}
                                    <Grid >
                                        <Grid.Row>
                                            <Grid.Column width={3} textAlign="left">
                                                <div className="icon-section"><Icon name='window restore outline' size={'big'} /></div>
                                            </Grid.Column>
                                            <Grid.Column Width={13}>PoS</Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row >
                                            <Grid.Column textAlign="left" className="card-number">7578 </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row >
                                            <Grid.Column textAlign="left">Number of visits</Grid.Column>
                                        </Grid.Row>
                                    </Grid>

                                </Card>
                            </div>
                            {/* <TabCardComponent data={TabData.customerData.graph[3].channel} Name="map marker alternate" symbol={"devices"} style={activeItem === 'tab4' ? "tab-card-active" : "tab-card"} /> */}
                        </Menu.Item>
                    </Menu>
                </div>

                <Grid columns="equal">
                    {
                        activeItem == 'tab1' &&
                        <Grid.Row >
                            <Grid.Column >
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Number of Visits</b></h2>
                                    </Card.Header>
                                    <br></br>
                                    <br></br><h2></h2>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#FFA502" }}><b>1098313</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Views</b></h3>
                                    </Card.Content>

                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Average Browsing Time</b></h2>
                                    </Card.Header>

                                    <hr></hr>

                                    <h2></h2>

                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "purple" }}><b>3.8</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Mins</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Incomplete Transactions</b></h2>


                                    </Card.Header>

                                    <hr></hr>

                                    <h2></h2>

                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#EF8E9D" }}><b>350672</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Transaction</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }} >
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }}>
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Average time to place order</b></h2>
                                    </Card.Header><br></br>
                                    <h3></h3>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#098004" }}><b>9.5</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Mins</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }} >
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }}>
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Average time to place service request</b></h2>
                                    </Card.Header>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#1601FF" }}><b>4</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Mins</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                        </Grid.Row>
                    }
                    {
                        activeItem == 'tab2' &&
                        <Grid.Row >
                            <Grid.Column >
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Number of Visits</b></h2>
                                    </Card.Header>
                                    <br></br>
                                    <br></br><h2></h2>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#FFA502" }}><b>2007872</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Views</b></h3>
                                    </Card.Content>

                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Average Browsing Time</b></h2>
                                    </Card.Header>

                                    <hr></hr>

                                    <h2></h2>

                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "purple" }}><b>5.6</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Mins</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }}>
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Incomplete Transactions</b></h2>


                                    </Card.Header>

                                    <hr></hr>

                                    <h2></h2>

                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#EF8E9D" }}><b>287317</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Transaction</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Average time to place order</b></h2>
                                    </Card.Header>
                                    <br></br><h3></h3>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#098004" }}><b>2.4</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Mins</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Average time to place service request</b></h2>
                                    </Card.Header>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#1601FF" }}><b>4.5</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Mins</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                        </Grid.Row>
                    }
                    {
                        activeItem == 'tab3' &&
                        <Grid.Row >
                            <Grid.Column >
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }}>
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Number of Callers</b></h2>
                                    </Card.Header>
                                    <hr></hr>
                                    <h2></h2>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#FFA502" }}><b>885612</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Calls</b></h3>
                                    </Card.Content>

                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Avg Call Handling time</b></h2>
                                    </Card.Header>

                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "purple" }}><b>2.8</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Mins</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Average Queue time</b></h2>
                                    </Card.Header>
                                    <hr></hr>
                                    <h2></h2>

                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#EF8E9D" }}><b>2.5</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Mins</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Number of Escalations</b></h2>
                                    </Card.Header>

                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#098004" }}><b>48978</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Escalations</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }} >
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }}>
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Right first time</b></h2>
                                    </Card.Header>
                                    <hr></hr>
                                    <h2></h2>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#1601FF" }}><b>456678</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Calls</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                        </Grid.Row>
                    }
                    {
                        activeItem == 'tab4' &&
                        <Grid.Row >
                            <Grid.Column >
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Footfall</b></h2>
                                    </Card.Header>
                                    <hr></hr>

                                    <h2></h2>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#FFA502" }}><b>456578</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Customers</b></h3>
                                    </Card.Content>

                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }}>
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Average wait time</b></h2>
                                    </Card.Header>

                                    <hr></hr>

                                    <h2></h2>

                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "purple" }}><b>3.4</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Mins</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Repeat Visits</b></h2>
                                    </Card.Header>
                                    <hr></hr>
                                    <h2></h2>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#EF8E9D" }}><b>7</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Percent</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Orders</b></h2>
                                    </Card.Header>
                                    <hr></hr>
                                    <h2></h2>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#098004" }}><b>32988</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Orders</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ height: "230px" }}>
                                    <Card.Header textAlign='center' style={{ "border": "none" }} style={{ "padding": "10px" }} >
                                        <h2 textAlign='center' style={{ color: "skyblue" }}><b>Average Customers/Employee</b></h2>
                                    </Card.Header>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h1 style={{ color: "#1601FF" }}><b>22.5</b></h1>
                                    </Card.Content>
                                    <Card.Content style={{ "border": "none" }} textAlign='center'>
                                        <h3><b>Customers</b></h3>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                        </Grid.Row>
                    }
                    <Grid.Row stretched>
                        <Grid.Column>
                            {
                                activeItem == 'tab1' &&
                                <LineChartComponent mobileLabel={this.state.mobileLabel} accessoriesLabel={this.state.accessoriesLabel} ottLabel={this.state.ottLabel} newConnectionLabel={this.state.newConnectionLabel} mobileData={this.state.mobileData} accessoriesData={this.state.accessoriesData} ottData={this.state.ottData} newConnection={this.state.newConnection} />
                            }
                            {
                                activeItem == 'tab2' &&
                                <LineChartComponent mobileLabel={this.state.mobileLabel} accessoriesLabel={this.state.accessoriesLabel} ottLabel={this.state.ottLabel} newConnectionLabel={this.state.newConnectionLabel} mobileData={this.state.mobileDatatab2} accessoriesData={this.state.accessoriesDatatab2} ottData={this.state.ottDatatab2} newConnection={this.state.newConnectiontab2} />
                            }
                            {
                                activeItem == 'tab3' &&
                                <LineChartComponent mobileLabel={this.state.orderLabel} accessoriesLabel={this.state.serviceRequestLabel} ottLabel={this.state.billingRequestLabel} newConnectionLabel={this.state.generalEnquiryLabel} mobileData={this.state.orderData} accessoriesData={this.state.serviceRequestdata} ottData={this.state.billingRequestdata} newConnection={this.state.generalEnquirydata} />
                            }
                            {
                                activeItem == 'tab4' &&
                                <LineChartComponent mobileLabel={this.state.mobileLabel} accessoriesLabel={this.state.accessoriesLabel} ottLabel={this.state.ottLabel} newConnectionLabel={this.state.newConnectionLabel} mobileData={this.state.mobileDatatab4} accessoriesData={this.state.accessoriesDatatab4} ottData={this.state.ottDatatab4} newConnection={this.state.newConnectiontab4} />
                            }
                        </Grid.Column>
                        <Grid.Column>
                            {
                                activeItem == 'tab1' &&
                                <PieChartComponent
                                    data={this.state.pielabelsData} height={this.state.height} width={this.state.width} backgroundColor={this.state.backgroundColor} points={this.state.pielabelsPointsTab1}
                                />
                            }
                            {
                                activeItem == 'tab2' &&
                                <PieChartComponent
                                    data={this.state.pielabelsData} height={this.state.height} width={this.state.width} backgroundColor={this.state.backgroundColor} points={this.state.pielabelsPointsTab2}
                                />
                            }
                            {
                                activeItem == 'tab3' &&
                                <PieChartComponent
                                    data={this.state.pielabelsData} height={this.state.height} width={this.state.width} backgroundColor={this.state.backgroundColor} points={this.state.pielabelsPointsTab3}
                                />
                            }
                            {
                                activeItem == 'tab4' &&
                                <PieChartComponent
                                    data={this.state.pielabelsData} height={this.state.height} width={this.state.width} backgroundColor={this.state.backgroundColor} points={this.state.pielabelsPointsTab4}
                                />
                            }

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        {
                            activeItem == 'tab1' && this.state.onlinechartData != undefined &&
                            <Segment attached='bottom'>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width='8'>
                                            <Grid.Row>
                                                <Card.Header textAlign='center' style={{ "border": "none" }} >
                                                    <h3 textAlign='center' ><b>Channel Switching</b></h3>
                                                </Card.Header>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <GojsDiagram
                                                    key="gojsDiagram"
                                                    diagramId="myDiagramDiv"
                                                    model={this.state.onlinechartData}
                                                    createDiagram={this.createDiagram}
                                                    className="myDiagram"
                                                />
                                            </Grid.Row>
                                        </Grid.Column>
                                        <Grid.Column width='8'>
                                            <Grid.Row>
                                                <Card.Header textAlign='center' style={{ "border": "none" }} >
                                                    <h3 textAlign='center' ><b>Cart Abondonment
                                        </b></h3>
                                                </Card.Header>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <AbandonedChart data={chartdata[0].chartData.flowChartData} />
                                            </Grid.Row>

                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        }
                        {
                            activeItem == 'tab2' &&
                            <Segment attached='bottom'>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width='8'>
                                            <Grid.Row>
                                                <Card.Header textAlign='center' style={{ "border": "none" }} >
                                                    <h3 textAlign='center' ><b>Channel Switching</b></h3>
                                                </Card.Header>
                                            </Grid.Row>
                                            <GojsDiagram
                                                key="gojsDiagram"
                                                diagramId="myDiagramDiv"
                                                model={this.state.mobilechartData}
                                                createDiagram={this.createDiagram}
                                                className="myDiagram"
                                            />
                                        </Grid.Column>
                                        <Grid.Column width='8'>
                                            <Grid.Row>
                                                <Card.Header textAlign='center' style={{ "border": "none" }} >
                                                    <h3 textAlign='center' ><b>Cart Abondonment
                                        </b></h3>
                                                </Card.Header>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <AbandonedChart data={chartdata[1].chartData.flowChartData} />
                                            </Grid.Row>

                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>

                            </Segment>
                        }
                        {
                            activeItem == 'tab3' &&
                            <Segment attached='bottom'>
                                <h1>Contact Center Insights</h1>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width='2'>


                                        </Grid.Column>
                                        <Grid.Column width='10'>
                                            <Grid.Row>
                                                <Card.Header textAlign='center' style={{ "border": "none" }} >
                                                    <h3 textAlign='center' ><b>
                                                    </b></h3>
                                                </Card.Header>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <AbandonedChart data={chartdata[2].chartData.flowChartData} />
                                            </Grid.Row>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>


                            </Segment>
                        }
                        {
                            activeItem == 'tab4' &&
                            <Segment attached='bottom'>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width='8'>
                                            <Grid.Row>
                                                <Card.Header textAlign='center' style={{ "border": "none" }} >
                                                    <h3 textAlign='center' ><b>Channel Switching</b></h3>
                                                </Card.Header>
                                            </Grid.Row>
                                            <GojsDiagram
                                                key="gojsDiagram"
                                                diagramId="myDiagramDiv"
                                                model={this.state.poschartData}
                                                createDiagram={this.createDiagram}
                                                className="myDiagram"
                                            />
                                        </Grid.Column>
                                        <Grid.Column width='8'>
                                            <Grid.Row>
                                                <Card.Header textAlign='center' style={{ "border": "none" }} >
                                                    <h3 textAlign='center' ><b>PoS Insights
                                                 </b></h3>
                                                </Card.Header>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <AbandonedChart data={chartdata[3].chartData.flowChartData} />
                                            </Grid.Row>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>

                        }
                    </Grid.Row>
                </Grid>
            </div >
        )
    }
}
export default Channel;
