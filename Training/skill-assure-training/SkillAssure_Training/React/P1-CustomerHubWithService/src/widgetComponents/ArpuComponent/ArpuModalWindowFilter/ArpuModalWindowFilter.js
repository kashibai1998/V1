import React from 'react'
import {
    Button, Checkbox,
    Form,
    Modal,
    Select
} from 'semantic-ui-react'



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

class ArpuModalWindowFilter extends React.Component {
    state = {
        open: false,
        Time: 'Last month',
        ageBelow18: null,
        age18To40: null,
        ageAbove40: null,
        male: null,
        female: null,
        isChecked: false,
        isChecked1: false,
        isChecked2: false,
        isCheckedMale: false,
        isCheckedFemale: false

    }
    setOpen = (bool) => {
        this.setState(
            {
                open: bool,
                age18To40: null,
                ageBelow18: null,
                ageAbove40: null
            }
        )
    }

    handleChangeAge1 = (e, value) => {
        if (value.checked == true) {
            this.setState({
                ageBelow18: value.value
            })
        }
        this.setState({ isChecked: !this.state.isChecked })
    }

    handleChangeAge2 = (e, value) => {
        if (value.checked) {
            this.setState({
                age18To40: value.value
            })
        }
        this.setState({ isChecked1: !this.state.isChecked1 })
    }

    handleChangeAge3 = (e, value) => {
        if (value.checked == true) {
            this.setState({
                ageAbove40: value.value
            })
        }
        this.setState({ isChecked2: !this.state.isChecked2 })

    }
    handleChangeFemale = (e,value ) => {
        console.log( value.value)
        if(value.checked == true){
            this.setState({female: value.value})
        }else{
            this.setState({female: null})
        }
        this.setState({isCheckedFemale: !this.state.isCheckedFemale
        })

    }
    handleChangeMale = (e,value ) => {
        console.log( value.checked)
        // console.log(value.value)
        if(value.checked == true){
            this.setState({male: value.value})
        }else{
            this.setState({ male: null})
        }
        this.setState({isCheckedMale: !this.state.isCheckedMale})
    }


    handleChangeTime = (e, { value }) => {
        this.setState({ Time: value })
    }

    componentDidMount() {
        this.props.getFormFilterData(this.state)
    }

    handleSubmit = () => {
        console.log(this.state)

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
    handleClear = () => {
        this.setState(
            {
                isChecked: false,
                isChecked1: false,
                isChecked2: false,
                isCheckedMale: false,
                isCheckedFemale: false
            }
        )
    }

    render() {
        console.log(this.state.name)
        return (
            <Modal
                onClose={() => this.setOpen(false)}
                onOpen={() => this.setOpen(true)}
                open={this.state.open}
                trigger={<Button>Advance Filter</Button>}
                size='mini'
            >
                <Modal.Header>Advance Filter <Button onClick={this.handleClear} color='red'>Clear</Button></Modal.Header>

                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Select}
                                    label='Period'
                                    name='Time'
                                    options={timeSpan}
                                    placeholder='Last week'
                                    onChange={this.handleChangeTime}
                                />
                            </Form.Group>
                            <Form.Group inline>
                                <label>Age</label>
                                <Form.Field
                                // control={Checkbox}
                                // label='<18'
                                // value={'<18'}
                                // name={'ageBelow18'}
                                // onChange={this.handleChangeAge1}
                                >
                                    <Checkbox label='<18' value='<18' name='ageBelow18' checked={this.state.isChecked} onChange={(e, value) => this.handleChangeAge1(e, value)} />
                                </Form.Field>

                                <Form.Field
                                // control={Checkbox}
                                // label='18-40'
                                // value={'18-40'}
                                // name={'age18To40'}
                                // onChange={this.handleChangeAge2}
                                >
                                    <Checkbox label='18-40' value='18-40' checked={this.state.isChecked1} name='age18To40' onChange={(e, value) => this.handleChangeAge2(e, value)} />
                                </Form.Field>
                                <Form.Field
                                // control={Checkbox}

                                // label='>40'
                                // value={'>40'}
                                // name={'ageAbove40'}
                                // onChange={this.handleChangeAge3}
                                >
                                    <Checkbox label='>40' value='>40' checked={this.state.isChecked2} name='ageAbove40' onChange={(e, value) => this.handleChangeAge3(e, value)} />
                                </Form.Field>

                            </Form.Group>
                            <Form.Group inline>
                                <label>Gender</label>
                                <Form.Field
                                // control={<Checkbox checked={true}/>}
                                // label='Male'
                                // name='Male'
                                // value={'Male'}
                                // onChange={this.handleGender}
                                >
                                    <Checkbox label='Male' value='Male' name='Male' checked={this.state.isCheckedMale} onChange={(e, value) => this.handleChangeMale(e, value)} />
                                </Form.Field>
                                <Form.Field
                                // control={Checkbox}
                                // label='Female'
                                // name='Female'
                                // value={'Female'}
                                // onChange={this.handleGender}
                                >
                                    <Checkbox label='Female' value='Female' checked={this.state.isCheckedFemale} name='Female' onChange={(e, value) => this.handleChangeFemale(e, value)} />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Modal.Description>
                    <Modal.Actions style={{ textAlign: "center" }}>

                        <Button onClick={this.handleSubmit}   >Apply</Button>
                    </Modal.Actions>
                </Modal.Content>
            </Modal>
        )
    }


}

export default ArpuModalWindowFilter