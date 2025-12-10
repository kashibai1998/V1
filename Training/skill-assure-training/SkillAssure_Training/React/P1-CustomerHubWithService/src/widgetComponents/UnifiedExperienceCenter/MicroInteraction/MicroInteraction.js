import moment from 'moment';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card, Dropdown, Grid, Segment, Icon } from 'semantic-ui-react';
import './MicroInteraction.scss';
import newmodel from '../../../mock/MicroInteractionTab/newmodel.json';
import nba from '../../../mock/MicroInteractionTab/nba.json'
import MicroInteractionDiagram from '../../../components/MicroInteractionDiagram/MyDiagram/MicroInteractionDiagram';
import CustomerAvatarComponent from '../../../widgetComponents/DashboardComponent/CustomerAvatarComponent/CustomerAvatarComponent';
// import TabCardComponent from '../../components/TabCardComponent/TabCardComponent';
// import { NavbarBrand } from 'react-bootstrap';
import { Stomp } from '@stomp/stompjs';
const options = [
    { key: 1, text: 'Billing', value: "Billing" },
    { key: 2, text: 'Sales', value: "Sales" },
    { key: 3, text: 'Service', value: "Service" },
    { key: 4, text: 'All category', value: "All category" }
]
const sentimentOption = [
    { key: 1, text: 'Positive', value: "Positive" },
    { key: 2, text: 'Negative', value: "Negative" },
    { key: 3, text: 'Neutral', value: "Neutral" },
    { key: 4, text: 'All Sentiment', value: "All Sentiment" }
]
class MicroInteraction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            userId: "1",
            nbaData: null,
            nbaTitle:null,
            data: [],
            value: null,
            sentiment: null
        }
    }
    onChange = (date) => {
        this.setState({ date, graphData: null })
        let todayDate = new Date(date)
        let ClickedDate = todayDate.getDate();
        console.log(ClickedDate, "check date")
        for (let i = 0; i < nba.length; i++) {

            if (nba[i].id == this.state.userId) {
                for (let j = 0; j < nba[i].data.length; j++) {
                    let todayDate = new Date()
                    let JsonDate = todayDate.setDate(todayDate.getDate() - nba[i].data[j].day);
                        let convertJsonDate = this.convertDateTest(JsonDate);
                    if (ClickedDate == convertJsonDate) {
                        this.setState({
                            nbaData: nba[i].data[j].nbaData,
                            icon: nba[i].data[j].icon,
                            nbaTitle: nba[i].data[j].title
                        })
                        break
                    }
                }
            }
        }

    }
    stompConnect() {
        this.socket = new WebSocket("wss://websocket.vcommslab.com/ws");
        this.stompClient = Stomp.over(this.socket);
        this.stompClient.onDisconnect = () => {
            console.log('in onDisconnect');
            this.reConnectWebSocket();
        };
        this.stompClient.onStompError = () => {
            console.log('in onStompError');
            this.reConnectWebSocket();
        };
        // This is the most important
        this.stompClient.onWebSocketClose = () => {
            console.log('in onWebSocketClose');
            this.reConnectWebSocket();
        };

        console.log('trying to connect');
        this.stompClient.connect({}, (frame) => {
            console.log('Connected: ' + frame);
            this.stompClient.subscribe('/topic/faceRecognition', (message) => {
                console.log('message from server ');
                console.dir(message.body);
                var jsonMessage = JSON.parse(message.body);
                console.log(jsonMessage);
                console.log(jsonMessage.text);
                console.log(jsonMessage.head);
                console.log(jsonMessage.foot);
                let data = {
                    "nodeDataArray": [
                    ],
                    "linkDataArray": [
                        {
                            "from": "",
                            "to": ""
                        }
                    ]
                }

                this.postFetch(jsonMessage);
                data.nodeDataArray.push(jsonMessage)
                console.log(data)
                this.setState({
                    graphData: data
                })
            });
        }, (error) => {
            console.log('STOMP: ' + error);
            setTimeout(this.stompConnect, 10000);
            console.log('STOMP: Reconecting in 10 seconds');
        }
        );
    }
    postFetch(jsonMessage1) {
        console.log(jsonMessage1);
        fetch('https://aiservices.vcommslab.com:9443/sentimentanalysis/sentiment_analysis/notes', {
            method: 'POST',
            body: JSON.stringify(jsonMessage1),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.text())
            .then(json => {
                console.log(json);
                this.setState({ sentimentjson: json })

                this.changeJson(jsonMessage1)
            });
        console.log(this.state.jsonMessage)
    }
    changeJson = (data) => {
        console.log(data.color)
        console.log(this.state.sentimentjson)
        let obj = {
            nodeDataArray: [],
            linkDataArray: []
        }
        let newObj = {}
        newObj.key = data.key;
        newObj.head = data.head;
        newObj.foot = data.foot;
        newObj.img = data.img;
        if (this.state.sentimentjson == "Happy") {
            newObj.color = "green"
        }
        else if (this.state.sentimentjson == "Sad") {
            newObj.color = "red"
        }
        else {
            newObj.color = "white"
        }
        console.log(newObj)
        console.log(data)
        obj.nodeDataArray.push(newObj)
        // data.nodeDataArray.p=obj
        console.log(data)
        this.setState({
            graphData: obj

        });

    }
    reConnectWebSocket() {
        var that = this;
        const retryTimeout = 2;
        that.isconnected = false;
        console.log('Re-connecting websocket after', retryTimeout * 1000, 'secs...');
        // Call the websocket connect method
        setTimeout(() => {
            that.stompConnect();
        }, retryTimeout * 1000);
    }

    componentDidMount() {
        console.log('in component mount - initialising voice');
        this.stompConnect();
    }
    componentDidUpdate(newProps, prevProps) {
        if (this.state.userId != this.props.userId) {
            this.markCalendarDate(this.props.userId)
            this.setState({
                userId: this.props.userId,
                nbaData: null,
                value: null,
                sentiment: null,
                date: new Date()
            })

        }
    }
    componentWillMount() {
        this.markCalendarDate(this.state.userId)
    }
    markCalendarDate(userId) {
        console.log(userId, "UserID")
        let positiveDate = []
        let negativeDate = []
        let neutralDate = []
        let BillingsummaryDate=[]
        let otageSummaryDate=[]
        let dataSummaryDate=[]
        newmodel.map((item) => {
            if (item.id == this.props.userId) {
                item.userData.map((itemData) => {
                    //condition for analytic summary date
                    if(itemData.category == "Billing" && itemData.sentiment =="Negative"){
                        let todayDate = new Date()
                        let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                        let convertJsonDate = this.convertDate(JsonDate);
                        console.log(JsonDate, convertJsonDate, "checkDate")
                        BillingsummaryDate.push(convertJsonDate)
                    }
                    if(itemData.category == "Service" && itemData.sentiment =="Negative"){
                        let todayDate = new Date()
                        let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                        let convertJsonDate = this.convertDate(JsonDate);
                        console.log(JsonDate, convertJsonDate, "checkDate")
                        otageSummaryDate.push(convertJsonDate)
                    }
                    if(itemData.category == "Sales" && itemData.sentiment =="Neutral"){
                        let todayDate = new Date()
                        let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                        let convertJsonDate = this.convertDate(JsonDate);
                        console.log(JsonDate, convertJsonDate, "checkDate")
                        dataSummaryDate.push(convertJsonDate)
                    }
                    if (itemData.sentiment === "Negative") {
                        let todayDate = new Date()
                        let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                        let convertJsonDate = this.convertDate(JsonDate);
                        console.log(JsonDate, convertJsonDate, "checkDate")
                        negativeDate.push(convertJsonDate)
                    }
                    if (itemData.sentiment === "Neutral") {
                        let todayDate = new Date()
                        let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                        let convertJsonDate = this.convertDate(JsonDate);
                        neutralDate.push(convertJsonDate)
                    }
                    if (itemData.sentiment === "Positive") {
                        let todayDate = new Date()
                        let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                        let convertJsonDate = this.convertDate(JsonDate);
                        console.log(JsonDate, convertJsonDate, "checkDate")
                        positiveDate.push(convertJsonDate)
                    }

                })
            }
        })
        let date = negativeDate.concat(neutralDate)
        let newDate = date.concat(positiveDate);

        this.setState({
            mark: newDate,
            markRed: negativeDate,
            markGray: neutralDate,
            markGreen: positiveDate,
            userId: this.props.userId,
            BillingsummaryDate: BillingsummaryDate,
            otageSummaryDate: otageSummaryDate,
            dataSummaryDate:dataSummaryDate
        })
    }
    convertDate(time) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(time)
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-')
    }
    convertDateTest(time) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(time)
        return pad(d.getDate())
    }
    handleChange = (e, { value }) => {
        let positiveDate = []
        let negativeDate = []
        let neutralDate = []
        newmodel.map((item) => {
            if (item.id == this.state.userId) {
                item.userData.map((itemData) => {
                    if (itemData.category == value && itemData.sentiment === this.state.sentiment) {
                        if (itemData.sentiment === "Negative") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            negativeDate.push(convertJsonDate)
                        }
                        if (itemData.sentiment === "Neutral") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            neutralDate.push(convertJsonDate)
                        }
                        if (itemData.sentiment === "Positive") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            positiveDate.push(convertJsonDate)
                        }
                    }
                    else if (itemData.category == value && this.state.sentiment == "All Sentiment") {
                        console.log("second if will work")
                        if (itemData.sentiment === "Negative") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            negativeDate.push(convertJsonDate)
                        }
                        if (itemData.sentiment === "Neutral") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            neutralDate.push(convertJsonDate)
                        }
                        if (itemData.sentiment === "Positive") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            positiveDate.push(convertJsonDate)
                        }
                    }
                    else if (itemData.category == value && this.state.sentiment === null) {
                        if (itemData.sentiment === "Negative") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            negativeDate.push(convertJsonDate)
                        }
                        if (itemData.sentiment === "Neutral") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            neutralDate.push(convertJsonDate)
                        }
                        if (itemData.sentiment === "Positive") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            positiveDate.push(convertJsonDate)
                        }
                    }
                })
            }
        })
        let date = negativeDate.concat(neutralDate)
        let newDate = date.concat(positiveDate);
        this.setState({
            mark: newDate,
            markRed: negativeDate,
            markGray: neutralDate,
            markGreen: positiveDate,
            value,
            date: new Date()
        })
        // for returning at initial state
        if (value === "All category") {
            this.componentWillMount();
        }
    }
    handleChangeSentiment = (e, { value }) => {
        let positiveDate = []
        let negativeDate = []
        let neutralDate = []
        console.log(this.state.value, "category")
        newmodel.map((item) => {
            if (item.id == this.state.userId) {
                item.userData.map((itemData) => {
                    if (this.state.value === null && itemData.sentiment == value && value != "All Sentiment") {
                        if (value === "Negative") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            negativeDate.push(convertJsonDate)
                        }
                        if (value === "Positive") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            positiveDate.push(convertJsonDate)
                        }
                        if (value === "Neutral") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            neutralDate.push(convertJsonDate)
                        }

                    }
                    else if (value === "All Sentiment" && this.state.value != null) {
                        console.log("this will work")
                        if (itemData.category === this.state.value && itemData.sentiment == "Negative") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            negativeDate.push(convertJsonDate)
                        }
                        if (itemData.category === this.state.value && itemData.sentiment == "Positive") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            positiveDate.push(convertJsonDate)
                        }
                        if (itemData.category === this.state.value && itemData.sentiment == "Neutral") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            neutralDate.push(convertJsonDate)
                        }


                    }
                    else if (value === "All Sentiment") {

                        if (itemData.sentiment === "Negative") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            negativeDate.push(convertJsonDate)
                        }
                        if (itemData.sentiment == "Positive") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            positiveDate.push(convertJsonDate)
                        }
                        if (itemData.sentiment == "Neutral") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            neutralDate.push(convertJsonDate)
                        }

                    }
                    else if (itemData.category === this.state.value && itemData.sentiment === value) {

                        if (value === "Negative") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            negativeDate.push(convertJsonDate)
                        }
                        if (value === "Positive") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            positiveDate.push(convertJsonDate)
                        }
                        if (value === "Neutral") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            neutralDate.push(convertJsonDate)
                        }

                    }
                    else if (this.state.value == "All category" && itemData.sentiment === value) {

                        if (value === "Negative") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            negativeDate.push(convertJsonDate)
                        }
                        if (value === "Positive") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            positiveDate.push(convertJsonDate)
                        }
                        if (value === "Neutral") {
                            let todayDate = new Date()
                            let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                            let convertJsonDate = this.convertDate(JsonDate);
                            neutralDate.push(convertJsonDate)
                        }

                    }
                })
            }
        })
        let date = negativeDate.concat(neutralDate)
        let newDate = date.concat(positiveDate);
        this.setState({
            mark: newDate,
            markRed: negativeDate,
            markGray: neutralDate,
            markGreen: positiveDate,
            sentiment: value,
            date: new Date()
        })
    }

    render() {
        console.log(this.state.nbaData)
        let date = this.state.date
        let markDate = this.state.mark
        let clickedDate = new Date(this.state.date);
        let todayDate = new Date()
        let selectedCategory = this.state.value
        let userId = this.state.userId
        let j = 0
        let data = []
        if (!this.state.graphData) {
            console.log("if condition")
            for (let i = 0; i < markDate.length; i++) {
                if (this.convertDate(clickedDate) === markDate[i]) {
                    j = 1
                    newmodel.map((item) => {
                        if (item.id == userId) {
                            item.userData.map((itemData) => {
                                if (itemData.category === selectedCategory) {

                                    let date = new Date()
                                    let JsonDate = date.setDate(date.getDate() - itemData.day)
                                    let convertJsonDate = this.convertDate(JsonDate)
                                    if (this.convertDate(clickedDate) == convertJsonDate) {
                                        data.push(itemData.data[0].flowChartData)
                                    }

                                }
                                if (selectedCategory == undefined || selectedCategory == "All category") {

                                    let date = new Date()
                                    let JsonDate = date.setDate(date.getDate() - itemData.day)
                                    let convertJsonDate = this.convertDate(JsonDate)
                                    if (this.convertDate(clickedDate) === convertJsonDate) {
                                        data.push(itemData.data[0].flowChartData)
                                    }

                                }
                            })

                        }

                    })
                }

            }
        }
        else {
            console.log("else condition")
            data.push(this.state.graphData)
        }

        // if (j === 0) {
        //     data = []
        // }
        console.log(data)
        return (
            <div className="micro-interaction">
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <CustomerAvatarComponent userId={userId} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width="6">
                            
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width="16">
                                            <Card.Group itemsPerRow={4}>
                                                {this.state.nbaData = null &&
                                                    this.state.nbaData.map((item, index) => {
                                                        console.log(item)
                                                        return (
                                                            <Card className="tab-card">
                                                                <Grid>
                                                                    <Grid.Row>
                                                                        <Grid.Column width={3} textAlign="left">
                                                                            <div className="icon-section">
                                                                                <Icon name={this.state.icon} />
                                                                            </div>
 
                                                                        </Grid.Column>
                                                                        <Grid.Column width={13} textAlign="left">{this.state.nbaTitle[index]}</Grid.Column>
                                                                    </Grid.Row>
                                                                    <Grid.Row>
                                                                        <Grid.Column textAlign="left">{item}</Grid.Column>
                                                                    </Grid.Row>
                                                                </Grid>
                                                            </Card>
                                                        )
                                                    })
                                                }
                                            </Card.Group>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>

                               
                            
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    userId: state.userIdReducer.userId
})

export default connect(mapStateToProps)(MicroInteraction)