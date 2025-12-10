import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import url from '../../constants/urlConstants';

export function* getPredictionChartData(payload) {
    let customerId = payload.userId.customerId
    let accountId = payload.userId.accountId
    const predictionChart = yield fetch(`${url.graphs_1}${customerId}`).then(response => response.json());
    console.log(predictionChart)

    var predictionChartObject = {}
    let clvData = []
    let clvData1 = []
    let revData = []
    let revData1 = []
    let npsData = []
    let npsData1 = []
    let churnData = []
    let churnData1 = []

    for (let i = 0; i < predictionChart.graphData.length; i++) {
        if (predictionChart.graphData[i].graphType === 'rev') {
            revData.push(predictionChart.graphData[i])
            for (let j = 0; j < revData[0].graphValue.length; j++) {
                revData1.push(revData[0].graphValue[j].graphValue)
            }
        }
        if (predictionChart.graphData[i].graphType === 'clv') {
            clvData.push(predictionChart.graphData[i])
            for (let j = 0; j < clvData[0].graphValue.length; j++) {
                clvData1.push(clvData[0].graphValue[j].graphValue)
            }
        }
        if (predictionChart.graphData[i].graphType === 'nps') {
            npsData.push(predictionChart.graphData[i])
            for (let j = 0; j < npsData[0].graphValue.length; j++) {
                npsData1.push(npsData[0].graphValue[j].graphValue)
            }
        }
        if (predictionChart.graphData[i].graphType === 'churn') {
            churnData.push(predictionChart.graphData[i])
            for (let j = 0; j < churnData[0].graphValue.length; j++) {
                churnData1.push(churnData[0].graphValue[j].graphValue)
            }
        }
    }




    let predictionChartData1 = {
        customerData: {
            graph: [
                {
                    timeline: "pastyear",
                    churn: {
                        tab: churnData[0].graphType,
                        churnreasons: churnData[0].reasons,
                        churngraph: churnData1
                    },
                    clv: {
                        tab: clvData[0].graphType,
                        clvreasons: clvData[0].reasons,
                        clvgraph: clvData1

                    },
                    rev: {
                        tab: revData[0].graphType,
                        revreasons: revData[0].reasons,
                        revgraph: revData1
                    },
                    nps: {
                        tab: npsData[0].graphType,
                        npsreasons: npsData[0].reasons,
                        npsgraph: npsData1
                    }
                }
            ]
        }
    }

    predictionChartObject = predictionChartData1

    yield put({
        type: ActionTypes.GET_PREDICTION_CHART_DATA_RES,
        predictionChartDashboard: predictionChartObject,

    });

}

/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_PREDICTION_CHART_DATA_REQ, getPredictionChartData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_PREDICTION_CHART_DATA_REQ, getPredictionChartData)]);
}