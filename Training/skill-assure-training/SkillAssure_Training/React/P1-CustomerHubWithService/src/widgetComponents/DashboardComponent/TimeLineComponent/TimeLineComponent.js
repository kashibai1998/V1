import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Dropdown, Card, Loader } from 'semantic-ui-react';
import { Steps } from 'antd';

const { Step } = Steps;
class TimeLineComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let timeLineData = this.props.timeLineData
        console.log(timeLineData)
        if (timeLineData == undefined) {
            return (
                <div>
                    <Loader active={true} />
                </div>
            )
        }
        return (
            <div>
                <Segment>
                    <h4><b>Latest Activity</b></h4>
                    <Steps progressDot direction="vertical" style={{ overflow: 'auto', maxHeight: 200 }}>
                        {
                            timeLineData.map((item) => {
                                let date = new Date(item.date)
                                let noToMonth = date.toLocaleString('default', { month: 'long' });
                                console.log(noToMonth)
                                return (
                                    <Step status="process" title={date.getDate() + ' ' + noToMonth + ' ' + date.getFullYear() + ' '} description={item.activityDetails} subTitle={date.getHours() + ':' + date.getMinutes() + 'pm'} strokeColor="red" />
                                    // <Step status="process" description={item} strokeColor="red" />

                                )
                            })
                        }
                    </Steps>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineComponent)
