import React, { PureComponent } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './InfoComponent.scss';

class InfoComponent extends PureComponent {
    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="info-border">
                <Grid>
                    <Grid.Row >
                        <Grid.Column width={1} verticalAlign={'top'} className="info-icon" >
                            <Icon name="check circle" size={'large'} color={'green'} />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <p className="info-desc">
                                {this.props.data}
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(InfoComponent)