export const CHURN_TAB_GRAPH_LABLES = ["Jan", "Feb", "March", "Apr", "May", "June"];
export function churnTabGraphDataset(graphData) {
    return ([{
        fill: false,
        // pointBackgroundColor: ['red', 'green', 'green', 'red', 'green', 'red', 'green',],
        // pointBorderColor: ['red', 'green', 'green', 'red', 'green', 'red', 'green',],
        // pointRadius: 3,
        // showLine: true,
        // borderDash: [0],
        // lineTension: 0.4,
        // borderWidth: 40,
        data: graphData,
        borderColor: [
            'red',
        ],
        // borderWidth: 2
    },
    {
        // data: [2, , , , , ,],
        pointHitRadius: 0,
        pointRadius: 0,
        fill: false,
        borderWidth: 0,
        borderColor: 'red',
        pointRadius: 1,
        pointHitRadius: 30,
        label: "Reduce Data Usage",
    },
    {
        data: [, 3, , , , ,],
        pointHitRadius: 0,
        pointRadius: 0,
        fill: false,
        borderWidth: 0,
        // borderColor: 'green',
        pointRadius: 1,
        pointHitRadius: 30,
        label: "Service Usage Topup",

    },
    {
        data: [, , 3.2, , , ,],
        pointHitRadius: 0,
        pointRadius: 0,
        fill: false,
        borderWidth: 0,
        borderColor: 'green',
        pointRadius: 1,
        pointHitRadius: 30,
        label: "Customer Journey",
    }, {
        data: [, , , 1.8, , ,],
        pointHitRadius: 0,
        pointRadius: 0,
        fill: false,
        borderWidth: 0,
        borderColor: 'red',
        pointRadius: 1,
        pointHitRadius: 30,
        label: " No Interaction",
    }, {
        data: [, , , , 3, ,],
        pointHitRadius: 0,
        pointRadius: 0,
        fill: false,
        borderWidth: 0,
        borderColor: 'green',
        pointRadius: 1,
        pointHitRadius: 30,
        label: "Upgraded",
    }, {
        data: [, , , , , 2.1,],
        pointHitRadius: 0,
        pointRadius: 0,
        fill: false,
        borderWidth: 0,
        borderColor: 'red',
        pointRadius: 1,
        pointHitRadius: 30,
        label: "Bad Network",
    }, {
        data: [, , , , , , 3],
        pointHitRadius: 0,
        pointRadius: 0,
        fill: false,
        borderWidth: 0,
        borderColor: 'green',
        pointRadius: 1,
        pointHitRadius: 30,
        label: "Service Feedback",
    },
    ]);
}
export const CHURN_TAB_GRAPH_OPTIONS = {
    responsive: true,
    angleLines: {
        borderDash: [5, 15],
        lineWidth: 20,
    },

    legend:
    {
        display: false,

    },

    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                display: false,
                // borderDash: [8, 4],
                // color: "gray"
            },
            ticks: {
                min: 0
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                display: true
            },
            ticks: {
                min: 0,
                stepSize: 10,
                max: 10
            }
        }]
    },
    bezierCurve: false,
    showArrow: false
}
// Churn tab grapg data ends


// Clv tab grapg data starts
export const CLV_TAB_GRAPH_LABLES = ["Jan", "Feb", "March", "Apr", "May", "June"];
export function clvTabGraphDataset(graphData) {
    return ([{
        fill: true,
        pointBackgroundColor: "white",
        pointBorderColor: "#019CDB",
        pointRadius: 5,
        showLine: true,
        lineTension: 0.4,
        borderWidth: 40,
        data: graphData,
        backgroundColor: [
        ],
        borderColor: [
            '#019CDB',
        ],
        borderWidth: 2
    },
    // {
    //     data: [10, 20, 30, 35, 40, 45, 50],
    //     pointHitRadius: 0,
    //     pointRadius: 0,
    //     fill: false,
    //     borderWidth: 0,
    //     borderColor: 'red',
    //     pointRadius: 0,
    //     pointHitRadius: 30,
    //     label: "LVC",
    // },
    // {
    //     data: [40, 20, 10, 35, 50, 15, 25],
    //     pointHitRadius: 0,
    //     pointRadius: 0,
    //     fill: false,
    //     borderWidth: 0,
    //     label: "MVC",
    //     borderColor: 'rgb(110, 209, 110',

    //     pointRadius: 0,
    //     pointHitRadius: 30,
    // },
    // {
    //     data: [10, 20, 30, 35, 40, 45, 50],
    //     pointHitRadius: 0,
    //     pointRadius: 0,
    //     fill: false,
    //     borderWidth: 0,
    //     borderColor: 'rgb(182, 182, 9)',
    //     label: "MVC",

    //     pointRadius: 0,
    //     pointHitRadius: 30,
    // }

    ]);
}
export const CLV_TAB_GRAPH_OPTIONS = {
    responsive: true,
    angleLines: {
        borderDash: [5, 15],
        lineWidth: 20,
    },
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                borderDash: [8, 4],
                color: "gray"
            },
            ticks: {
                min: 0
            }
        }],
        yAxes: [{
            gridLines: {
                display: true
            },
            ticks: {
                min: 160,
                stepSize: 10,
                max: 200
            }
        }]
    },
    bezierCurve: false,
    showArrow: false
}
// Clv tab grapg data ends

// Nps tab grapg data starts
export const NPS_TAB_GRAPH_LABLES = ["Jan", "Feb", "March", "Apr", "May", "June"];
export function npsTabGraphDataset(graphData) {
    return ([{
        fill: false,
        // pointBackgroundColor: "white",
        // pointBorderColor: "#019CDB",
        // pointRadius: 5,
        showLine: true,
        lineTension: 0.4,
        borderWidth: 40,
        data: graphData,
        backgroundColor: [
            '#EDF8FC',
        ],
        borderColor: [
            '#019CDB',
        ],
        borderWidth: 2
    }
    ]);
}
export const NPS_TAB_GRAPH_OPTIONS = {
    responsive: true,
    angleLines: {
        borderDash: [5, 15],
        lineWidth: 20,

    },
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                // borderDash: [8, 4],
                // color: "gray"
            },
            ticks: {
                min: 0
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                display: true
            },
            ticks: {
                min: 0,
                stepSize: 10,
                max: 10
            }
        }]
    },
    bezierCurve: false,
    showArrow: false

}
// Nps tab grapg data ends

// Rev tab grapg data starts
export const REV_TAB_GRAPH_LABLES = ["Jan", "Feb", "March", "Apr", "May", "June"];
export function revTabGraphDataset(graphData) {
    return ([{
        fill: true,
        pointBackgroundColor: "white",
        pointBorderColor: "#019CDB",
        pointRadius: 0,
        showLine: true,
        lineTension: 0.4,
        borderWidth: 0,
        data: graphData,
        backgroundColor: [
            '#EDF8FC',
        ],
        borderColor: [
            '#019CDB',
        ],
        borderWidth: 2,
    }
    ]);
}
export const REV_TAB_GRAPH_OPTIONS = {
    responsive: true,
    angleLines: {
        borderDash: [5, 15],
        lineWidth: 20,
    },
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                borderDash: [8, 4],
                color: "gray"
            },
            ticks: {
                min: 0
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                display: true
            },
            ticks: {
                min: 30,
                stepSize: 10,
                max: 70
            }
        }
        ]
    },
    bezierCurve: false,
    showArrow: false
}



// bandwidth graph

export const BANDWIDTH_GRAPH_LABLES = ["", "", "", "", "", "", ""];
export function bandwidthGraphDataset(graphData) {
    return ([{
        fill: true,
        pointBackgroundColor: "white",
        pointBorderColor: "#019CDB",
        pointRadius: 5,
        label: "Stock A",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(225,0,0,0.4)",
        borderColor: "red", // The main line color
        borderCapStyle: 'square',
        borderDash: [], // try [5, 15] for instance
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#39CB7A",
        pointBackgroundColor: "#39CB7A",
        pointBorderWidth: 1,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        spanGaps: true,
        data: graphData,
        lineTension: 0.1,
        backgroundColor: [
        ],
        borderColor: [
            '#39CB7A',
        ],
        borderWidth: 2
    
   
    }]);
}
export const BANDWIDTH_GRAPH_LABLES_OPTIONS = {
    responsive: true,
    angleLines: {
        // borderDash: [5, 10],
        lineWidth: 10,
    },
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                // borderDash: [8, 4],
                // color: "gray"
            },
            // ticks: {
            //     min: 0
            // }
        }],
        yAxes: [{
            gridLines: {
                display: true
            },
            ticks: {
                min: 100,
                stepSize: 50,
                max: 150,
                callback: function(stepSize, index, values) {
                    return stepSize + " Mbps";
                }
            }
        }
    ]
    },
    // bezierCurve: false,
    // showArrow: false
}

//outage graph
export const OUTAGE_GRAPH_LABLES = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
export function outageGraphDataset(graphData) {
    return ([{
        fill: true,
        pointBackgroundColor: "white",
        pointBorderColor: "#019CDB",
        pointRadius: 5,
        label: "Stock A",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#F7F7F7",
        borderColor: "red", // The main line color
        borderCapStyle: 'square',
        borderDash: [5, 15], // try [5, 15] for instance
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#F7F7F7",
        pointBackgroundColor: "#39CB7A",
        pointBorderWidth: 1,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        spanGaps: true,
        data: graphData,
        lineTension: 0.1,
        backgroundColor: [
        ],
        borderColor: [
            '#F7F7F7',
        ],
        borderWidth: 2
    
   
    }]);
}
export const OUTAGE_GRAPH_LABLES_OPTIONS = {
    responsive: true,
    angleLines: {
        // borderDash: [5, 10],
        lineWidth: 10,
    },
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                // borderDash: [8, 4],
                // color: "gray"
            },
            ticks: {
                min: 0
            }
        }],
        yAxes: [{
            gridLines: {
                display: true
            },
            ticks: {
                display: false,
                min: 100,
                stepSize: 50,
                max: 150
            },
            scaleLabel: {
                display: true,
                labelString: "Service Status",
                fontColor: "gray"
              }
        }
    ]
    },
    // bezierCurve: false,
    // showArrow: false
}