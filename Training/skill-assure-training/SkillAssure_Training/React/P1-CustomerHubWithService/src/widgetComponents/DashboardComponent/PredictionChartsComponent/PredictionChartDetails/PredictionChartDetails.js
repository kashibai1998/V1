import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import InfoDeactiveComponent from '../../../../components/InfoDeactiveComponent/InfoDeactiveComponent';

class PredictionChartDetails extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let infoData = this.props.infoData
        let chart = this.props.chart
        let predictionData = this.props.predictionData
        return (
            <div>
                <Grid celled={false}>
                    <Grid.Row style={{ paddingLeft: '3px' }}>
                        <Grid.Column floated={'left'}>
                            <h4>This Year</h4>
                            <h3 style={{ color: 'red' }}>{predictionData}</h3>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ paddingLeft: '15px' }}>
                        {chart}
                    </Grid.Row>
                    <Grid.Row style={{ paddingLeft: '15px' }}>
                        <InfoDeactiveComponent data={infoData} reason={this.props.reason}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PredictionChartDetails)


