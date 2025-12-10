import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Segment, Grid } from 'semantic-ui-react';
import DropDownComponent from '../../../components/DropDownComponent/DropDownComponent';
import { Progress, Divider } from 'antd';
import CalendarView from '../CalendarView/CalendarView';
class CalanderComponent extends React.Component {

    state = {

    }
    getDropodownData = () => {

    }

    convert = (str) => {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        var d = [date.getFullYear(), mnth, day].join("-")
        console.log(d)
        return [date.getFullYear(), mnth, day].join("-");
    }

    randomDate = (i) => {
        console.log(i)
        if (i == 1) {
            return [this.convert(new Date())];
        }
        else if (i == 3) {
            return [this.convert(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)), this.convert(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)), this.convert(new Date(Date.now() - 11 * 24 * 60 * 60 * 1000))];
        }
        else if (i == 4) {
            return [this.convert(new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)), this.convert(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)), this.convert(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)), this.convert(new Date(Date.now() - 9 * 24 * 60 * 60 * 1000))];

        }

    }

    render() {

        let quiteDays = this.randomDate(this.props.data.Data[0].heading)
        // for (let i = 0; i < this.props.data.Data[0].heading; i++) {
        // quiteDays.push(this.randomDate(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), new Date(), this.props.data.Data[0].heading))
        // }

        console.log(quiteDays)

        console.log(this.props.data)
        console.log(this.props.userId)
        return (
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <h3><b>QUITE DAYS - {quiteDays.length}</b></h3>
                        </Grid.Column>
                        <Grid.Column width={5} floated={'right'}>
                            <DropDownComponent getDropodownData={this.getDropodownData} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                        <Grid.Column width={9}>
                            <CalendarView  days={quiteDays} />
                        </Grid.Column>

                        <Grid.Column width={7}>
                            <Grid>
                                <Grid.Row >
                                    <Grid.Column width={5} >
                                        <Progress type="circle" percent={this.props.data.value} strokeWidth='4' width='60px' strokeColor='blue' />
                                    </Grid.Column>
                                    <Grid.Column width={11} verticalAlign={'middle'} textAlign={'left'}>
                                        <p style={{ margin: '0px' }}>Of time</p>
                                        <h3>Sports</h3>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={5} >
                                        {
                                            this.props.userId == 100001 &&
                                            <Progress type="circle" percent='20' strokeWidth='4' width='60px' strokeColor='blue' />
                                        }
                                        {
                                            this.props.userId == 100002 &&
                                            <Progress type="circle" percent='24' strokeWidth='4' width='60px' strokeColor='blue' />
                                        }
                                        {
                                            this.props.userId == 100003 &&
                                            <Progress type="circle" percent='18' strokeWidth='4' width='60px' strokeColor='blue' />
                                        }
                                        {
                                            this.props.userId == 100004 &&
                                            <Progress type="circle" percent='27' strokeWidth='4' width='60px' strokeColor='blue' />
                                        }
                                        {
                                            this.props.userId == 100005 &&
                                            <Progress type="circle" percent='33' strokeWidth='4' width='60px' strokeColor='blue' />
                                        }
                                    </Grid.Column>
                                    <Grid.Column width={11} verticalAlign={'middle'} textAlign={'left'}>
                                        <p style={{ margin: '0px' }}>Of time</p>
                                        <h3>Entertainment</h3>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default CalanderComponent