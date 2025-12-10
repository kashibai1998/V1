import React from 'react'
import { Segment, Card, Icon, Menu, Grid, Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './TabCardComponent.scss'
class TabCardComponent extends React.Component {
    static propTypes = {
        Text: PropTypes.string,
        Heading: PropTypes.string,
        onClick: PropTypes.func,
        Name:PropTypes.string
    };


    render() {

        const { props: { Heading, Text, onClick,Name } } = this;
        let data = this.props.data
        if (data == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        return (
            <div className="tab-card-component">
                <Card className={this.props.style}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3} textAlign="left">
                                <div className="icon-section">
                                    <Icon name={Name} />
                                </div>

                            </Grid.Column>
                            <Grid.Column width={13} textAlign="left">{data.channelText}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign="left" className="card-number">{data.value} </Grid.Column>
                            <Grid.Column textAlign="right" className="card-symbol" style={{ "marginTop": "5%", "marginLeft": "10%" }} > {this.props.symbol}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign="left">{data.offer}</Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card>
            </div>
        )
    }
}

export default TabCardComponent