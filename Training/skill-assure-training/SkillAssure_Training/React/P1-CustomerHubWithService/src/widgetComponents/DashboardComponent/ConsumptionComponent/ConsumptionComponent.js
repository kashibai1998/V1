import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Segment, Card, Icon,Dropdown, Menu, Grid } from 'semantic-ui-react'
import DropDownComponent from '../../../components/DropDownComponent/DropDownComponent';
import ConsumptionInformation from '../../../components/ConsumptionInformation/ConsumptionInformation';


const options = [
    { key: 1, text: 'past month', value: 0 },
    { key: 2, text: 'past week', value: 1 },
]
class ConsumptionComponent extends Component {
    state = { activeItem: 'Overall',value:1 }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleChange = (e, { value }) => this.setState({ value })
    render() {
        const { activeItem } = this.state
        return (
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <h3><b>CONSUMPTION ON LOCATIONS</b></h3>
                        </Grid.Column>
                        <Grid.Column width={5} floated={'right'}>
                        <Dropdown options={options} size={'mini'} value={this.state.value} selection onChange={this.handleChange} style={{ borderRadius: '30px', minWidth: '8px' }} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


                <div>
                    <Menu attached='top' tabular style={{ border: '0px' }}>
                        <Menu.Item
                            name='Overall'
                            active={activeItem === 'Overall'}
                            onClick={this.handleItemClick}
                            style={{ border: '0px', fontSize: '16px' }}
                        />
                        <Menu.Item
                            name='Streaming'
                            active={activeItem === 'Streaming'}
                            onClick={this.handleItemClick}
                            style={{ border: '0px', fontSize: '16px' }}

                        />
                        <Menu.Item
                            name='Apps'
                            active={activeItem === 'Apps'}
                            onClick={this.handleItemClick}
                            style={{ border: '0px', fontSize: '16px' }}

                        />
                    </Menu>
                    {
                        activeItem == 'Overall' &&
                        <Segment attached='bottom' style={{ border: '0px' }}>
                            <ConsumptionInformation data={this.props.data.customerData.graph[this.state.value].Overall} />
                        </Segment>
                    }
                    {
                        activeItem == 'Streaming' &&
                        <Segment attached='bottom' style={{ border: '0px' }}>
                            <ConsumptionInformation data={this.props.data.customerData.graph[this.state.value].Streaming}  />
                        </Segment>
                    }
                    {
                        activeItem == 'Apps' &&
                        <Segment attached='bottom' style={{ border: '0px' }}>
                            <ConsumptionInformation data={this.props.data.customerData.graph[this.state.value].Apps} />
                        </Segment>
                    }
                </div>
            </Segment>
        )
    }
}

export default ConsumptionComponent