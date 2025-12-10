import React, { PureComponent } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Button, Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import './AreaOfInterestComponent.scss';

class AreaOfInterestComponent extends PureComponent {
    static propTypes = {

    }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         value: 1
    //     }
    // }

    render() {
        let data = this.props.interestAreaData
        console.log(data)
        if (data == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        return (
            <div className="areaofinterst">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <Segment>
                                <Grid>
                                    <Grid.Row style={{ paddingBottom: '0px' }}>
                                        <Grid.Column width={1} />
                                        <Grid.Column width={15} >
                                            <h3><b>Areas of Interests</b></h3>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        {
                                            data.map((item) => {
                                                return (
                                                    <>
                                                        <Grid.Column width={1} />
                                                        <Grid.Column width={3}>
                                                            <Image src={require('../../../assets/dashboard/' + item.areaofinterest + '.svg')} size="mini" className="foodie" style={{ height: '30%', marginBottom: '10%' }} />
                                                            <p>#{item.areaofinterest}</p>
                                                        </Grid.Column>
                                                    </>
                                                )
                                            })
                                        }

                                        <Grid.Column width={14} style={{ marginTop: '-2%' }}>
                                            <Segment style={{ backgroundColor: '#28c770', paddingTop: '0px', paddingBottom: '0px', marginLeft: '45%' }} size={'mini'}><h4 style={{ color: 'white', textAlign: 'left' }}><b>Frequent Travel: Spain</b></h4></Segment>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={2} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AreaOfInterestComponent)
