import React from 'react'
import { Button, Checkbox, Form,Grid,Modal, Select ,Search} from 'semantic-ui-react'
import _ from 'lodash'
const initialState = { isLoading: false, results: [], value: '' }

const timeSpan = [
    {
        key: 'Last week',
        text: 'Last week',
        value: 'Last week',
    },
    {
        key: 'Last month',
        text: 'Last month',
        value: 'Last month',
    }
]

const counties = [
    {
        key: 'UK Counties',
        title: 'UK Counties',
        value: 'UK Counties'
    },
    {
        key: 'US Counties',
        title: 'US Counties',
        value: 'US Counties'
    }
]

class ChurnModalWindowFilter extends React.Component {
    state = {
        open: false,
        // data: data,
        Time: 'Last month',
        ageBelow18: "<18",
        age18To40: "18-40",
        ageAbove40: ">40",
        isChecked: false,
        isChecked1: false,
        isChecked2: false,
        isCheckedGenderMale: false,
        isCheckedGenderFemale: false,
        isCheckedTime: false,
        isCheckedTime2: false,

    }
    
    setOpen = (bool) => {
        this.setState(
            {
                open: bool,
                age18To40: null,
                ageBelow18: null,
                ageAbove40: null,
                Male: null,
                Female: null
            }
        )
    }

    handleChangeAge1 = (e, value) => {
        if (value.checked == true) {
            this.setState({ ageBelow18: value.value })
        }
        this.setState({ isChecked: !this.state.isChecked })
    }

    handleChangeAge2 = (e, value) => {
        if (value.checked == true) {
            this.setState({ age18To40: value.value })
        }
        this.setState({ isChecked1: !this.state.isChecked1 })
    }
    handleChangeAge3 = (e, value) => {
        if (value.checked == true) {
            this.setState({ ageAbove40: value.value })
        }
        this.setState({ isChecked2: !this.state.isChecked2 })
    }
    handleGenderMale = (e, { name, value }) => {
        if (value.checked == true) {
            this.setState({
                [name]: value
            })
        }
        this.setState({ isCheckedGenderMale: !this.state.isCheckedGenderMale })

    }
    handleGenderFemale = (e, { name, value }) => {
        if (value.checked == true) {
            this.setState({
                [name]: value
            })
        }
        this.setState({ isCheckedGenderFemale: !this.state.isCheckedGenderFemale })

    }

    handleChangeTime = (e, { value }) => {
        if (value.checked == true) {
            this.setState({ Time: value })
        }
        this.setState({ isCheckedTime: !this.state.isCheckedTime })
    }
    componentDidMount() {
        this.props.getFormFilterData(this.state)
    }

    handleSubmit = () => {
        console.log("ssss")
        this.props.getFormFilterData(this.state)
        this.setState(
            {
                open: false,
                age18To40: null,
                ageBelow18: null,
                ageAbove40: null
            }
        )
    }

    unChecked = () => {
        this.setState(
            {
                isChecked: false,
                isChecked1: false,
                isChecked2: false,
                isCheckedGenderMale: false,
                isCheckedGenderFemale: false
            }
        )
    }

    handleResultSelect = (e, { result }) => {
        console.log(result.title)
        this.setState({ value: result.title })
        this.props.getFormFilterData(this.state)
    }
    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(counties, isMatch),
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column width={8}>
                        <Modal
                            onClose={() => this.setOpen(false)}
                            onOpen={() => this.setOpen(true)}
                            open={this.state.open}
                            trigger=
                            {
                                <Button>Advance Filter</Button>
                            }
                        >
                            <Modal.Header>Advance Filter</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <Form>
                                        <Form.Group widths='equal'>
                                            <Form.Field>
                                                <Select
                                                    label='Period'
                                                    name='Time'
                                                    options={timeSpan}
                                                    placeholder='Last week'
                                                    // checked={this.state.isCheckedTime}
                                                    onChange={(e, value) => this.handleChangeTime(e, value)}>
                                                </Select>
                                            </Form.Field>
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Field
                                                // control={Select}
                                                // label='County'
                                                // name='Time'
                                                // options={counties}
                                                // placeholder='UK Counties'
                                                // checked={this.state.isCheckedTime1}
                                                // onChange={(e, value) => this.handleChangeTime(e, value)}
                                            >
                                                <Search
                                                    aligned="left"
                                                    style={{ borderRadius: '0px' }}
                                                    input={{ icon: 'search', iconPosition: 'left', placeholder: 'Search County' }}
                                                    loading={isLoading}
                                                    onResultSelect={this.handleResultSelect}
                                                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                                        leading: true,
                                                    })}
                                                    
                                                    results={results}
                                                    value={value}
                                                />
                                            </Form.Field>
                                        </Form.Group>
                                        <Form.Group grouped>
                                            <label>Age</label>
                                            <Form.Field>
                                                <Checkbox
                                                    label='<18'
                                                    value={'<18'}
                                                    name={'ageBelow18'}
                                                    checked={this.state.isChecked}
                                                    onChange={(e, value) => this.handleChangeAge1(e, value)}

                                                ></Checkbox>
                                            </Form.Field>
                                            <Form.Field>
                                                <Checkbox
                                                    label='18-40'
                                                    value={'18-40'}
                                                    name={'age18To40'}
                                                    checked={this.state.isChecked1}
                                                    onChange={(e, value) => this.handleChangeAge2(e, value)}

                                                ></Checkbox>
                                            </Form.Field>
                                            <Form.Field>
                                                <Checkbox
                                                    label='>40'
                                                    value={'>40'}
                                                    name={'ageAbove40'}
                                                    checked={this.state.isChecked2}
                                                    onChange={(e, value) => this.handleChangeAge3(e, value)}

                                                ></Checkbox>
                                            </Form.Field>

                                        </Form.Group>
                                        <Form.Group grouped>
                                            <label>Gender</label>
                                            <Form.Field>
                                                <Checkbox
                                                    label='Male'
                                                    name='Male'
                                                    value={'Male'}
                                                    checked={this.state.isCheckedGenderMale}
                                                    onChange={(e, value) => this.handleGenderMale(e, value)}

                                                ></Checkbox>
                                            </Form.Field>
                                            <Form.Field>
                                                <Checkbox
                                                    label='Female'
                                                    name='Female'
                                                    value={'Female'}
                                                    checked={this.state.isCheckedGenderFemale}
                                                    onChange={(e, value) => this.handleGenderFemale(e, value)}

                                                ></Checkbox>
                                            </Form.Field>

                                        </Form.Group>
                                        {/* <Form.Field onClick={this.handleSubmit} control={Button}>Apply</Form.Field> */}
                                    </Form><br></br>
                                    <Button onClick={this.handleSubmit} type='Apply'>Apply</Button>
                                    <Button onClick={this.unChecked} type='Clear'>Clear</Button>
                                </Modal.Description>
                            </Modal.Content>

                        </Modal>
                    </Grid.Column>
                    <Grid.Column style={{ padding: "0px" }} width={8}>
                        <Button style={{ marginRight: "22px" }} onClick={this.unChecked} type='Clear'>Clear</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        )
    }


}

export default ChurnModalWindowFilter