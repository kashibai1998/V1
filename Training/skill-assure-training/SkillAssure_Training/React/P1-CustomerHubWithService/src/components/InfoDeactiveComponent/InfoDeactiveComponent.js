import React, { PureComponent } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Step, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './InfoDeactiveComponent.scss';

class InfoDeactiveComponent extends PureComponent {
    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        if (this.props.data == undefined || this.props.reason == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        console.log(this.props.data)

        return (
            <div className="info-border1">
                <Grid>
                    <Grid.Row >
                        <Grid.Column width={1} verticalAlign={'top'} className="info-icon" >
                            <Icon name="certificate" size={'large'} color={'red'} />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <p className="info-desc">
                                {this.props.data}
                                {/* {this.props.data.map((item, index) => {
                                    let reason = this.props.reason;
                                    return (
                                        <>
                                            {item[reason]}{" "}
                                        </>

                                    )
                                })} */}
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
            // <div className="info-border1">
            //     <Grid>
            //         <Grid.Row  style={{ flexWrap: 'initial'}}>
            //             <Grid.Column width={1} verticalAlign={'top'} className="info-icon" >
            //             <Icon name="certificate" size={'large'} color={'red'} />
            //             </Grid.Column>
            //             <Grid.Column width={15}>
            //                 <p className="info-desc" >
            //                     {this.props.data.map((item,index) => {
            //                          let reason = this.props.reason;
            //                         return (
            //                             <>  
            //                             {item[reason]}{" "} 
            //                             </>

            //                         )
            //                     }
            //                     )
            //                     }
            //                 </p>
            //             </Grid.Column>
            //         </Grid.Row>
            //     </Grid>

            // </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(InfoDeactiveComponent)