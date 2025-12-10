import React from 'react';
import { connect } from 'react-redux';
import { Card, Loader, Grid, Image, Segment } from 'semantic-ui-react';
import img from '../../../assets/customer/christian.jpg'
// import familydata from '../../../mock/CustomerTab/FamilyTree.json';
import './FamilyTreeComponent.scss'
import getFamilydata from '../../../actions/CustomerActions/FamilyAction'


class FamilyTreeComponent extends React.Component {


    componentDidMount() {
        console.log("plan component")
        this.props.getFamilydata(this.props.ids)
        this.setState({
            ids:this.props.ids
        })
    }

    componentDidUpdate() {
        if(this.props.ids!=this.state.ids)
       {
        this.props.getFamilydata(this.props.ids)
        this.setState({
            ids:this.props.ids
        })
       }
       
    }
    render() {

        let familydata = this.props.familydata
        console.log(familydata)
        if (familydata == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        return (
            <div>
                <Segment padded>
                    <b>FAMILY TREE</b>
                    <Grid padded>
                        <Grid.Row>
                            <Grid.Column>
                                <Card.Group itemsPerRow={6}>
                                    {
                                        familydata.map((item) => {
                                            return (
                                                <Card className="card component">
                                                    <Card.Content>
                                                        <Image src={require('../../../assets/customer/'+item.profileImage)} avatar size="huge" />
                                                        <br></br><br></br>
                                                        <b>{item.name}</b> <br></br>
                                                        Age: {item.age}
                                                    </Card.Content>
                                                </Card>
                                            )
                                        })
                                    }
                                </Card.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

FamilyTreeComponent.propTypes = {

}

const mapStateToProps = (state) => ({
    familydata: state.FamilyReducer.familyData
})

const mapDispatchToProps = (dispatch) => ({
    getFamilydata: (ids) => { dispatch(getFamilydata(ids)); },
})

export default connect(mapStateToProps, mapDispatchToProps)(FamilyTreeComponent)
