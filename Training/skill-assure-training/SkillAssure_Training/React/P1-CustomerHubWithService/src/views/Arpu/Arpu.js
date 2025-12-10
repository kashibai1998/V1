import React from 'react';
// import { connect } from 'react-redux';
import { Card, Grid, Segment } from 'semantic-ui-react';
import ArpuTimelineComponent from '../../widgetComponents/ArpuComponent/ArpuTimelineComponent/ArpuTimelineComponent';
import ArpuTrendComponent from '../../widgetComponents/ArpuComponent/ArpuTrendComponent/ArpuTrendComponent';
import CallToRevRatioComponent from '../../widgetComponents/ArpuComponent/CallToRevRatioComponent/CallToRevRatioComponent';
// import FilterComponent from '../../widgetComponents/ArpuComponent/FilterComponent/FilterComponent';
import GoogleMapComponent from '../../widgetComponents/ArpuComponent/GoogleMapComponent/GoogleMapComponent';
import ArpuModalWindowFilter from '../../widgetComponents/ArpuComponent/ArpuModalWindowFilter/ArpuModalWindowFilter';
// import LandingPage from '../../widgetComponents/ArpuComponent/GoogleMapComponentNew/LandingPage'
import FactorsAffecting from '../../widgetComponents/ArpuComponent/FactorsAffecting/FactorsAffecting';
import USAarpuData from '../../mock/MapJson/UsStateArpuTrend.json'
import UKarpuData from '../../mock/MapJson/UkStateArpuTrend.json'
import factorAffecting from '../../mock/ArpuDashboard/FactorAffectingArpu.json'
class Arpu extends React.Component {
    state = {
        filterData: null,
        selectedCountry: "United Kingdom",
        data: USAarpuData,
        factorData: factorAffecting,
        UKdata: UKarpuData,
        arpuFactorData: factorAffecting[0].factorData[0].data,
        value: []
    }

    getFormFilterData = () => {

    }

    getFormFilterData = (data) => {
        this.setState({
            filterData: data
        })
        console.log(data, "arpuFactorData")
        let factorData = this.state.factorData
        for (let i = 0; i < factorData.length; i++) {
            if (factorData[i].country === this.state.selectedCountry) {
                for (let j = 0; j < factorData[i].factorData.length; j++) {
                    let fac_data = factorData[i].factorData[j]
                    if (fac_data.time === data.Time && fac_data.age === data.age18To40 && fac_data.sex === data.male) {
                        this.setState({ arpuFactorData: fac_data.data })
                    }
                    else if (fac_data.time === data.Time && fac_data.age === data.age18To40 && fac_data.sex === data.female) {
                        this.setState({ arpuFactorData: fac_data.data })
                    }
                    else if (fac_data.time === data.Time && fac_data.age === data.ageBelow18 && fac_data.sex === data.male) {
                        this.setState({ arpuFactorData: fac_data.data })
                    }
                    else if (fac_data.time === data.Time && fac_data.age === data.ageBelow18 && fac_data.sex === data.female) {
                        this.setState({ arpuFactorData: fac_data.data })
                    }
                    else if (fac_data.time === data.Time && fac_data.age === data.ageAbove40 && fac_data.sex === data.male) {
                        this.setState({ arpuFactorData: fac_data.data })
                    }
                    else if (fac_data.time === data.Time && fac_data.age === data.ageAbove40 && fac_data.sex === data.female) {
                        this.setState({ arpuFactorData: fac_data.data })
                    }
                    else {
                        this.setState({ arpuFactorData: this.state.arpuFactorData })
                    }
                }
            }
        }
    }
    getCountryData = (data) => {
        this.setState({ selectedCountry: data })
        let factorData = this.state.factorData
        for (let i = 0; i < factorData.length; i++) {
            if (factorData[i].country === data) {
                this.setState({
                    arpuFactorData: factorData[i].factorData[0].data
                })
            }
        }
    }
    
    render() {
        const { filterData, selectedCountry } = this.state
        console.log(filterData, "fiterdata")

        if (filterData != null) {
            console.log(filterData.age18To40, "fiterdata")
            console.log(filterData.ageAbove40, "fiterdata")
            console.log(filterData.ageBelow18, "fiterdata")
        }
        console.log(selectedCountry, "country")
        let value = []
        let county = []
        let value0 = []
        let value1 = []
        let value2 = []
        if (selectedCountry === "United States") {
            console.log("herer")
            for (let i = 0; i < this.state.data.length; i++) {
                console.log(this.state.data[i].state[i]);

                if (this.state.data[i].date == "november") {
                    if (filterData != null && this.state.data[i].age === filterData.ageBelow18 && filterData.name == "Male") {
                        for (let j = 0; j < this.state.data[i].state.length; j++) {
                            value.push(this.state.data[i].state[j].properties.arpu_Male)
                        }
                    }
                    else if (filterData != null && this.state.data[i].age === filterData.ageBelow18 && filterData.name == "Female") {
                        for (let j = 0; j < this.state.data[i].state.length; j++) {
                            value.push(this.state.data[i].state[j].properties.arpu_Female)
                        }
                    } else {
                        for (let j = 0; j < this.state.data[i].state.length; j++) {
                            county.push(this.state.data[i].state[j].stateName)
                            value.push(this.state.data[i].state[j].properties.arpu_Avg)
                        }
                    }

                }
                if (this.state.data[i].date == "december") {
                    if (filterData != null && this.state.data[i].age === filterData.ageBelow18 && filterData.name == "Male") {
                        for (let j = 0; j < this.state.data[i].state.length; j++) {
                            value.push(this.state.data[i].state[j].properties.arpu_Male)
                        }
                    }
                    else if (filterData != null && this.state.data[i].age === filterData.ageBelow18 && filterData.name == "Female") {
                        for (let j = 0; j < this.state.data[i].state.length; j++) {
                            value.push(this.state.data[i].state[j].properties.arpu_Female)
                        }
                    } else {
                        for (let j = 0; j < this.state.data[i].state.length; j++) {
                            value.push(this.state.data[i].state[j].properties.arpu_Avg)
                        }
                    }

                }
                if (this.state.data[i].date == "january") {
                    if (filterData != null && this.state.data[i].age === filterData.ageBelow18 && filterData.name == "Female") {
                        for (let j = 0; j < this.state.data[i].state.length; j++) {
                            value.push(this.state.data[i].state[j].properties.arpu_Female)
                        }
                    }
                    else if (filterData != null && this.state.data[i].age === filterData.ageBelow18 && filterData.name == "Male") {
                        for (let j = 0; j < this.state.data[i].state.length; j++) {
                            value.push(this.state.data[i].state[j].properties.arpu_Male)
                        }
                    } else {
                        for (let j = 0; j < this.state.data[i].state.length; j++) {
                            value.push(this.state.data[i].state[j].properties.arpu_Avg)
                        }
                    }

                }
            }
        }
        if (selectedCountry === "United Kingdom") {
            console.log("herer")
            for (let i = 0; i < this.state.UKdata.length; i++) {
                console.log(this.state.UKdata[i].state[i]);

                if (this.state.UKdata[i].date == "november") {

                    if (filterData != null && this.state.UKdata[i].age === filterData.ageBelow18 && filterData.name == "Male") {
                        console.log(this.state.UKdata[i].state)
                        for (let j = 0; j < this.state.UKdata[i].state.length; j++) {
                            value.push(this.state.UKdata[i].state[j].properties.arpu_Male)
                            value0.push(this.state.UKdata[i].state[j].properties.arpu_Male)
                        }
                    }
                    else if (filterData != null && this.state.UKdata[i].age === filterData.ageBelow18 && filterData.name == "Female") {
                        console.log(this.state.UKdata[i].state)
                        for (let j = 0; j < this.state.UKdata[i].state.length; j++) {
                            value.push(this.state.UKdata[i].state[j].properties.arpu_Female)
                            value0.push(this.state.UKdata[i].state[j].properties.arpu_Female)
                        }
                    }
                    else {
                        for (let j = 0; j < this.state.UKdata[i].state.length; j++) {
                            county.push(this.state.UKdata[i].state[j].stateName)
                            value.push(this.state.UKdata[i].state[j].properties.arpu_Avg)
                            value0.push(this.state.UKdata[i].state[j].properties.arpu_Avg)
                        }
                    }


                }
                if (this.state.UKdata[i].date == "december") {
                    if (filterData != null && this.state.UKdata[i].age === filterData.ageBelow18 && filterData.name == "Male") {
                        for (let j = 0; j < this.state.UKdata[i].state.length; j++) {
                            value.push(this.state.UKdata[i].state[j].properties.arpu_Male)
                            value1.push(this.state.UKdata[i].state[j].properties.arpu_Male)
                        }
                    }
                    else if (filterData != null && this.state.UKdata[i].age === filterData.ageBelow18 && filterData.name == "Female") {
                        for (let j = 0; j < this.state.UKdata[i].state.length; j++) {
                            value.push(this.state.UKdata[i].state[j].properties.arpu_Female)
                            value1.push(this.state.UKdata[i].state[j].properties.arpu_Female)
                        }
                    } else {
                        for (let j = 0; j < this.state.UKdata[i].state.length; j++) {
                            value.push(this.state.UKdata[i].state[j].properties.arpu_Avg)
                            value1.push(this.state.UKdata[i].state[j].properties.arpu_Avg)
                        }
                    }

                }
                if (this.state.UKdata[i].date == "january") {
                    if (filterData != null && this.state.UKdata[i].age === filterData.ageBelow18 && filterData.name == "Male") {
                        for (let j = 0; j < this.state.UKdata[i].state.length; j++) {
                            value.push(this.state.UKdata[i].state[j].properties.arpu_Male)
                            value2.push(this.state.UKdata[i].state[j].properties.arpu_Male)
                        }
                    }
                    else if (filterData != null && this.state.UKdata[i].age === filterData.ageBelow18 && filterData.name == "Female") {
                        for (let j = 0; j < this.state.UKdata[i].state.length; j++) {
                            value.push(this.state.UKdata[i].state[j].properties.arpu_Female)
                            value2.push(this.state.UKdata[i].state[j].properties.arpu_Female)
                        }
                    } else {
                        for (let j = 0; j < this.state.UKdata[i].state.length; j++) {
                            value.push(this.state.UKdata[i].state[j].properties.arpu_Avg)
                            value2.push(this.state.UKdata[i].state[j].properties.arpu_Avg)
                        }
                    }


                }
            }
        }
        console.log(value)
        console.log(county)
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12} textAlign="center">
                            <h2><b>ARPU Dashboard</b></h2>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Grid.Row textAlign='right'>
                                <div style={{ textAlign: 'right' }}>
                                    <ArpuModalWindowFilter getFormFilterData={this.getFormFilterData} />
                                </div>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row stretched style={{ paddingTop: '0px' }} >
                        <Grid.Column width={10}>
                            <Segment>
                                <GoogleMapComponent filterData={filterData} getCountryData={this.getCountryData} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={6} >
                            <Grid.Row stretched>
                                <Segment>
                                    <FactorsAffecting arpuFactorData={this.state.arpuFactorData} />
                                </Segment>
                                <Segment>
                                    <ArpuTimelineComponent value={value} county={county} />
                                </Segment>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row stretched>
                        <Grid.Column width={10}>
                            <Segment>
                                <ArpuTrendComponent value={value0} value1={value1} value2={value2} county={county} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Segment>
                                <CallToRevRatioComponent value={value} county={county} />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Arpu;