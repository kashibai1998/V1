import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Table, Segment, Grid, Loader } from 'semantic-ui-react'
import './TabularComponent.scss'
class TabularComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log(this.props.data)
        if (this.props.data == undefined) {
            return (
                <div>
                    <Loader active={true} content={'Loading'} />
                </div>
            )
        }
        return (
            <div className="tabular-component">
                <Segment padded>
                    <b>{this.props.title}</b>
                    <Grid padded>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Table basic='very'>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell className="table-header-first">{this.props.tableheader[0]}</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>{this.props.tableheader[1]}</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>{this.props.tableheader[2]}</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>{this.props.tableheader[3]}</Table.HeaderCell>
                                            <Table.HeaderCell className="table-header-last" textAlign='center'>{this.props.tableheader[4]}</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {
                                            this.props.data.map((item) => {
                                                console.log(item)
                                                if (item.info > 1)
                                                    return (
                                                        <Table.Row className="table-row">
                                                            <Table.Cell textAlign='left' className="table-cell-first">{item.Number}</Table.Cell>
                                                            <Table.Cell textAlign='center'>{item.Date}</Table.Cell>
                                                            <Table.Cell textAlign='center'>£{item.info}</Table.Cell>
                                                            <Table.Cell textAlign='center'>{item.status}</Table.Cell>
                                                            <Table.Cell textAlign='center' className="table-cell-last" >{item.closureDate}</Table.Cell>
                                                        </Table.Row>
                                                    )
                                                else
                                                    return (
                                                        <Table.Row className="table-row">
                                                            <Table.Cell textAlign='left' className="table-cell-first">{item.Number}</Table.Cell>
                                                            <Table.Cell textAlign='center'>{item.Date}</Table.Cell>
                                                            <Table.Cell textAlign='center'>{item.info}</Table.Cell>
                                                            <Table.Cell textAlign='center'>{item.status}</Table.Cell>
                                                            <Table.Cell textAlign='center' className="table-cell-last" >{item.closureDate}</Table.Cell>
                                                        </Table.Row>
                                                    )
                                            }
                                            )
                                        }
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(TabularComponent)
