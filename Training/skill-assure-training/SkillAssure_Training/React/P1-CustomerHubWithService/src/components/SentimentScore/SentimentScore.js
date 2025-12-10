// import React from 'react';
// import { Grid, Segment } from 'semantic-ui-react';
// import Chart from 'chart.js';
// class SentimentScore extends React.Component {

//     chartRef2 = React.createRef();
//     chart;
//     componentDidMount() {
//         const myChartRef2 = this.chartRef2.current.getContext("2d");
//         const colors = {
//             green: {
//                 fill: 'green',
//                 // stroke: '#5eb84d',
//             },
//             lightBlue: {
//                 fill: 'blue',
//                 // stroke: '#6fccdd',
//             },
//             darkBlue: {
//                 fill: 'orange',
//                 // stroke: '#3282bf',
//             },
//             purple: {
//                 fill: '#EF8E9D',
//                 // stroke: '#75539e',
//             },
//         };

//         // const loggedIn = [26, 36, 42, 38, 40, 30, 12];
//         // const available = [34, 44, 33, 24, 25, 28, 25];
//         // const availableForExisting = [16, 13, 25, 33, 40, 33, 45];
//         // const unavailable = [5, 9, 40, 9, 18, 100, 20];
//         // // const xData = ['jan', 'april','feb', 'mon16', 'sat17', 'sun18', 'tue19'];
//         // const xData = ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'];

//         this.chart = new Chart(myChartRef2, {
//             type: 'line',

//             data: {
//                 labels: this.props.xData,
//                 datasets: [{
//                     label: this.props.customercareLabel,
//                     fill: true,
//                     backgroundColor: colors.purple.fill,
//                     data: this.props.unavailable,
//                     borderWidth: 0,
//                     borderColor: '#ffffff',
//                     pointRadius: 0,

//                 }, {
//                     label: this.props.socialcareLabel,
//                     fill: true,
//                     backgroundColor: colors.darkBlue.fill,
//                     data: this.props.availableForExisting,
//                     borderWidth: 0,
//                     borderColor: '#ffffff',
//                     pointRadius: 0,
//                 }, {
//                     label: this.props.NetworkLabel,
//                     fill: true,
//                     backgroundColor: colors.green.fill,
//                     data: this.props.available,
//                     borderWidth: 0,
//                     borderColor: '#ffffff',
//                     pointRadius: 0,
//                 }, {
//                     label: this.props.allLabel,
//                     fill: true,
//                     backgroundColor: colors.lightBlue.fill,
//                     pointRadius: 0,
//                     borderWidth: 0,
//                     borderColor: '#ffffff',
//                     data: this.props.loggedIn,
//                 }]
//             },
//             options: {
//                 responsive: false,
//                 // Can't just just `stacked: true` like the docs say
//                 scales: {
//                     xAxes: [{
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Last 6 Months'
//                         }
//                     }],
//                     yAxes: [{
//                         // stacked: true,
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Sentiment Score'
//                         }
//                     }]
//                 },
//                 animation: {
//                     duration: 750,
//                 },
//                 legend: {
//                     position: 'bottom'
//                 },
//                 plugins: {
//                     filler: {
//                         propagate: true

//                     }
//                 }
//             }
//         });

//     }


//     render() {

//         return (

//             <Segment>
//                 <h3><b>Sentiment Score</b></h3>
//                 <canvas
//                     ref={this.chartRef2}
//                     width={"600%"}
//                     height={"300vh"}
//                 />
//             </Segment>

//         )
//     }
// }



// export default SentimentScore;