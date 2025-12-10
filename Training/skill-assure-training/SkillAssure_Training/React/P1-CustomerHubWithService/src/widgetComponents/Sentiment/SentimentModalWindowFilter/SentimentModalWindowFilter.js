import React from 'react'
import {Button,Search, Checkbox,Form,Grid,Modal,Select} from 'semantic-ui-react'
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
        key: 'Greater London',
        title: 'Greater London',
        value: 'UK Counties'
    },
    {
        key: 'Greater London',
        title: 'Greater Manchester',
        value: 'UK Counties'
    },
    {
        key: 'Greater Manchester',
        title: 'Merseyside',
        value: 'US Counties'
    },
    {
        title: 'South Yorkshire',
    },
    {
        title: 'Tyne and Wear',
    },
    {
        title: 'West Midlands',
    },
    {
        title: 'West Yorkshire',
    },
    {
        title: 'North Yorkshirer',
    },
    {
        title: 'Durham',
    },
    {
        title: 'Cheshire',
    },
    {
        title: 'Lancashire',
    },
    {
        title: 'East Riding of Yorkshire',
    },
    {
        title: 'Lincolnshire',
    },
    {
        title: 'Derbyshire',
    },
    {
        title: 'Rutland',
    },
    {
        title: 'Nottinghamshire',
    },
    {
        title: 'Somerset',
    },
    {
        title: 'Bristol',
    },
    {
        title: 'Gloucestershire',
    },
    {
        title: 'Devon',
    },
    {
        title: 'Dorset',
    },

    {
        title: 'California',
    },
    {
        title: 'Alabama',
    },
    {
        title: 'Arizona',
    },
    {
        title: 'Arkansas',
    },
    {
        title: 'Colorado',
    },
    {
        title: 'Connecticut',
    },
    {
        title: 'Delaware',
    },
    {
        title: 'Florida',
    },
    {
        title: 'Georgia'
    },
    {
        title: 'Hawaii',
    },
    {
        title: 'Idaho',
    },
    {
        title: 'Illinois',
    },
    {
        title: 'Indiana',
    },
    {
        title: 'Iowa',
    },
    {
        title: 'Kansas',
    },
    {
        title: 'Kentucky',
    },
    {
        title: 'Louisiana',
    },
    {
        title: 'Maine'
    },
    {
        title: 'Massachusetts',
    },
    {
        title: 'Michigan'
    }
]

class SentimentModalWindowFilter extends React.Component {
    state = {
        open: false,
        Time: 'Last month',
        ageBelow18: "",
        age18To40: "",
        ageAbove40: "",
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
    handleGenderMale = (e, value) => {
        if (value.checked == true) {
            this.setState({
                male: value.value
            })
        }
        this.setState({ isCheckedGenderMale: !this.state.isCheckedGenderMale })

    }
    handleGenderFemale = (e, value) => {
        if (value.checked == true) {
            this.setState({
                female: value.value
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
                                <Button style={{ marginRight: "50px" }}>Advance Filter</Button>
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
                        <Button onClick={this.unChecked} type='Clear'>Clear</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        )
    }


}

export default SentimentModalWindowFilter;