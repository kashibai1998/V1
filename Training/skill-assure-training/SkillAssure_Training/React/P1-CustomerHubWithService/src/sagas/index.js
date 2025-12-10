import { all, fork, flush } from 'redux-saga/effects';

import demo from './DemoSaga'
import customerProfile from './CustomersSaga/CustomerProfileSaga'
import planData from './CustomersSaga/PlanSaga'
// import getContractData from './CustomersSaga/ContractSaga'
import familydata from './CustomersSaga/FamilySaga'
import transactiondata from './CustomersSaga/TransactionSaga'
import getCustomerDashboardData from './DashboardSaga/DashboardSaga'
import getChannelInteractionData from './DashboardSaga/ChannelnteractionSaga'
import getDevicesData from './DashboardSaga/DevicesSaga'
import getPredictionChartData from './DashboardSaga/PredictionChartSaga'
import getTopConnectsData from './DashboardSaga/TopConnectsSaga'
import getTabData from './DashboardSaga/TabSaga'
import getChartData from './DashboardSaga/ChartSaga'
import getNbaData from './MicrointeractionSaga/NbaSaga'
/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(demo),fork(customerProfile),fork(getChartData),fork(planData),fork(familydata),fork(transactiondata),fork(getTabData),fork(getCustomerDashboardData),fork(getChannelInteractionData),fork(getDevicesData),fork(getPredictionChartData),fork(getTopConnectsData),fork(getNbaData)]);
}
