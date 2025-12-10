import React, { useContext, useState, useEffect } from 'react'
import { Button, Checkbox, Form, Grid, Modal, Select, Search } from 'semantic-ui-react'
import { DatePicker } from 'antd';
import _ from 'lodash';
import { DataContext } from '../FilterTable/FilterTable';



const UnifiedFilter = (props) => {
    const dataList = useContext(DataContext);

    //  const initialState = { isLoading: false, results: [], value: '' }

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
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState("Last month");
    const [ageBelow18, setAgeBelow18] = useState("<18");
    const [age18To40, setAge18To40] = useState("18-40");
    const [ageAbove40, setAgeAbove40] = useState(">40");
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isCheckedGenderMale, setIsCheckedGenderMale] = useState(false);
    const [isCheckedGenderFeMale, setIsCheckedGenderFeMale] = useState(false);
    const [isCheckedTime, setIsCheckedTime] = useState(false);
    const [isCheckedTime2, setIsCheckedTime2] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [value, setValue] = useState('');
    const [data, setData] = useState(props.tableData);
    const [filteredDataList, setFilteredDataList] = useState([]);
    const [finalData, setFinalData] = useState([]);
    //   state = {
    //    open: false,
    // data: data,
    // time: 'Last month',
    // ageBelow18: "<18",
    // age18To40: "18-40",
    // ageAbove40: ">40",
    // isChecked: false,
    //  isChecked1: false,
    //  isChecked2: false,
    // isCheckedGenderMale: false,
    // isCheckedGenderFemale: false,
    // isCheckedTime: false,
    // isCheckedTime2: false,

    // }
    const setOpen1 = (bool) => {

        setOpen(bool);
        setAge18To40(null);
        setAgeBelow18(null);
        setAgeAbove40(null);

        // this.setState(
        //     {
        //         open: bool,
        //         age18To40: null,
        //         ageBelow18: null,
        //         ageAbove40: null,
        //         Male: null,
        //         Female: null
        //     }
        // )
    }

    const handleChangeAge = (e, value) => {
        const fillData = filteredDataList.concat(props.tableData.filter(({ Channel }) => Channel == value.value));
        console.log(value);
        console.log(e);
        if (value.value == "Mobile") {
            if (value.checked == true) {
                setAgeBelow18(value.value);
                setFilteredDataList(fillData);
                setIsChecked(!isChecked);
            }
            else {
                //   console.log(filteredDataList.length)              
                for (var i = filteredDataList.length - 1; i >= 0; i--) {
                    if (filteredDataList[i].Channel == value.value) filteredDataList.splice(i, 1);
                };
                setIsChecked(!isChecked);
            }
        }
        if (value.value == "IVR") {
            if (value.checked == true) {
                setFilteredDataList(fillData);
                setIsChecked1(!isChecked1);
            }
            else {
                for (var i = filteredDataList.length - 1; i >= 0; i--) {
                    if (filteredDataList[i].Channel == value.value) filteredDataList.splice(i, 1);
                };
                setIsChecked1(!isChecked1);
            }
        }
        if (value.value == "Call Center") {
            if (value.checked == true) {
                setFilteredDataList(fillData);
                setIsChecked2(!isChecked2);
            }
            else {
                for (var i = filteredDataList.length - 1; i >= 0; i--) {
                    if (filteredDataList[i].Channel == value.value) filteredDataList.splice(i, 1);
                };
                setIsChecked2(!isChecked2);
            }
        }
        if (value.value == "ChatBot") {
            if (value.checked == true) {
                setFilteredDataList(fillData);
                setIsChecked3(!isChecked3);
            }
            else {
                for (var i = filteredDataList.length - 1; i >= 0; i--) {
                    if (filteredDataList[i].Channel == value.value) filteredDataList.splice(i, 1);
                };
                setIsChecked3(!isChecked3);
            }
        }
    

        // this.setState({ isChecked: !this.state.isChecked })

    }

    const handleChangeAge1 = (e, value) => {
        if (value.checked == true) {
            // this.setState({ age18To40: value.value })
            setAge18To40(value.value);
            setFilteredDataList(data.filter(({ Channel }) => Channel == value.value));

        }
        else if (value.checked == false) {
            setFilteredDataList(data.filter(({ Channel }) => Channel != value.value));
        }
        // this.setState({ isChecked1: !this.state.isChecked1 })
        setIsChecked1(!isChecked1);
    }
    const handleChangeAge2 = (e, value) => {
        if (value.checked == true) {
            // this.setState({ ageAbove40: value.value })
            setAgeAbove40(value.value);
            setFilteredDataList(data.filter(({ Channel }) => Channel == value.value));
        }
        else if (value.checked == false) {
            setFilteredDataList(data.filter(({ Channel }) => Channel != value.value));
        }
        // this.setState({ isChecked2: !this.state.isChecked2 })
        setIsChecked2(!isChecked2);
    }
    const handleChangeAge3 = (e, value) => {
        if (value.checked == true) {
            // this.setState({ ageAbove40: value.value })
            setAgeAbove40(value.value);
            setFilteredDataList(data.filter(({ Channel }) => Channel == value.value));
        }
        else if (value.checked == false) {
            setFilteredDataList(data.filter(({ Channel }) => Channel != value.value));
        }
        // this.setState({ isChecked2: !this.state.isChecked2 })
        setIsChecked3(!isChecked3);
    }
    const handleGenderMale = (e, { name, value }) => {
        if (value.checked == true) {
            this.setState({
                [name]: value
            })
        }
        // this.setState({ isCheckedGenderMale: !this.state.isCheckedGenderMale })
        setIsCheckedGenderMale(!isCheckedGenderMale);

    }
    const handleGenderFemale = (e, { name, value }) => {
        if (value.checked == true) {
            this.setState({
                [name]: value
            })
        }
        // this.setState({ isCheckedGenderFemale: !this.state.isCheckedGenderFemale })
        setIsCheckedGenderFeMale(!isCheckedGenderFeMale);

    }

    const handleChangeTime = (e, { value }) => {
        if (value.checked == true) {
            // this.setState({ time: value })
            setTime(value);
        }
        // this.setState({ isCheckedTime: !this.state.isCheckedTime })
        setIsCheckedTime(!isCheckedTime);
    }


    //const filterdDataList = isChecked ? data.filter(({ Channel }) => Channel == "Mobile") : data;


    const handleSubmit = () => {
        props.datacallback(filteredDataList);
        console.log(filteredDataList)


        //    setData(filteredDataList);
        //  this.props.getFormFilterData(this.state)
        // this.setState(
        //     {
        //         open: false,
        //         age18To40: null,
        //         ageBelow18: null,
        //         ageAbove40: null
        //     }
        // )
        setOpen(false);
        setAge18To40(null);
        setAgeBelow18(null);
        setAgeAbove40(null);
    }

    const unChecked = () => {
        // this.setState(
        //     {
        //         isChecked: false,
        //         isChecked1: false,
        //         isChecked2: false,
        //         isCheckedGenderMale: false,
        //         isCheckedGenderFemale: false
        //     }
        // )
        setIsChecked(false);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsCheckedGenderMale(false);
        setIsCheckedGenderFeMale(false);
        setFilteredDataList(dataList);
    }

    const handleResultSelect = (e, { result }) => {
        console.log(result.title)
        // this.setState({ value: result.title })
        setValue(result.title);
        props.getFormFilterData(this.state)
    }
    const handleSearchChange = (e, { value }) => {
        // this.setState({ isLoading: true, value })
        setIsLoading(true);
        setValue(value);
        setTimeout(() => {
            if (value.length < 1) return null;
            //this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(value), 'i')
            const isMatch = (result) => re.test(result.title)

            // this.setState({
            //     isLoading: false,
            //     results: _.filter(counties, isMatch),
            // })
            setIsLoading(false);
            setResults(_.filter(counties, isMatch));

        }, 300)
    }

    //  const { isLoading, value, results } = this.state
    return (

        <Grid>
            <Grid.Row columns={1}>
                <Grid.Column textAlign='right'>
                    <Modal
                        onClose={() => setOpen1(false)}
                        onOpen={() => setOpen1(true)}
                        open={open}
                        trigger=
                        {
                            <Button>Advance Filter</Button>
                        }
                    >
                        <Modal.Header>Advance Filter</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Form>
                                    <Grid>

                                        <Grid.Row columns={2}>

                                            <Grid.Column width={'8'}>
                                                <Grid>
                                                    <Grid.Row columns={1}>
                                                        <Grid.Column textAlign={'center'}>

                                                            <label><b>Channel</b></label>
                                                        </Grid.Column>
                                                        <Grid.Row>
                                                            <Form.Group grouped>

                                                                <Form.Field>
                                                                    <Checkbox
                                                                        label='Mobile'
                                                                        value={'Mobile'}
                                                                        name={'Mobile'}
                                                                        checked={isChecked}
                                                                        onChange={(e, value) => handleChangeAge(e, value)}

                                                                    ></Checkbox>
                                                                </Form.Field>
                                                                <Form.Field>
                                                                    <Checkbox
                                                                        label='IVR'
                                                                        value={'IVR'}
                                                                        name={'IVR'}
                                                                        checked={isChecked1}
                                                                        onChange={(e, value) => handleChangeAge(e, value)}

                                                                    ></Checkbox>
                                                                </Form.Field>
                                                                <Form.Field>
                                                                    <Checkbox
                                                                        label='Call Center'
                                                                        value={'Call Center'}
                                                                        name={'Call Center'}
                                                                        checked={isChecked2}
                                                                        onChange={(e, value) => handleChangeAge(e, value)}

                                                                    ></Checkbox>
                                                                </Form.Field>
                                                                <Form.Field>
                                                                    <Checkbox
                                                                        label='ChatBot'
                                                                        name='ChatBot'
                                                                        value={'ChatBot'}
                                                                        checked={isChecked3}
                                                                        onChange={(e, value) => handleChangeAge(e, value)}

                                                                    ></Checkbox>
                                                                </Form.Field>

                                                            </Form.Group>

                                                        </Grid.Row>
                                                    </Grid.Row>

                                                </Grid>

                                            </Grid.Column>
                                            <Grid.Column>
                                                <Form.Group grouped>

                                                    <Grid>
                                                        <Grid.Row columns={1}>
                                                            <Grid.Column textAlign={'center'}>

                                                                <label><b>Date</b></label>
                                                            </Grid.Column>
                                                        </Grid.Row>
                                                        <Grid.Row columns={2}>
                                                            <Grid.Column width={'8'}>
                                                                <h4>Start Date</h4>
                                                                <Form.Field>
                                                                    <DatePicker />
                                                                </Form.Field>
                                                            </Grid.Column >
                                                            <Grid.Column width={'8'}>
                                                                <h4>End Date</h4>
                                                                <Form.Field>
                                                                    <DatePicker />
                                                                </Form.Field>
                                                            </Grid.Column>
                                                        </Grid.Row>
                                                    </Grid>





                                                </Form.Group>
                                            </Grid.Column>

                                        </Grid.Row>

                                    </Grid>


                                    {/* <Form.Field onClick={this.handleSubmit} control={Button}>Apply</Form.Field> */}
                                </Form><br></br>
                                <Button onClick={handleSubmit} type='Apply'>Apply</Button>
                                <Button onClick={unChecked} type='Clear'>Clear</Button>
                            </Modal.Description>
                        </Modal.Content>

                    </Modal>
                </Grid.Column>

            </Grid.Row>
        </Grid>


    )
}
export default UnifiedFilter;




