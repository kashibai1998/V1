import React, { PureComponent } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Step } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './InfoDetailsComponent.scss';

class InfoDetailsComponent extends PureComponent {
    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="info-border3">
                <Grid>
                    <Grid.Row >
                        <Grid.Column width={2} verticalAlign={'top'} className="info-icon" >
                            <Icon name="check circle" size={'big'} color={'green'} />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <p className="info-desc">
                                {this.props.data}
                            </p>
                        </Grid.Column>
                        <Grid.Column width={1}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoDetailsComponent)