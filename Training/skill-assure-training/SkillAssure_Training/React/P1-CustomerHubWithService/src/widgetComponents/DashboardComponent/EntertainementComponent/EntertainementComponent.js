import React, { PureComponent } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Dropdown, Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Progress, Divider } from 'antd';
import { Row } from 'react-bootstrap';

const options = [
    { key: 1, text: 'past month', value: 1 },
    { key: 2, text: 'past week', value: 2 },
    { key: 3, text: 'past year', value: 3 },
]
class EntertainementComponent extends PureComponent {

    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {

            value: 1
        }
    }
    handleChange = (e, { value }) => {
        console.log(value)
        this.setState({ value });
        this.props.onSelectLanguage(value);
    }

    render() {
        let data = this.props.entertainementData
        console.log(data)
        let pastWeekCustomerData = []
        let pastMonthCustomerData = []
        let pastYearCustomerData = []
        let customerData = []
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].timestamp)

            if (new Date(data[i].timestamp) <= new Date("2021-01-14") && new Date(data[i].timestamp) >= new Date("2021-01-7")) {
                pastWeekCustomerData.push(data[i]);
            }
            if (new Date(data[i].timestamp) <= new Date("2021-01-30") && new Date(data[i].timestamp) >= new Date("2020-12-30")) {
                pastMonthCustomerData.push(data[i]);
            }
            if (new Date(data[i].timestamp) <= new Date("2021-01-30") && new Date(data[i].timestamp) >= new Date("2020-01-30")) {
                pastYearCustomerData.push(data[i]);
            }
        }
        if (this.state.value == 2) {
            customerData = pastWeekCustomerData
        }
        else if (this.state.value == 1) {
            customerData = pastMonthCustomerData
        }
        else if (this.state.value == 3) {
            customerData = pastMonthCustomerData
        }

        console.log(customerData)
        if (customerData == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }

        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <h3><b>Entertainment</b></h3>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Dropdown options={options} size={'mini'} value={this.state.value} selection onChange={this.handleChange} style={{ borderRadius: '30px', minWidth: '120px' }} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        {
                            customerData.map((item) => {
                                console.log(item)
                                return (
                                    <Grid.Row columns={3}>
                                        <Grid.Column width={2} style={{ margin: "10px" }}>
                                            <Progress type="circle" percent={item.percentage} strokeWidth='4' width='75px' />
                                            <span style={{ marginLeft: "10px" }}><b>{item.name}</b></span>
                                        </Grid.Column>
                                    </Grid.Row>
                                )
                            })
                        }
                    </Grid.Row>
                    <Grid.Row />
                </Grid>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(EntertainementComponent)
