import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import ConsumptionData from '../../mock/Consumption.json';
import DataAnalyticsData from '../../mock/DataAnalytics.json';
import url from '../../constants/urlConstants';

export function* getChartData(payload) {
    console.log(payload)
    let customerId = payload.userId.customerId
    var ChartData = {
        voiceData: {},
        contentData: {},
        dataAnalytics: {},
        consumptionData: {},
        bandwidthData: {}
    }


    //voice analytics
    const voiceAnalyticsData = yield fetch(`${url.connects}${customerId}`).then(response => response.json());
    console.log(voiceAnalyticsData)
    let dataForPastWeek = []
    let dataForPastMonth = []

    let domesticFirstWeek = []
    let inetrnationalFirstWeek = []
    let roamingFirstWeek = []

    let domesticSecondWeek = []
    let inetrnationalSecondWeek = []
    let roamingSecondWeek = []

    let domesticThirdWeek = []
    let inetrnationalThirdWeek = []
    let roamingThirdWeek = []

    let domesticFourthWeek = []
    let inetrnationalFourthWeek = []
    let roamingFourthWeek = []


    //last week
    let domesticFirstDay = []
    let inetrnationalFirstDay = []
    let roamingFirstDay = []

    let domesticSecondDay = []
    let inetrnationalSecondDay = []
    let roamingSecondDay = []

    let domesticThirdDay = []
    let inetrnationalThirdDay = []
    let roamingThirdDay = []

    let domesticFourthDay = []
    let inetrnationalFourtDay = []
    let roamingFourthDay = []

    let domesticFifthDay = []
    let inetrnationalFifthDay = []
    let roamingFifthDay = []

    let domesticSixthDay = []
    let inetrnationalSixthDay = []
    let roamingSixthDay = []

    let domesticSeventhDay = []
    let inetrnationalSeventhDay = []
    let roamingSeventhDay = []

    for (let i = 0; i < voiceAnalyticsData.length; i++) {
        if ((new Date(voiceAnalyticsData[i].callStartTime) <= new Date("2021-02-07")) && (new Date(voiceAnalyticsData[i].callStartTime) >= new Date("2021-02-01"))) {
            dataForPastWeek.push(voiceAnalyticsData[i]);

        }
        if ((new Date(voiceAnalyticsData[i].callStartTime) <= new Date("2021-02-28")) && (new Date(voiceAnalyticsData[i].callStartTime) >= new Date("2021-02-01"))) {
            dataForPastMonth.push(voiceAnalyticsData[i]);
        }

    }

    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Domestic") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-02")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-01"))) {
            domesticFirstDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "International") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-02")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-01"))) {
            inetrnationalFirstDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Roaming") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-02")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-01"))) {
            roamingFirstDay.push(dataForPastWeek[i])
        }
    }

    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Domestic") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-03")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-02"))) {
            domesticSecondDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "International") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-03")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-02"))) {
            inetrnationalSecondDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Roaming") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-03")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-02"))) {
            roamingSecondDay.push(dataForPastWeek[i])
        }
    }

    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Domestic") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-04")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-03"))) {
            domesticThirdDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "International") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-04")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-03"))) {
            inetrnationalThirdDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Roaming") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-04")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-03"))) {
            roamingThirdDay.push(dataForPastWeek[i])
        }
    }

    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Domestic") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-05")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-04"))) {
            domesticFourthDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "International") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-05")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-04"))) {
            inetrnationalFourtDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Roaming") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-05")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-04"))) {
            roamingFourthDay.push(dataForPastWeek[i])
        }
    }

    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Domestic") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-06")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-05"))) {
            domesticFifthDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "International") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-06")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-05"))) {
            inetrnationalFifthDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Roaming") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-06")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-05"))) {
            roamingFifthDay.push(dataForPastWeek[i])
        }
    }

    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Domestic") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-07")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-06"))) {
            domesticSixthDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "International") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-07")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-06"))) {
            inetrnationalSixthDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Roaming") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-07")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-06"))) {
            roamingSixthDay.push(dataForPastWeek[i])
        }
    }

    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Domestic") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-08")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-07"))) {
            domesticSeventhDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "International") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-08")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-07"))) {
            inetrnationalSeventhDay.push(dataForPastWeek[i])
        }
    }
    for (let i = 0; i < dataForPastWeek.length; i++) {
        if ((dataForPastWeek[i].typeofcall == "Roaming") && (new Date(dataForPastWeek[i].callStartTime) < new Date("2021-02-08")) && (new Date(dataForPastWeek[i].callStartTime) >= new Date("2021-02-07"))) {
            roamingSeventhDay.push(dataForPastWeek[i])
        }
    }

    // for month
    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "Domestic") && (new Date(dataForPastMonth[i].callStartTime) <= new Date("2021-02-07")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-01"))) {
            domesticFirstWeek.push(dataForPastMonth[i])
        }
    }
    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "International") && (new Date(dataForPastMonth[i].callStartTime) < new Date("2021-02-08")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-01"))) {
            inetrnationalFirstWeek.push(dataForPastMonth[i])
        }
    }
    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "Roaming") && (new Date(dataForPastMonth[i].callStartTime) < new Date("2021-02-08")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-01"))) {
            roamingFirstWeek.push(dataForPastMonth[i])
        }
    }


    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "Domestic") && (new Date(dataForPastMonth[i].callStartTime) <= new Date("2021-02-14")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-07"))) {
            domesticSecondWeek.push(dataForPastMonth[i])
        }
    }
    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "International") && (new Date(dataForPastMonth[i].callStartTime) < new Date("2021-02-15")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-07"))) {
            inetrnationalSecondWeek.push(dataForPastMonth[i])
        }
    }
    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "Roaming") && (new Date(dataForPastMonth[i].callStartTime) < new Date("2021-02-15")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-07"))) {
            roamingSecondWeek.push(dataForPastMonth[i])
        }
    }


    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "Domestic") && (new Date(dataForPastMonth[i].callStartTime) <= new Date("2021-02-21")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-14"))) {
            domesticThirdWeek.push(dataForPastMonth[i])
            console.log()
        }
    }
    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "International") && (new Date(dataForPastMonth[i].callStartTime) < new Date("2021-02-22")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-14"))) {
            inetrnationalThirdWeek.push(dataForPastMonth[i])
        }
    }
    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "Roaming") && (new Date(dataForPastMonth[i].callStartTime) < new Date("2021-02-22")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-14"))) {
            roamingThirdWeek.push(dataForPastMonth[i])
        }
    }


    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "Domestic") && (new Date(dataForPastMonth[i].callStartTime) <= new Date("2021-02-28")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-21"))) {
            domesticFourthWeek.push(dataForPastMonth[i])
        }
    }
    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "International") && (new Date(dataForPastMonth[i].callStartTime) < new Date("2021-02-29")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-21"))) {
            inetrnationalFourthWeek.push(dataForPastMonth[i])
        }
    }
    for (let i = 0; i < dataForPastMonth.length; i++) {
        if ((dataForPastMonth[i].typeofcall == "Roaming") && (new Date(dataForPastMonth[i].callStartTime) < new Date("2021-02-29")) && (new Date(dataForPastMonth[i].callStartTime) >= new Date("2021-02-21"))) {
            roamingFourthWeek.push(dataForPastMonth[i])
        }
    }

    let domesticCalls = dataForPastWeek.filter((item) => {
        return item.typeofcall == "Domestic"
    })
    let internationalCall = dataForPastWeek.filter((item) => {
        return item.typeofcall == "International"
    })
    let roamingCall = dataForPastWeek.filter((item) => {
        return item.typeofcall == "Roaming"
    })

    let domesticCallsMonth = dataForPastMonth.filter((item) => {
        return item.typeofcall == "Domestic"
    })
    let internationalCallMonth = dataForPastMonth.filter((item) => {
        return item.typeofcall == "International"
    })
    let roamingCallMonth = dataForPastMonth.filter((item) => {
        return item.typeofcall == "Roaming"
    })

    let voiceData = {
        customerData: {
            channelText: "VOICE ANALYTICS",
            adds: "Active Worldwide Roaming for just £22 per month",
            graph: [
                {
                    timeline: "Past Week",
                    channel: {
                        Data: [
                            {
                                Value: domesticCalls.length + " " + "Min",
                                text: "Domestc Calls"
                            },
                            {
                                Value: internationalCall.length + " " + "Min",
                                text: "International Calls"
                            },
                            {
                                Value: roamingCall.length + " " + "Min",
                                text: "Roaming Calls"
                            }
                        ],
                        data: [
                            domesticFirstDay.length,
                            domesticSecondDay.length,
                            domesticThirdDay.length,
                            domesticFourthDay.length,
                            domesticFifthDay.length,
                            domesticSixthDay.length,
                            domesticSeventhDay.length
                        ],
                        data1: [
                            inetrnationalFirstDay.length,
                            inetrnationalSecondDay.length,
                            inetrnationalThirdDay.length,
                            inetrnationalFourtDay.length,
                            inetrnationalFifthDay.length,
                            inetrnationalSixthDay.length,
                            inetrnationalSeventhDay.length
                        ],
                        data2: [
                            roamingFirstDay.length,
                            roamingSecondDay.length,
                            roamingThirdDay.length,
                            roamingFourthDay.length,
                            roamingFifthDay.length,
                            roamingSixthDay.length,
                            roamingSeventhDay.length
                        ]
                    }
                },
                {
                    timeline: "Past Month",
                    channel: {
                        Data: [
                            {
                                "Value": domesticCallsMonth.length + " " + "Min",
                                "text": "Domestc Calls"
                            },
                            {
                                "Value": internationalCallMonth.length+ " " + "Min",
                                "text": "International Calls"
                            },
                            {
                                "Value": roamingCallMonth.length+ " " + "Min",
                                "text": "Roaming Calls"
                            }
                        ],
                        "data": [
                            domesticFirstWeek.length,
                            domesticSecondWeek.length,
                            domesticThirdWeek.length,
                            domesticFourthWeek.length,
                        ],
                        "data1": [
                            inetrnationalFirstWeek.length-1,
                            inetrnationalSecondWeek.length,
                            inetrnationalThirdWeek.length,
                            inetrnationalFourthWeek.length,
                            0
                        ],
                        "data2": [
                            roamingFirstWeek.length-1,
                            roamingSecondWeek.length,
                            roamingThirdWeek.length,
                            roamingFourthWeek.length,
                            0
                        ]
                    }
                }
            ]
        }
    }

    ChartData.voiceData = voiceData








    // content data

    // const contentData = yield fetch(`http://localhost:7214/customerAnalytics/analytics/content-analytics/content-activity/${customerId}`).then(response => response.json());
    const contentData = yield fetch(`${url.contentData}${customerId}`).then(response => response.json());
    console.log(contentData)


    //last week
    let contentSportsFirstDay = []
    let contentEducationFirstDay = []
    let contentEntertainmentFirstDay = []

    let contentSportsSecondDay = []
    let contentEducationSecondDay = []
    let contentEntertainmentSecondDay = []

    let contentSportsThirdDay = []
    let contentEducationThirdDay = []
    let contentEntertainmentThirdDay = []

    let contentSportsFourthDay = []
    let contentEducationFourtDay = []
    let contentEntertainmentFourthDay = []

    let contentSportsFifthDay = []
    let contentEducationFifthDay = []
    let contentEntertainmentFifthDay = []

    let contentSportsSixthDay = []
    let contentEducationSixthDay = []
    let contentEntertainmentSixthDay = []

    let contentSportsSeventhDay = []
    let contentEducationSeventhDay = []
    let contentEntertainmentSeventhDay = []



    let dataForPastMonth1 = []

    let contentDataForPastWeek = []
    for (let i = 0; i < contentData.length; i++) {
        if ((new Date(contentData[i].startTimeofViewing) <= new Date("2021-01-27")) && (new Date(contentData[i].startTimeofViewing) >= new Date("2021-01-21"))) {
            contentDataForPastWeek.push(contentData[i]);
        }
        if ((new Date(contentData[i].startTimeofViewing) <= new Date("2021-01-28")) && (new Date(contentData[i].startTimeofViewing) >= new Date("2021-01-01"))) {
            dataForPastMonth1.push(contentData[i]);
            console.log(dataForPastMonth1)
        }

    }

    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Sports") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-22")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-21"))) {
            contentSportsFirstDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Education") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-22")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-21"))) {
            contentEducationFirstDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Entertainment") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-22")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-21"))) {
            contentEntertainmentFirstDay.push(contentDataForPastWeek[i])
            console.log(contentEntertainmentFirstDay.length)
        }
    }

    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Sports") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-23")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-22"))) {
            contentSportsSecondDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Education") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-23")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-22"))) {
            contentEducationSecondDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Entertainment") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-23")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-22"))) {
            contentEntertainmentSecondDay.push(contentDataForPastWeek[i])
        }
    }

    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Sports") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-24")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-23"))) {
            contentSportsThirdDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Education") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-24")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-23"))) {
            contentEducationThirdDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Entertainment") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-24")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-23"))) {
            contentEntertainmentThirdDay.push(contentDataForPastWeek[i])
        }
    }

    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Sports") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-25")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-24"))) {
            contentSportsFourthDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Education") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-25")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-24"))) {
            contentEducationFourtDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Entertainment") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-25")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-24"))) {
            contentEntertainmentFourthDay.push(contentDataForPastWeek[i])
            console.log(contentEntertainmentFourthDay.length)

        }
    }

    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Sports") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-26")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-25"))) {
            contentSportsFifthDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Education") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-26")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-25"))) {
            contentEducationFifthDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Entertainment") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-26")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-25"))) {
            contentEntertainmentFifthDay.push(contentDataForPastWeek[i])
        }
    }

    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Sports") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-27")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-26"))) {
            contentSportsSixthDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Education") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-27")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-26"))) {
            contentEducationSixthDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Entertainment") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-27")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-26"))) {
            contentEntertainmentSixthDay.push(contentDataForPastWeek[i])
        }
    }

    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Sports") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-28")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-27"))) {
            contentSportsSeventhDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Education") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-28")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-27"))) {
            contentEducationSeventhDay.push(contentDataForPastWeek[i])
        }
    }
    for (let i = 0; i < contentDataForPastWeek.length; i++) {
        if ((contentDataForPastWeek[i].typeofShow == "Entertainment") && (new Date(contentDataForPastWeek[i].startTimeofViewing) < new Date("2021-01-28")) && (new Date(contentDataForPastWeek[i].startTimeofViewing) >= new Date("2021-01-27"))) {
            contentEntertainmentSeventhDay.push(contentDataForPastWeek[i])
            console.log(contentEntertainmentSeventhDay.length)

        }
    }


    let contentSportsFirstWeek = []
    let contentEducationFirstWeek = []
    let contentEntertainmentFirstWeek = []

    let contentSportsSecondWeek = []
    let contentEducationSecondWeek = []
    let contentEntertainmentSecondWeek = []

    let contentSportsThirdWeek = []
    let contentEducationThirdWeek = []
    let contentEntertainmentThirdWeek = []

    let contentSportsFourthWeek = []
    let contentEducationFourthWeek = []
    let contentEntertainmentFourthWeek = []


    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Sports") && (new Date(dataForPastMonth1[i].startTimeofViewing) <= new Date("2021-01-07")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-01"))) {
            contentSportsFirstWeek.push(dataForPastMonth1[i])
        }
    }
    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Education") && (new Date(dataForPastMonth1[i].startTimeofViewing) < new Date("2021-01-08")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-01"))) {
            contentEducationFirstWeek.push(dataForPastMonth1[i])
        }
    }
    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Entertainment") && (new Date(dataForPastMonth1[i].startTimeofViewing) < new Date("2021-01-08")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-01"))) {
            contentEntertainmentFirstWeek.push(dataForPastMonth1[i])
        }
    }


    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Sports") && (new Date(dataForPastMonth1[i].startTimeofViewing) <= new Date("2021-01-14")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-07"))) {
            contentSportsSecondWeek.push(dataForPastMonth1[i])
        }
    }
    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Education") && (new Date(dataForPastMonth1[i].startTimeofViewing) < new Date("2021-01-15")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-07"))) {
            contentEducationSecondWeek.push(dataForPastMonth1[i])
        }
    }
    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Entertainment") && (new Date(dataForPastMonth1[i].startTimeofViewing) < new Date("2021-01-15")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-07"))) {
            contentEntertainmentSecondWeek.push(dataForPastMonth1[i])
        }
    }


    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Sports") && (new Date(dataForPastMonth1[i].startTimeofViewing) <= new Date("2021-01-21")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-14"))) {
            contentSportsThirdWeek.push(dataForPastMonth1[i])
        }
    }
    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Education") && (new Date(dataForPastMonth1[i].startTimeofViewing) < new Date("2021-01-22")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-14"))) {
            contentEducationThirdWeek.push(dataForPastMonth1[i])
        }
    }
    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Entertainment") && (new Date(dataForPastMonth1[i].startTimeofViewing) < new Date("2021-01-22")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-14"))) {
            contentEntertainmentThirdWeek.push(dataForPastMonth1[i])
        }
    }


    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Sports") && (new Date(dataForPastMonth1[i].startTimeofViewing) <= new Date("2021-01-28")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-21"))) {
            contentSportsFourthWeek.push(dataForPastMonth1[i])
        }
    }
    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Education") && (new Date(dataForPastMonth1[i].startTimeofViewing) < new Date("2021-01-29")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-21"))) {
            contentEducationFourthWeek.push(dataForPastMonth1[i])
        }
    }
    for (let i = 0; i < dataForPastMonth1.length; i++) {
        if ((dataForPastMonth1[i].typeofShow == "Entertainment") && (new Date(dataForPastMonth1[i].startTimeofViewing) < new Date("2021-01-29")) && (new Date(dataForPastMonth1[i].startTimeofViewing) >= new Date("2021-01-21"))) {
            contentEntertainmentFourthWeek.push(dataForPastMonth1[i])
        }
    }




    let domesticCallsMonth1 = dataForPastMonth1.filter((item) => {
        return item.typeofShow == "Sports"
    })
    let internationalCallMonth1 = dataForPastMonth1.filter((item) => {
        return item.typeofShow == "Education"
    })
    let roamingCallMonth1 = dataForPastMonth1.filter((item) => {
        return item.typeofShow == "Entertainment"
    })




    let sportsDataWeek = contentDataForPastWeek.filter((item) => {
        return item.typeofShow == "Sports"
    })
    let educationDataWeek = contentDataForPastWeek.filter((item) => {
        return item.typeofShow == "Education"
    })
    let entertainmentDataWeek = contentDataForPastWeek.filter((item) => {
        return item.typeofShow == "Entertainment"
    })


    let contentData1 = {
        customerData: {
            channelText: "CONTENT ANALYTICS",
            adds: "Activate sports+package at just £10 per month ",
            graph: [
                {
                    timeline: "Past Week",
                    channel: {
                        Data: [
                            {
                                "Value": sportsDataWeek.length + " " + "Hours",
                                "text": "Sports"
                            },
                            {
                                "Value": educationDataWeek.length + " " + "Hours",
                                "text": "Education"
                            },
                            {
                                "Value": entertainmentDataWeek.length + " " + "Hours",
                                "text": "Entertainment"
                            }
                        ],
                        "data": [
                            contentSportsFirstDay.length,
                            contentSportsSecondDay.length,
                            contentSportsThirdDay.length,
                            contentSportsFourthDay.length,
                            contentSportsFifthDay.length,
                            contentSportsSixthDay.length,
                            contentSportsSeventhDay.length
                        ],
                        "data1": [
                            contentEducationFirstDay.length,
                            contentEducationSecondDay.length,
                            contentEducationThirdDay.length,
                            contentEducationFourtDay.length,
                            contentEducationFifthDay.length,
                            contentEducationSixthDay.length,
                            contentEducationSeventhDay.length
                        ],
                        "data2": [
                            contentEntertainmentFirstDay.length,
                            contentEntertainmentSecondDay.length,
                            contentEntertainmentThirdDay.length,
                            contentEntertainmentFourthDay.length,
                            contentEntertainmentFifthDay.length,
                            contentEntertainmentSixthDay.length,
                            contentEntertainmentSeventhDay.length,
                        ]
                    }
                },
                {
                    timeline: "Past Month",
                    channel: {
                        Data: [
                            {
                                Value: domesticCallsMonth1.length + " " + "Hours",
                                text: "Sports"
                            },
                            {
                                Value: internationalCallMonth1.length + " " + "Hours",
                                text: "Education"
                            },
                            {
                                Value: roamingCallMonth1.length + " " + "Hours",
                                text: "Entertainment"
                            }
                        ],
                        data: [
                            contentSportsFirstWeek.length,
                            contentSportsSecondWeek.length,
                            contentSportsThirdWeek.length,
                            contentSportsFourthWeek.length,
                            0
                        ],
                        data1: [
                            contentEducationFirstWeek.length-1,
                            contentEducationSecondWeek.length,
                            contentEducationThirdWeek.length,
                            contentEducationFourthWeek.length,
                            0
                        ],
                        data2: [
                            contentEntertainmentFirstWeek.length-1,
                            contentEntertainmentSecondWeek.length,
                            contentEntertainmentThirdWeek.length,
                            contentEntertainmentFourthWeek.length,
                            0
                        ]
                    }
                }
            ]
        }
    }
    ChartData.contentData = contentData1;






    // Data Analytics
    // const dataAnalytics = yield fetch(`http://localhost:7214/customerAnalytics/analytics/data-analytics/data-consumption/${customerId}`).then(response => response.json());
    const dataAnalytics = yield fetch(`${url.dataAnalytics}${customerId}`).then(response => response.json());
    console.log(dataAnalytics)

    let dataAnalyticsForPastWeek = []
    let dataAnalyticsForPastMonth = []

    let AppsFirstWeek = []
    let StreamingFirstWeek = []
    let RoamingFirstWeek = []

    let AppsSecondWeek = []
    let StreamingSecondWeek = []
    let RoamingSecondWeek = []


    let AppsThirdWeek = []
    let StreamingThirdWeek = []
    let RoamingThirdWeek = []


    let AppsFourthWeek = []
    let StreamingFourthWeek = []
    let RoamingFourthWeek = []



    //last week
    let AppsFirstDay = []
    let StreamingFirstDay = []
    let RoamingFirstDay = []

    let AppsSecondDay = []
    let StreamingSecondDay = []
    let RoamingSecondDay = []

    let AppsThirdDay = []
    let StreamingThirdDay = []
    let RoamingThirdDay = []

    let AppsFourthDay = []
    let StreamingFourthDay = []
    let RoamingFourthDay = []

    let AppsFifthDay = []
    let StreamingFifthDay = []
    let RoamingFifthDay = []

    let AppsSixthDay = []
    let StreamingSixthDay = []
    let RoamingSixthDay = []

    let AppsSeventhDay = []
    let StreamingSeventhDay = []
    let RoamingSeventhDay = []

    for (let i = 0; i < dataAnalytics.length; i++) {

        if ((new Date(dataAnalytics[i].dateOfUse) <= new Date("2020-12-27")) && (new Date(dataAnalytics[i].dateOfUse) >= new Date("2020-12-21"))) {
            dataAnalyticsForPastWeek.push(dataAnalytics[i]);

        }
        if ((new Date(dataAnalytics[i].dateOfUse) <= new Date("2020-12-28")) && (new Date(dataAnalytics[i].dateOfUse) >= new Date("2020-12-01"))) {
            dataAnalyticsForPastMonth.push(dataAnalytics[i]);
        }

    }
    console.log(dataAnalyticsForPastWeek)
    console.log(dataAnalyticsForPastMonth)

    //month
    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-07")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-01"))) {
            StreamingFirstWeek.push(dataAnalyticsForPastMonth[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-07")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-01"))) {
            AppsFirstWeek.push(dataAnalyticsForPastMonth[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-07")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-01"))) {
            RoamingFirstWeek.push(dataAnalyticsForPastMonth[i])
        }
    }

    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-14")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-07"))) {
            StreamingSecondWeek.push(dataAnalyticsForPastMonth[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-14")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-07"))) {
            AppsSecondWeek.push(dataAnalyticsForPastMonth[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-14")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-07"))) {
            RoamingSecondWeek.push(dataAnalyticsForPastMonth[i])
        }
    }

    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-21")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-14"))) {
            AppsThirdWeek.push(dataAnalyticsForPastMonth[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-21")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-14"))) {
            StreamingThirdWeek.push(dataAnalyticsForPastMonth[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-21")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-14"))) {
            RoamingThirdWeek.push(dataAnalyticsForPastMonth[i])
        }
    }

    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-28")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-21"))) {
            AppsFourthWeek.push(dataAnalyticsForPastMonth[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-28")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-21"))) {
            StreamingFourthWeek.push(dataAnalyticsForPastMonth[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastMonth.length; i++) {
        if ((dataAnalyticsForPastMonth[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) <= new Date("2020-12-28")) && (new Date(dataAnalyticsForPastMonth[i].dateOfUse) >= new Date("2020-12-21"))) {
            RoamingFourthWeek.push(dataAnalyticsForPastMonth[i])
        }
    }


    //week

    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-22")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-21"))) {
            AppsFirstDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-22")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-21"))) {
            StreamingFirstDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-22")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-21"))) {
            RoamingFirstDay.push(dataAnalyticsForPastWeek[i])
        }
    }


    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-23")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-22"))) {
            AppsSecondDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-23")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-22"))) {
            StreamingSecondDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-23")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-22"))) {
            RoamingSecondDay.push(dataAnalyticsForPastWeek[i])
        }
    }

    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-24")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-23"))) {
            AppsThirdDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-24")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-23"))) {
            StreamingThirdDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-24")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-23"))) {
            RoamingThirdDay.push(dataAnalyticsForPastWeek[i])
        }
    }


    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-25")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-24"))) {
            AppsFourthDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-25")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-24"))) {
            StreamingFourthDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-25")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-24"))) {
            RoamingFourthDay.push(dataAnalyticsForPastWeek[i])
        }
    }

    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-26")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-25"))) {
            AppsFifthDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-26")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-25"))) {
            StreamingFifthDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-26")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-25"))) {
            RoamingFifthDay.push(dataAnalyticsForPastWeek[i])
        }
    }

    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-27")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-26"))) {
            AppsSixthDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-27")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-26"))) {
            StreamingSixthDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-27")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-26"))) {
            RoamingSixthDay.push(dataAnalyticsForPastWeek[i])
        }
    }

    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Apps") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-28")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-27"))) {
            AppsSeventhDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Streaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-28")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-27"))) {
            StreamingSeventhDay.push(dataAnalyticsForPastWeek[i])
        }
    }
    for (let i = 0; i < dataAnalyticsForPastWeek.length; i++) {
        if ((dataAnalyticsForPastWeek[i].typeofConsuption == "Roaming") && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) < new Date("2020-12-28")) && (new Date(dataAnalyticsForPastWeek[i].dateOfUse) >= new Date("2020-12-27"))) {
            RoamingSeventhDay.push(dataAnalyticsForPastWeek[i])
        }
    }


    //week
    let streamingDataWeek = dataAnalyticsForPastWeek.filter((item) => {
        return item.typeofConsuption == "Streaming"
    })
    let appsDataWeek = dataAnalyticsForPastWeek.filter((item) => {
        return item.typeofConsuption == "Apps"
    })
    let roamingDataWeek = dataAnalyticsForPastWeek.filter((item) => {
        return item.typeofConsuption == "Roaming"
    })
    let datareamingDataWeek = dataAnalyticsForPastWeek.filter((item) => {
        return item.typeofConsuption == "Data remaining this cycle"
    })


    //month
    let streamingDataMonth = dataAnalyticsForPastMonth.filter((item) => {
        return item.typeofConsuption == "Streaming"
    })
    let appsDataMonth = dataAnalyticsForPastMonth.filter((item) => {
        return item.typeofConsuption == "Apps"
    })
    let roamingDataMonth = dataAnalyticsForPastMonth.filter((item) => {
        return item.typeofConsuption == "Roaming"
    })
    let datareamingDataMonth = dataAnalyticsForPastMonth.filter((item) => {
        return item.typeofConsuption == "Data remaining this cycle"
    })



    // for (let k = 0; k < DataAnalyticsData.length; k++) {
    //     if (customerId == DataAnalyticsData[k].id) {
    //         ChartData.dataAnaltyicsData = DataAnalyticsData[k]
    //     }
    // }



    let dataAnalytics1 = {
        customerData: {
            channelText: "DATA ANALYTICS",
            adds: "Upgrade your data package to 10GB at just £12 per month",
            graph: [
                {
                    timeline: "Past Week",
                    channel: {
                        Data: [
                            {
                                Value: appsDataWeek.length + " " + "GB",
                                "text": "Apps"
                            },
                            {
                                Value: streamingDataWeek.length + " " + "GB",
                                "text": "Streaming"
                            },
                            {
                                Value: roamingDataWeek.length + " " + "GB",
                                "text": "Roaming"
                            },
                            {
                                Value: datareamingDataWeek.length + " " + "GB",
                                "text": "Data remaining this cycle"
                            }
                        ],
                        "data": [
                            AppsFirstDay.length,
                            AppsSecondDay.length,
                            AppsThirdDay.length,
                            AppsFourthDay.length,
                            AppsFifthDay.length,
                            AppsSixthDay.length,
                            AppsSeventhDay.length
                        ],
                        "data1": [
                            StreamingFirstDay.length,
                            StreamingSecondDay.length,
                            StreamingThirdDay.length,
                            StreamingFourthDay.length,
                            StreamingFifthDay.length,
                            StreamingSixthDay.length,
                            StreamingSeventhDay.length

                        ],
                        "data2": [
                            RoamingFirstDay.length,
                            RoamingSecondDay.length,
                            RoamingThirdDay.length,
                            RoamingFourthDay.length,
                            RoamingFifthDay.length,
                            RoamingSixthDay.length,
                            RoamingSeventhDay.length
                        ]

                    }
                },
                {
                    timeline: "Past Month",
                    channel: {
                        Data: [
                            {
                                Value: appsDataMonth.length + " " + "GB",
                                "text": "Apps"
                            },
                            {
                                Value: streamingDataMonth.length + " " + "GB",
                                "text": "Streaming"
                            },
                            {
                                Value: roamingDataMonth.length + " " + "GB",
                                "text": "Roaming"
                            },
                            {
                                Value: datareamingDataMonth.length + " " + "GB",
                                "text": "Data remaining this cycle"
                            }
                        ],
                        "data": [
                            AppsFirstWeek.length,
                            AppsSecondWeek.length,
                            AppsThirdWeek.length,
                            AppsFourthWeek.length
                        ],
                        "data1": [
                            StreamingFirstWeek.length,
                            StreamingSecondWeek.length,
                            StreamingThirdWeek.length,
                            StreamingFourthWeek.length
                        ],
                        "data2": [
                            RoamingFirstWeek.length,
                            RoamingSecondWeek.length,
                            RoamingThirdWeek.length,
                            RoamingFourthWeek.length
                        ],

                    }
                }
            ]
        }
    }
    ChartData.dataAnalytics = dataAnalytics1




    // Band width
    const bandWidthData = yield fetch(`${url.network}${customerId}`).then(response => response.json());
    let bandWidthDataForLastWeek = []
    let bandWidthDataForLastMonth = []

    console.log(bandWidthData)
    for (let i = 0; i < bandWidthData.length; i++) {
        if (new Date(bandWidthData[i].timestamp) <= new Date("2020-01-15") && new Date(bandWidthData[i].timestamp) >= new Date("2020-01-7")) {
            bandWidthDataForLastWeek.push(bandWidthData[i].bandwidth);
        }
        if (new Date(bandWidthData[i].timestamp) <= new Date("2020-01-30") && new Date(bandWidthData[i].timestamp) >= new Date("2019-12-01")) {
            bandWidthDataForLastMonth.push(bandWidthData[i].bandwidth);
        }

    }

    let bandWidthDataObject = {
        id: 1,
        customerData: {
            adds: "Auto firmware upgrade of your modem is scheduled for 23.30 hrs to night",
            graph: [
                {
                    timeline: "past Week",
                    bandwidthData: bandWidthDataForLastWeek,
                    outageData: [0, 0, 140]
                },
                {
                    timeline: "past Month",
                    bandwidthData: bandWidthDataForLastMonth,
                    outageData: [0, 0, 140, 0, 140]
                }
            ]
        }
    }
    ChartData.bandwidthData = bandWidthDataObject

    // for (let k = 0; k < ConsumptionData.length; k++) {
    //     if (customerId == ConsumptionData[k].id) {
    //         ChartData.consumptionData = ConsumptionData[k]
    //     }
    // }

    // for (let k = 0; k < BandwidthData.length; k++) {
    //     if (payload.userId == BandwidthData[k].id) {
    //         ChartData.bandwidthData = BandwidthData[k]
    //     }
    // }


    //consumption data
    const dataStreamingLocationForWeek = yield fetch(`${url.weeklyStreamingLocation}${customerId}`).then(response => response.json());
    const dataAppsLocationForWeek = yield fetch(`${url.weeklyAppsLocation}${customerId}`).then(response => response.json());
    const dataStreamingLocationForMonth = yield fetch(`${url.monthlyStreamingLocation}${customerId}`).then(response => response.json());
    const dataAppsLocationForMonth = yield fetch(`${url.monthlyAppsLocation}${customerId}`).then(response => response.json());

    let dataConsumption = {
        id: 1,
        customerData: {
            subHeading: "Consumption On Location",
            addNew: "Connect to wifi at home to conserve mobile data",
            graph: [
                {
                    timeline: "Past Week",
                    add: "Connect to wif",
                    Overall: [
                        {
                            heading: dataStreamingLocationForWeek.outAndAbout + dataAppsLocationForWeek.outAndAbout,
                            subHeading: "Out & About"
                        },
                        {
                            heading: dataStreamingLocationForWeek.home + dataAppsLocationForWeek.home,
                            subHeading: "Home"
                        },
                        {
                            heading: dataStreamingLocationForWeek.roaming + dataAppsLocationForWeek.roaming,
                            subHeading: "Roaming"
                        }
                    ],
                    Streaming: [
                        {
                            heading: dataStreamingLocationForWeek.outAndAbout,
                            subHeading: "Out & About"
                        },
                        {
                            heading: dataStreamingLocationForWeek.home,
                            subHeading: "Home"
                        },
                        {
                            heading: dataStreamingLocationForWeek.roaming,
                            subHeading: "Roaming"
                        }
                    ],

                    Apps: [
                        {
                            heading: dataAppsLocationForWeek.outAndAbout,
                            subHeading: "Out & About"
                        },
                        {
                            heading: dataAppsLocationForWeek.home,
                            subHeading: "Home"
                        },
                        {
                            heading: dataAppsLocationForWeek.roaming,
                            subHeading: "Roaming"
                        }
                    ]
                },
                {
                    timeline: "Past Month",
                    add: "Connect to wifi when at home to conserve your mobile data",
                    Overall: [
                        {
                            heading: dataStreamingLocationForMonth.outAndAbout + dataAppsLocationForMonth.outAndAbout,
                            subHeading: "Out & About"
                        },
                        {
                            heading: dataStreamingLocationForMonth.home + dataAppsLocationForMonth.home,
                            subHeading: "Home"
                        },
                        {
                            heading: dataStreamingLocationForMonth.roaming + dataAppsLocationForMonth.roaming,
                            subHeading: "Roaming"
                        }
                    ],
                    Streaming: [
                        {
                            heading: dataStreamingLocationForMonth.outAndAbout,
                            subHeading: "Out & About"
                        },
                        {
                            heading: dataStreamingLocationForMonth.home,
                            subHeading: "Home"
                        },
                        {
                            heading: dataStreamingLocationForMonth.roaming,
                            subHeading: "Roaming"
                        }
                    ],

                    Apps: [
                        {
                            heading: dataAppsLocationForMonth.outAndAbout,
                            subHeading: "Out & About"
                        },
                        {
                            heading: dataAppsLocationForMonth.home,
                            subHeading: "Home"
                        },
                        {
                            heading: dataAppsLocationForMonth.roaming,
                            subHeading: "Roaming"
                        }
                    ]
                }
            ]
        }
    }
    ChartData.consumptionData = dataConsumption


    yield put({
        type: ActionTypes.GET_CHART_DATA_RES,
        ChartData: ChartData
    });
}


/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_CHART_DATA_REQ, getChartData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_CHART_DATA_REQ, getChartData)]);
}
