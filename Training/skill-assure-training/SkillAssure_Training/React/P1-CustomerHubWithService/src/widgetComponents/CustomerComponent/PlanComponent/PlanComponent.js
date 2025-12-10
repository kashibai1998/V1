import React from 'react'
import { connect } from 'react-redux'
import { Grid, Loader, Segment } from 'semantic-ui-react'
import './PlanComponent.scss'
import getPlanData from '../../../actions/CustomerActions/PlanAction'

class PlanComponent extends React.Component {

    componentDidMount() {
        console.log("plan component")
        this.props.getPlanData(this.props.ids)
        this.setState({
            ids: this.props.ids
        })
    }

    componentDidUpdate() {
        if (this.props.ids != this.state.ids) {
            this.props.getPlanData(this.props.ids)
            this.setState({
                ids: this.props.ids
            })
        }
       
    }


    render() {
        let planData = this.props.planData
        console.log(planData)
        if (planData == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        return (
            <div className="plan-component">
                <Segment padded className="segment">
                    <b>PLAN</b>
                    <Grid padded>

                        <Grid.Row>
                            <Grid.Column width={8}><b>Package</b></Grid.Column>
                            <Grid.Column width={4}><b>Discount</b></Grid.Column>
                            <Grid.Column width={4}><b>Annual Cost</b></Grid.Column>
                        </Grid.Row>
                        <hr className="hr"></hr>
                        <Grid.Row>
                            <Grid.Column width={8}><b>{planData[0].plan.planName}</b> <p className="package-text">{planData[0].plan.description}
                            {/* <br></br>{planData.package[1]}<br></br>{planData.package[3]}<br></br>{planData.package[4]} */}
                            </p></Grid.Column>
                            <Grid.Column width={4}>{planData[0].plan.discount}</Grid.Column>
                            <Grid.Column width={4}>£ {planData[0].plan.annualcost}</Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

            </div>
        )

    }

}


const mapStateToProps = (state) => ({
    planData: state.PlanReducer.planData
})

function mapDispatchToProps(dispatch) {
    return {
        getPlanData: (ids) => { dispatch(getPlanData(ids)); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanComponent)
