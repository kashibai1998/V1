import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Grid, Tab, Segment, Menu, Input, Dropdown } from 'semantic-ui-react';
import CHURNTab from '../CHURNTab/CHURNTab';
import CLVTab from '../CLVTab/CLVTab';
import NPSTab from '../NPSTab/NPSTab';
import REVTab from '../REVTab/REVTab';
import './PredictionChartsComponent.scss';
import PredictionChartDetails from '../PredictionChartDetails/PredictionChartDetails';
import DropDownComponent from '../../../../components/DropDownComponent/DropDownComponent';


const options = [
    { key: 2, text: 'past month', value: 0 },
    { key: 1, text: 'past year', value: 1 },
]
export default class PredictionChartsComponent extends Component {
    state = { activeItem: 'CHURN', value: 0 }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleChange = (e, { value }) => this.setState({ value })
    render() {
        console.log(this.props)
        let data = this.props.predictionData
        console.log(data)
        const { activeItem } = this.state
        if (data) {
            let churnData = data.customerData.graph[this.state.value].churn
            let clvData = data.customerData.graph[this.state.value].clv
            let npsData = data.customerData.graph[this.state.value].nps
            let revData = data.customerData.graph[this.state.value].rev
            console.log(revData)
            let revRes = revData.revgraph;
            console.log(revRes)
            let churnRes = churnData.churngraph;
            let clvRes = clvData.clvgraph;
            let npsRes = npsData.npsgraph;

            let totalRev = 0;
            for (let i = 0; i < revRes.length; i++) {
                totalRev += revRes[i];
            }
            let avg = totalRev / revRes.length;
            let avgRevRes = avg.toFixed(0);

            let totalChurn = 0;
            for (let i = 0; i < churnRes.length; i++) {
                totalChurn += churnRes[i];
            }
            let avgChurn = totalChurn / churnRes.length;
            let avgChurnRes = avgChurn.toFixed(0);

            let totalClv = 0;
            for (let i = 0; i < clvRes.length; i++) {
                totalClv += clvRes[i];
            }
            let avgclv = totalClv / clvRes.length;
            let avgClvRes = avgclv.toFixed(0);

            let totalNps = 0;
            for (let i = 0; i < npsRes.length; i++) {
                totalNps += npsRes[i];
            }
            let avgNps = totalNps / npsRes.length;
            let avgNpsRes = avgNps.toFixed(0);


            return (
                <div className="graph-tabs">
                    <Segment>
                        <div>
                            <Menu attached='top' tabular style={{ border: '0px' }}>
                                <Menu.Item
                                    name='REV'
                                    active={activeItem === 'REV'}
                                    onClick={this.handleItemClick}
                                    style={{ border: '0px', fontSize: '16px' }}
                                />
                                <Menu.Item
                                    name='CLV'
                                    active={activeItem === 'CLV'}
                                    onClick={this.handleItemClick}
                                    style={{ border: '0px', fontSize: '16px' }}

                                />
                                <Menu.Item
                                    name='CHURN'
                                    active={activeItem === 'CHURN'}
                                    onClick={this.handleItemClick}
                                    style={{ border: '0px', fontSize: '16px' }}

                                />
                                <Menu.Item
                                    name='NPS'
                                    active={activeItem === 'NPS'}
                                    onClick={this.handleItemClick}
                                    style={{ border: '0px', fontSize: '16px' }}

                                />
                                <Menu.Menu position='right'>
                                    <Menu.Item>
                                        {/* <Dropdown options={options} size={'mini'} value={this.state.value} selection onChange={this.handleChange} style={{ borderRadius: '30px', minWidth: '8px' }} /> */}

                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu>

                            {
                                activeItem == 'REV' &&
                                <Segment attached='bottom' style={{ border: '0px' }}>
                                    <PredictionChartDetails chart={<REVTab revData={revData} />} infoData={revData.revreasons} reason={'revres'} predictionData={avgRevRes} />
                                </Segment>
                            }
                            {
                                activeItem == 'CLV' &&
                                <Segment attached='bottom' style={{ border: '0px' }}>
                                    <PredictionChartDetails chart={<CLVTab clvData={clvData} />} infoData={clvData.clvreasons} reason={'clvres'} predictionData={avgClvRes} />
                                </Segment>
                            }
                            {
                                activeItem == 'CHURN' &&
                                <Segment attached='bottom' style={{ border: '0px' }}>
                                    <PredictionChartDetails chart={<CHURNTab churnData={churnData} />} infoData={churnData.churnreasons} reason={'churnres'} predictionData={avgChurnRes + "%"} />
                                </Segment>
                            }
                            {
                                activeItem == 'NPS' &&
                                <Segment attached='bottom' style={{ border: '0px' }}>
                                    <PredictionChartDetails chart={<NPSTab npsData={npsData} />} infoData={npsData.npsreasons} reason={'npsres'} predictionData={avgNpsRes} />
                                </Segment>
                            }

                        </div>
                    </Segment>
                </div>

            );
        }
        else {
            return (
                <>NAN</>
            )
        }
    }
}