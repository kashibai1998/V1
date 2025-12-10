import React from 'react';
import { Card, Grid, Icon, Feed } from 'semantic-ui-react';

class ConsumptionInformation extends React.Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let data = this.props.data
        return (
            <div>
                <Grid style={{ marginTop: '7%' }}>
                    {
                        data.map((item) => {
                            return (
                                <Grid.Column width={5}>
                                    <Card.Group >
                                        <Card>
                                            <Card.Content>
                                                <Feed>
                                                    <Feed.Event>
                                                        <Icon name="map marker alternate" color="blue" />
                                                        <Feed.Content>
                                                            <Card.Header><h3><b>{item.heading} GB</b></h3></Card.Header> 
                                                            <Card.Meta>{item.subHeading}</Card.Meta>
                                                        </Feed.Content>
                                                    </Feed.Event>
                                                </Feed>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </Grid.Column>
                            )
                        })
                    }

                </Grid>
            </div >
        )
    }
}

export default ConsumptionInformation