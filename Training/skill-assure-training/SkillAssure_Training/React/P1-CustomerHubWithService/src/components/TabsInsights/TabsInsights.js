import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Header, Grid, ItemMeta } from 'semantic-ui-react';
import './TabsInsights.scss';

class TabsInsights extends React.Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let data = this.props.tabsInsights
        return (
            <div style={{padding:'1%'}}>
                <Grid>
                    {
                        data.map((item) => {
                            return (
                                <Grid.Column width={3}>
                                    < Header as='h2'>
                                        <Header.Content>
                                            <div className="line">
                                                <div className="value">{item.heading}
                                                    <Header.Subheader>{item.subHeading}</Header.Subheader>
                                                </div>
                                            </div>
                                        </Header.Content>
                                    </Header>
                                </Grid.Column>
                            )
                        })
                    }

                </Grid>
            </div >
        )
    }
}

export default TabsInsights