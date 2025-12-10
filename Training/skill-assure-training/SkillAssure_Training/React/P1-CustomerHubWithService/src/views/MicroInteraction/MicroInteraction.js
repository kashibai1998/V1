import { Stomp } from '@stomp/stompjs';
import { Steps } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Highlighter from "react-highlight-words";
import { connect } from 'react-redux';
import { Card, Dropdown, Grid, Icon, Segment, Loader } from 'semantic-ui-react';
import MicroInteractionDiagram from '../../components/MicroInteractionDiagram/MyDiagram/MicroInteractionDiagram';
import ProgressLine from '../../components/ProgressLine/ProgressLine';
// import nba from '../../mock/MicroInteractionTab/nba.json';
import socketNba from '../../mock/MicroInteractionTab/nbaWebsocket.json';
import newmodel from '../../mock/MicroInteractionTab/newmodel.json';
import prevDateChart from '../../mock/MicroInteractionTab/prevDay.json';
import CustomerAvatarComponent from '../../widgetComponents/DashboardComponent/CustomerAvatarComponent/CustomerAvatarComponent';
import getNbaData from '../../actions/MicrointeractionActions/NbaActions'
import './MicroInteraction.scss';
const { Step } = Steps;
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
            userId: 100001,
            days: 1,
            nbaData: socketNba[0].nbaData,
            nbaTitle: null,
            data: [],
            value: 'All category',
            sentiment: 'All Sentiment',
            graphData: '',
            reRender: false,
            counter: 0,
            billing_count: 0,
            service_count: 0,
            sales_count: 0,
            summaryData: false,
            newUserId: "2345",
            windowWidth: window.innerWidth * 0.8,
            jsonPost: '',
            queryType: '',
        }
    }
    onChange = (date) => {
        this.setState({ date, graphData: null, reRender: !this.state.reRender, websocket_data: null })

        let todayDate = new Date(date)
        let ClickedDate = todayDate.getDate();
        console.log(ClickedDate, "check date")
        this.setState({
            days: ClickedDate
        })
        console.log(this.state.days)

        // for (let i = 0; i < nba.length; i++) {
        console.log(this.state.userId)
        if (this.state.userId == this.props.userId) {
            // for (let j = 0; j < nba[i].data.length; j++) {
            let todayDate = new Date()
            let JsonDate = todayDate.setDate(todayDate.getDate() - this.state.date);
            let convertJsonDate = this.convertDateTest(JsonDate);
            if (ClickedDate == convertJsonDate) {
                this.setState({
                    // nbaData: nextbasedactionData.nba,
                    // icon: "lightbulb",
                    // nbaTitle: nextbasedactionData.recommendationchannel
                })
            }
            // }
        }
        let obj = {
            customerId: this.state.userId,
            day: this.state.days
        }
        console.log(obj)
        this.props.getNbaData(obj)
        // }
        //for Yesterday code
        console.log(ClickedDate)

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
                var jsonMessage = JSON.parse(message.body);
                console.log('json Message is ', jsonMessage);

                let websocket_data = JSON.parse(JSON.stringify(this.state.graphData))
                let data = {
                    "nodeDataArray": [
                    ],
                    "linkDataArray": [

                    ]
                }

                this.postFetch(jsonMessage);

                let newObj = {}
                if (this.state.sentimentjson == "Happy") {
                    newObj.color = "green"
                }
                else if (this.state.sentimentjson == "Sad") {
                    newObj.color = "red"
                }
                else {
                    newObj.color = "white"
                }
                //  data.nodeDataArray.push(newObj)


                if (this.state.graphData != undefined && this.state.graphData != "") {
                    if (jsonMessage.Type === "sales") {
                        console.log("inside sales if")
                        let linkData = {
                            "from": this.state.sales_count,
                            "to": this.state.counter + 1
                        }
                        //   console.log("counter is at 136", this.state.counter)
                        websocket_data.linkDataArray.push(linkData);

                        if (jsonMessage != undefined) {
                            jsonMessage.key = this.state.counter + 1;
                            websocket_data.nodeDataArray.push(jsonMessage)
                            // console.log("counter is at 142", this.state.counter, jsonMessage.key)
                        }
                        this.setState({
                            ...this.state,
                            graphData: websocket_data,
                            reRender: !this.state.reRender,
                            counter: this.state.counter + 1,
                            sales_count: this.state.counter + 1,
                            queryType: jsonMessage.Type
                        })
                    }
                    if (jsonMessage.Type === "billing") {
                        console.log("inside billing if")
                        let linkData = {
                            "from": this.state.billing_count,
                            "to": this.state.counter + 1
                        }
                        websocket_data.linkDataArray.push(linkData);
                        if (jsonMessage != undefined) {
                            jsonMessage.key = this.state.counter + 1;
                            websocket_data.nodeDataArray.push(jsonMessage)
                        }
                        this.setState({
                            ...this.state,
                            graphData: websocket_data,
                            reRender: !this.state.reRender,
                            counter: this.state.counter + 1,
                            billing_count: this.state.counter + 1,
                            queryType: jsonMessage.Type
                        })
                    }
                    if (jsonMessage.Type === "service") {
                        console.log("inside service if")
                        let linkData = {
                            "from": this.state.service_count,
                            "to": this.state.counter + 1
                        }
                        websocket_data.linkDataArray.push(linkData);
                        if (jsonMessage != undefined) {
                            jsonMessage.key = this.state.counter + 1;
                            websocket_data.nodeDataArray.push(jsonMessage)
                        }
                        this.setState({
                            ...this.state,
                            graphData: websocket_data,
                            reRender: !this.state.reRender,
                            counter: this.state.counter + 1,
                            service_count: this.state.counter + 1,
                            queryType: jsonMessage.Type
                        })
                    }
                    if (jsonMessage.Type === "general") {
                        console.log("inside general if")
                        let linkData1 = {
                            "from": this.state.service_count,
                            "to": this.state.counter + 1
                        }
                        let linkData2 = {
                            "from": this.state.billing_count,
                            "to": this.state.counter + 1
                        }
                        let linkData3 = {
                            "from": this.state.sales_count,
                            "to": this.state.counter + 1
                        }
                        websocket_data.linkDataArray.push(linkData1);
                        websocket_data.linkDataArray.push(linkData2);
                        websocket_data.linkDataArray.push(linkData3);
                        if (jsonMessage != undefined) {
                            jsonMessage.key = this.state.counter + 1;
                            websocket_data.nodeDataArray.push(jsonMessage)
                        }
                        this.setState({
                            ...this.state,
                            graphData: websocket_data,
                            reRender: !this.state.reRender,
                            counter: this.state.counter + 1,
                            service_count: this.state.counter + 1,
                            billing_count: this.state.counter + 1,
                            sales_count: this.state.counter + 1,
                            queryType: jsonMessage.Type
                        })
                    }
                }
                // socketNba
                else {
                    console.log("inside else")
                    jsonMessage.key = this.state.counter
                    data.nodeDataArray.push(jsonMessage)
                    console.log('data inside else is ', data)
                    this.setState({
                        graphData: data,
                        reRender: !this.state.reRender,
                        summaryData: true,

                        nbaData: socketNba[0].nbaData,
                        icon: socketNba[0].icon,
                        nbaTitle: socketNba[0].title,
                        queryType: jsonMessage.Type
                    })
                }
            });
        }, (error) => {
            console.log('STOMP: ' + error);
            setTimeout(this.stompConnect, 10000);
            console.log('STOMP: Reconecting in 10 seconds');
        }
        );
    }
    async postFetch(jsonMessage1) {
        console.log(jsonMessage1);
        this.setState({ jsonPost: jsonMessage1 });
        await fetch('https://aiservices.vcommslab.com:9443/sentimentanalysis/sentiment_analysis/notes', {
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

                //  this.changeJson(jsonMessage1)
            });
        //  console.log(this.state.jsonMessage)
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
            graphData: obj,
            reRender: !this.state.reRender

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
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth * 0.8 })
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);

        console.log('in component mount - initialising voice', window.innerWidth * 0.8);
        this.stompConnect();

        let obj = {
            customerId: this.state.userId,
            day: this.state.days
        }
        console.log(obj)
        this.props.getNbaData(obj)

    }
    componentDidUpdate(newProps, prevProps) {
        if (this.state.userId != this.props.userId.customerId) {
            this.markCalendarDate(this.props.userId.customerId)
            this.setState({
                userId: this.props.userId.customerId,
                nbaData: null,
                reRender: !this.state.reRender,
                value: null,
                sentiment: null,
                date: new Date()
            })

        }

    }
    componentWillMount() {
        console.log(this.state.userId, "UserID")
        this.markCalendarDate(this.state.userId)
    }
    markCalendarDate(userId) {
        console.log(userId, "UserID")
        let positiveDate = []
        let negativeDate = []
        let neutralDate = []
        let BillingsummaryDate = []
        let otageSummaryDate = []
        let dataSummaryDate = []
        // add Yesterday in red array
        let present_Date = new Date()
        let prev_date = present_Date.setDate(present_Date.getDate() - 1);
        let c_date = this.convertDate(prev_date);
        negativeDate.push(c_date)

        newmodel.map((item) => {
            if (item.id == userId) {
                item.userData.map((itemData) => {
                    //condition for analytic summary date
                    if (itemData.category == "Billing" && itemData.sentiment == "Negative") {
                        let todayDate = new Date()
                        let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                        let convertJsonDate = this.convertDate(JsonDate);
                        console.log(JsonDate, convertJsonDate, "checkDate")
                        BillingsummaryDate.push(convertJsonDate)
                    }
                    if (itemData.category == "Service" && itemData.sentiment == "Negative") {
                        let todayDate = new Date()
                        let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                        let convertJsonDate = this.convertDate(JsonDate);
                        console.log(JsonDate, convertJsonDate, "checkDate")
                        otageSummaryDate.push(convertJsonDate)
                    }
                    if (itemData.category == "Sales" && itemData.sentiment == "Neutral") {
                        let todayDate = new Date()
                        let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.day);
                        let convertJsonDate = this.convertDate(JsonDate);
                        console.log(JsonDate, convertJsonDate, "checkDate")
                        dataSummaryDate.push(convertJsonDate)
                    }
                    if (itemData.sentiment === "Negative") {
                        let todayDate = new Date()
                        //add negative sentiment in red array
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
            userId: this.props.userId.customerId,
            BillingsummaryDate: BillingsummaryDate,
            otageSummaryDate: otageSummaryDate,
            dataSummaryDate: dataSummaryDate,
            reRender: !this.state.reRender
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
                        console.log("condition 1")
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
                        console.log("condition 2")
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
                        console.log("condition 3")
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
        newmodel.map((item) => {
            if (item.id == this.state.userId) {
                item.userData.map((itemData) => {
                    if (this.state.value === null && itemData.sentiment == value && value != "All Sentiment") {
                        console.log("condition 4")
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
                        console.log("condition 5")
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
                        console.log("condition 6")
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
                        console.log("condition 7")
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
                        console.log("condition 8")
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

        let nextbasedactionData = this.props.nextbasedactionData
        console.log(nextbasedactionData)
        // if(nextbasedactionData == undefined){
        //     return (
        //         <div>
        //             <Loader active={true} content={'Loading'} />
        //         </div>
        //     )
        // }
        let date = this.state.date
        console.log(this.state.userId, " userId")
        let markDate = this.state.mark
        let clickedDate = new Date(this.state.date);
        let todayDate = new Date()
        let selectedCategory = this.state.value
        let userId = this.state.userId
        let j = 0
        let data = []
        if (!this.state.graphData) {
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
                else {
                    let present_Date = new Date()
                    let prev_date = todayDate.setDate(present_Date.getDate() - 1);
                    let c_date = this.convertDate(prev_date);
                    if (this.convertDate(clickedDate) === c_date) {
                        data.push(prevDateChart[0].flowChartData)
                    }
                }

            }
        }
        else {
            data.push(this.state.graphData)
        }
        console.log(userId)
        return (
            <div className="micro-interaction">
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <CustomerAvatarComponent userId={this.props.userId} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid stackable>

                    <Grid.Row>
                        <Grid.Column width="16">
                            <Segment>
                                <Grid>
                                    <Grid.Row style={{ height: "35%" }}>
                                        <Grid.Column width="4">
                                            <Segment fluid>
                                                <h3>TOTAL DURATION OF ALL INTERACTIONS</h3><p>
                                                    <h1 style={{ textAlign: 'left' }} ><b>245 mins</b></h1>
                                                    <h4 style={{ textAlign: 'left' }} ><b>51 mins(</b><Icon name="arrow up" style={{ color: "blue" }} />Average)</h4></p>
                                                <ProgressLine
                                                    label="Chatbot"
                                                    backgroundColor="lightblue"
                                                    visualParts={[
                                                        {
                                                            percentage: "40%",
                                                            color: "#063050"
                                                        }
                                                    ]}
                                                    belowlabel="70 mins"
                                                    average="16 mins"
                                                />
                                                <ProgressLine
                                                    label="Store"
                                                    backgroundColor="lightblue"
                                                    visualParts={[
                                                        {
                                                            percentage: "80%",
                                                            color: "#063050"
                                                        }
                                                    ]}
                                                    belowlabel="85 mins"
                                                    average="19 mins"

                                                />
                                                <ProgressLine
                                                    label="Call"
                                                    backgroundColor="lightblue"
                                                    visualParts={[
                                                        {
                                                            percentage: "60%",
                                                            color: "#063050"
                                                        }
                                                    ]}
                                                    belowlabel="90 mins"
                                                    average="16 mins"
                                                />

                                            </Segment>
                                        </Grid.Column>

                                        <Grid.Column textAlign="left" width="12">
                                            <Card.Group itemsPerRow={4}>
                                                {nextbasedactionData != null &&
                                                    nextbasedactionData.map((item) => {

                                                        console.log(nextbasedactionData)

                                                        return (
                                                            <Card className="tab-card">
                                                                <Grid>
                                                                    <Grid.Row>
                                                                        <Grid.Column width={3} textAlign="left">
                                                                            <div className="icon-section">
                                                                                <Icon name={'lightbulb'} />
                                                                            </div>

                                                                        </Grid.Column>
                                                                        <Grid.Column width={13} textAlign="left">{item.recommendationchannel}</Grid.Column>
                                                                    </Grid.Row>
                                                                    <Grid.Row>
                                                                        <Grid.Column textAlign="left">{item.nba}</Grid.Column>
                                                                    </Grid.Row>
                                                                </Grid>
                                                            </Card>
                                                        )
                                                    })
                                                }
                                            </Card.Group>

                                            <Grid.Column textAlign="center" width='6' style={{ marginTop: "20px" }}>
                                                <h3>INTERACTION CHART</h3>
                                                {data.length != 0

                                                    && <MicroInteractionDiagram data={data} reRender={this.state.reRender} userId={userId} date={date}
                                                        jsonPost={this.state.jsonPost}

                                                    />}
                                            </Grid.Column>
                                            {/* <Grid.Column
                                            style={{ marginTop:"20px", marginLeft: "50%" }}
                                            textAlign='right' width='4'>
                                            <Segment style={{ border: "none", boxShadow: "none" }}>

                                                <Card.Header as='h3'>HISTORICAL INTERACTIONS SUMMARY</Card.Header>

                                                <Steps direction="vertical" style={{ overflow: 'auto', maxHeight: 200, padding: "5px" }}>
                                                    {this.state.summaryData == true &&
                                                        <Step style={{ color: "green" }} status="process"
                                                            title={this.convertDate(todayDate)}
                                                            description={
                                                                <Highlighter
                                                                    highlightClassName="billing-color"
                                                                    searchWords={["Bill enquiry"]}
                                                                    autoEscape={true}
                                                                    textToHighlight="Customer called for Bill enquiry."
                                                                />}
                                                            strokeColor="red"
                                                            icon={<Icon name="ban" style={{ color: "red" }} />}
                                                            className="incomplete"
                                                        />
                                                    }
                                                    {this.state.summaryData == true &&
                                                        <Step status="process" className="complete"
                                                            title={this.convertDate(todayDate)}
                                                            description={
                                                                <Highlighter
                                                                    highlightClassName="sales-color"
                                                                    searchWords={["Data usage"]}
                                                                    autoEscape={true}
                                                                    textToHighlight="Customer called for Data usage Enquiry."
                                                                />}
                                                            strokeColor="red"
                                                            icon={<Icon name="check circle outline" style={{ color: "green" }} />}

                                                        />
                                                    }


                                                    <Step status="process"
                                                        title="24-02-2021"
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="sales-color"
                                                                searchWords={["bill details"]}
                                                                autoEscape={true}
                                                                textToHighlight="Call to contact center regarding bill details."
                                                            />}
                                                        icon={<Icon name="ban" style={{ color: "red" }} />}
                                                        strokeColor="red"
                                                    />

                                                    <Step status="process"
                                                        title="20-02-2021"
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="sales-color"
                                                                searchWords={["ticket"]}
                                                                autoEscape={true}
                                                                textToHighlight="regarding status of last ticket."
                                                            />}
                                                        icon={<Icon name="check circle outline" style={{ color: "green" }} />}
                                                        strokeColor="red"
                                                    />

                                                    <Step status="process" id="notes"
                                                        title={this.state.BillingsummaryDate[0]}
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="billing-color"
                                                                searchWords={["bill discrepancy"]}
                                                                autoEscape={true}
                                                                textToHighlight="Drop in customer sentiment due to bill discrepancy  Agent feedback was positive."
                                                            />
                                                        }
                                                        strokeColor="red"
                                                        icon={<Icon name="check circle outline" style={{ color: "green" }} />}
                                                    />
                                                    <Step status="process"
                                                        title={this.state.otageSummaryDate[0]}
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="service-color"
                                                                searchWords={["call drop", "network outage"]}
                                                                autoEscape={true}
                                                                textToHighlight="Customer unhappy with the call drop and network outage"
                                                            />
                                                        }
                                                        icon={<Icon name="check circle outline" style={{ color: "green" }} />}
                                                        strokeColor="red"
                                                    />
                                                    <Step status="process"
                                                        title={this.state.dataSummaryDate[0]}
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="sales-color"
                                                                searchWords={["low data"]}
                                                                autoEscape={true}
                                                                textToHighlight="Call to contact center regarding low data speed."
                                                            />}
                                                        icon={<Icon name="check circle outline" style={{ color: "green" }} />}
                                                        strokeColor="red"
                                                    />
                                                </Steps>
                                            </Segment>


                                        </Grid.Column> */}


                                        </Grid.Column>

                                        <Grid.Column
                                            style={{ marginTop: "2%" }}
                                            width="4">
                                            <Segment>
                                                <Grid>
                                                    <Grid.Row
                                                        // style={{ marginLeft: "10%" }}
                                                        columns='2'>

                                                        <Grid.Column  >
                                                            <Card.Header as='h5'><b>SELECT CATEGORY</b></Card.Header>
                                                            <Dropdown placeholder='category' compact options={options} value={this.state.value} selection onChange={this.handleChange} />
                                                        </Grid.Column>
                                                        <Grid.Column>
                                                            <Card.Header as='h5'><b>SELECT SENTIMENT</b></Card.Header>
                                                            <Dropdown placeholder='sentiment' compact options={sentimentOption} value={this.state.sentiment} selection onChange={this.handleChangeSentiment} />
                                                        </Grid.Column></Grid.Row>
                                                    <Grid.Row>  <Grid.Column textAlign="center"
                                                    //style={{ marginLeft: "10%" }}
                                                    > <Calendar
                                                            onChange={this.onChange}
                                                            value={date}
                                                            tileClassName={({ date, view }) => {
                                                                if (this.state.markRed.find(x => x === moment(date).format("DD-MM-YYYY"))) {
                                                                    return 'highlight'
                                                                }
                                                                if (this.state.markGreen.find(x => x === moment(date).format("DD-MM-YYYY"))) {
                                                                    return 'green'
                                                                }
                                                                if (this.state.markGray.find(x => x === moment(date).format("DD-MM-YYYY"))) {
                                                                    return 'gray'
                                                                }
                                                            }}

                                                        /></Grid.Column> </Grid.Row>



                                                </Grid>
                                            </Segment>
                                        </Grid.Column>
                                        <Grid.Column
                                            style={{ marginTop: "20px", marginLeft: "50%" }}
                                            textAlign='right' width='4'>
                                            <Segment style={{ border: "none", boxShadow: "none" }}>

                                                <Card.Header as='h3'>HISTORICAL INTERACTIONS SUMMARY</Card.Header>

                                                <Steps direction="vertical" style={{ overflow: 'auto', maxHeight: 200, padding: "5px" }}>
                                                    {this.state.summaryData == true &&
                                                        <Step style={{ color: "green" }} status="process"
                                                            title={this.convertDate(todayDate)}
                                                            description={
                                                                <Highlighter
                                                                    highlightClassName="billing-color"
                                                                    searchWords={["Bill enquiry"]}
                                                                    autoEscape={true}
                                                                    textToHighlight="Customer called for Bill enquiry."
                                                                />}
                                                            strokeColor="red"
                                                            icon={<Icon name="ban" style={{ color: "red" }} />}
                                                            className="incomplete"
                                                        />
                                                    }
                                                    {this.state.summaryData == true &&
                                                        <Step status="process" className="complete"
                                                            title={this.convertDate(todayDate)}
                                                            description={
                                                                <Highlighter
                                                                    highlightClassName="sales-color"
                                                                    searchWords={["Data usage"]}
                                                                    autoEscape={true}
                                                                    textToHighlight="Customer called for Data usage Enquiry."
                                                                />}
                                                            strokeColor="red"
                                                            icon={<Icon name="check circle outline" style={{ color: "green" }} />}

                                                        />
                                                    }


                                                    <Step status="process"
                                                        title="24-02-2021"
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="sales-color"
                                                                searchWords={["bill details"]}
                                                                autoEscape={true}
                                                                textToHighlight="Call to contact center regarding bill details."
                                                            />}
                                                        icon={<Icon name="ban" style={{ color: "red" }} />}
                                                        strokeColor="red"
                                                    />

                                                    <Step status="process"
                                                        title="20-02-2021"
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="sales-color"
                                                                searchWords={["ticket"]}
                                                                autoEscape={true}
                                                                textToHighlight="regarding status of last ticket."
                                                            />}
                                                        icon={<Icon name="check circle outline" style={{ color: "green" }} />}
                                                        strokeColor="red"
                                                    />

                                                    <Step status="process" id="notes"
                                                        title={this.state.BillingsummaryDate[0]}
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="billing-color"
                                                                searchWords={["bill discrepancy"]}
                                                                autoEscape={true}
                                                                textToHighlight="Drop in customer sentiment due to bill discrepancy  Agent feedback was positive."
                                                            />
                                                        }
                                                        strokeColor="red"
                                                        icon={<Icon name="check circle outline" style={{ color: "green" }} />}
                                                    />
                                                    <Step status="process"
                                                        title={this.state.otageSummaryDate[0]}
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="service-color"
                                                                searchWords={["call drop", "network outage"]}
                                                                autoEscape={true}
                                                                textToHighlight="Customer unhappy with the call drop and network outage"
                                                            />
                                                        }
                                                        icon={<Icon name="check circle outline" style={{ color: "green" }} />}
                                                        strokeColor="red"
                                                    />
                                                    <Step status="process"
                                                        title={this.state.dataSummaryDate[0]}
                                                        description={
                                                            <Highlighter
                                                                highlightClassName="sales-color"
                                                                searchWords={["low data"]}
                                                                autoEscape={true}
                                                                textToHighlight="Call to contact center regarding low data speed."
                                                            />}
                                                        icon={<Icon name="check circle outline" style={{ color: "green" }} />}
                                                        strokeColor="red"
                                                    />
                                                </Steps>
                                            </Segment>


                                        </Grid.Column>

                                    </Grid.Row>
                                </Grid>


                            </Segment>
                        </Grid.Column>




                    </Grid.Row>

                </Grid>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    userId: state.userIdReducer.ids,
    // obj:state.NbaReducer.obj

    nextbasedactionData: state.NbaReducer.nextbasedactionData

})

const mapDispatchToProps = (dispatch) => ({
    getNbaData: (userId, day) => { dispatch(getNbaData(userId, day)); },
    // getNbaData: (day) => { dispatch(getNbaData(day)); }

})

export default connect(mapStateToProps, mapDispatchToProps)(MicroInteraction)

// const mapStateToProps = (state) => ({
//     ids: state.userIdReducer.ids,
//     // data: state.DashboardReducer.DashboardData
// })

// function mapDispatchToProps(dispatch) {
//     return {
//         getDashboardData: (ids) => { dispatch(getDashboardData(ids)); },
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MicroInteraction)