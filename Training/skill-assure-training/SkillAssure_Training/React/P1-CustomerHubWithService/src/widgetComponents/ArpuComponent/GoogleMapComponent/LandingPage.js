import MapGL, { Layer, Popup, Source } from '@urbica/react-map-gl';
import { Card, Divider, Progress, List } from 'antd';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { Component } from 'react';
import { Dropdown, Grid, Table } from 'semantic-ui-react';
import './LandingPage.css';
import UKPolygons from './UKPolygons';
import USPolygons from './USPolygons';
import UKPolygonsProperty from '../../../mock/MapJson/UkStateSeriesNew.json';
import USPolygonsProperty from '../../../mock/MapJson/UsStateSeriesNew.json'


const states = [
  {
    key: 'United States',
    text: 'United States',
    value: 'United States',
  },
  {
    key: 'United Kingdom',
    text: 'United Kingdom',
    value: 'United Kingdom',
  }]

const categories = [
  {
    key: 'Sentiment',
    text: 'Sentiment',
    value: 'Sentiment',
  },
  {
    key: 'NPS',
    text: 'NPS',
    value: 'NPS',
  },
  {
    key: 'CLV',
    text: 'CLV',
    value: 'CLV',
  },
  {
    key: 'REV',
    text: 'REV',
    value: 'REV',
  }
]

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 52.633331,
        longitude: -1.133333,
        zoom: 4,
        show: true,
        geoJson: null


      },
      category: 'Sentiment',
      latitude: 52.633331,
      longitude: -1.133333,
      region: 'United Kingdom',
      nslaBreach: 15,
      njobCompleted: 18,
      nrightFirstTime: 57,
      ncustomerSatisfaction: 78,
      customerSatisfaction: 0,
      slaBreach: 0, jobCompleted: 0, rightFirstTime: 0,

      value: [],
      radius: 1,
      users: [],
      user: null,
      i: 0,
      kpi: "SLA KPI",
      iconUser: null,
      statename: ""
    }

  }


  getPopupData = (data, lng, lat) => {
    this.setState({
      popupData: data,
      latitude: lat,
      longitude: lng

    })
  }


  handleChange = (e, { value }) => {
    this.setState({ region: value });
    this.props.getRegionValue(value)
    if (value === "United Kingdom") {
      this.setState({
        viewport: {
          latitude: 52.633331,
          longitude: -1.133333,
          zoom: 4,
          show: true,
          geoJson: null,
        },
        slaBreach: 12,
        jobCompleted: 20,
        rightFirstTime: 40,
        customerSatisfaction: 70,
        i: 3



      });
    }
    else if (value === "United States") {
      this.setState({
        viewport: {
          latitude: 37.0902,
          longitude: -95.7129,
          zoom: 3,
          show: true,
          geoJson: null

        },
        nslaBreach: 15,
        njobCompleted: 18,
        nrightFirstTime: 57,
        i: 0,
        ncustomerSatisfaction: 78

      });
    }
    else {
      {
        this.setState({
          viewport: {
            latitude: 20.593684,
            longitude: 78.96288,
            zoom: 4,
            show: true,
            geoJson: null
          },
          i: 5

        });
      }

    }
  }

  handleChangeCategory = (e, { value }) => {
    this.setState({
      category: value
    })
  }

  mapClick = (e, data) => {
    console.log(data)
    this.setState({
      slaBreach: data.slaBreach,
      jobCompleted: data.jobCompleted,
      rightFirstTime: data.rightFirstTime,
      customerSatisfaction: data.customerSatisfaction,
      county: data.county,
      statename: e.features[0].layer.id

    })
  }
  handlehover = (e, data) => {
    console.log(data)
    this.setState({
      latitude: e.lngLat.lat,
      longitude: e.lngLat.lng,
      val: data,

    })
  }

  onClose = () => {

  }


  filterObjectKeys = (field, i) => {
    console.log(field)
    const { popupData } = this.state
    let filteredObject = {}
    let filteredProperties = {}
    let dummyObj = popupData.properties
    Object.keys(dummyObj).forEach(key => {
      console.log(key)
      if (key.toLowerCase().split("_")[i] == field.toLowerCase()) {
        console.log(key)
        filteredProperties[key] = dummyObj[key];
      }
    });
    filteredObject.stateName = popupData.stateName
    filteredObject.properties = filteredProperties
    return filteredObject;
  }

  sumObjectsByKey = (objs) => {
    return objs.reduce((a, b) => {
      for (let k in b) {
        if (b.hasOwnProperty(k))
          a[k] = ((a[k] || 0) + b[k]) / 2;
      }
      return a;
    }, {});
  }

  filterDataAgeDate = (region) => {
    let stateData = [];
    if (region == 'United Kingdom') {
      stateData = UKPolygonsProperty
    }
    else {
      stateData = USPolygonsProperty
    }

    console.log(stateData, "stateData");


    let filterData = this.props.filterData
    let stateDataFilter = []

    console.log(stateData[0].state, "stateData")
    if (filterData != undefined) {
      console.log(stateData[0].state[0], "stateData")
      for (let i = 0; i < stateData.length; i++) {
        console.log(stateData[i], filterData)
        if (filterData.ageBelow18 == stateData[i].age && filterData.Time == stateData[i].date) {
          for (let k = 0; k < stateData[i].state.length; k++) {
            stateDataFilter.push(stateData[i].state[k]);
          }
        }
        else if (filterData.age18To40 == stateData[i].age && filterData.Time == stateData[i].date) {
          for (let k = 0; k < stateData[i].state.length; k++) {
            stateDataFilter.push(stateData[i].state[k]);
          }
        }
        else if (filterData.ageAbove40 == stateData[i].age && filterData.Time == stateData[i].date) {
          for (let k = 0; k < stateData[i].state.length; k++) {
            stateDataFilter.push(stateData[i].state[k]);
          }
        }
        else{
          for (let k = 0; k < stateData[i].state.length; k++) {
            stateDataFilter.push(stateData[i].state[k]);
          }
        }
      }
      console.log(stateDataFilter, "stateData")
    }
    let stateDataMultiFilter = []
    let tempArray = []
    let county;
    for (let i = 0; i < stateData[0].state.length; i++) {
      for (let k = 0; k < stateDataFilter.length; k++) {
        if (stateData[0].state[i].stateName === stateDataFilter[k].stateName) {
          tempArray.push(stateDataFilter[k].properties);
          county = stateDataFilter[k].stateName
        }
      }
      let obj = {
        stateName: county,
        properties: this.sumObjectsByKey(tempArray)
      }
      // console.log(obj, "stateData")
      stateDataMultiFilter.push(obj);
    }
    console.log(stateDataMultiFilter,"stateData")
    for (let i = 0; i < stateDataFilter.length; i++) {
      if (stateDataFilter[i].stateName == "Greater London") {
        console.log(stateDataFilter[i].properties.arpu_Male)
      }
    }
    console.log(stateDataFilter)
    console.log(filterData)
    return stateDataMultiFilter;
  }

  countyHighestPrpertyValue = (value, stateFilterData, position) => {
    let arr = []
    for (let i = 0; i < stateFilterData.length; i++) {
      arr.push(stateFilterData[i].properties[value])
    }
    return Math.round(arr.sort()[position] * 100) / 100;
  }

  render() {
    const { kpivalue, viewport, region, popupData, category } = this.state;
    let filterData = this.props.filterData
    console.log(filterData,"filterData")
    // filter data with age and time
    console.log(region, "stateFilterData")
    let stateFilterData = this.filterDataAgeDate(region)
    let filterWithCategories = []
    if (popupData != undefined) {
      filterWithCategories = this.filterObjectKeys(category, 0)
      if (filterData.male == 'Male') {
        filterWithCategories = this.filterObjectKeys('Male', 1)
      }
      if (filterData.female == 'Female') {
        filterWithCategories = this.filterObjectKeys('Female', 1)
      }
    }
    else {
      filterWithCategories = popupData
    }

    console.log()


    console.log(stateFilterData, "stateFilterData")
    return (

      <div className="App" style={{ padding: '20px' }}>
        <Grid>
          <Grid.Row >
            <Grid.Column width={16}>
              <div className="googleMap">

                <MapGL
                  style={{ height: '80vh' }}
                  mapStyle="mapbox://styles/mapbox/light-v9"
                  accessToken='pk.eyJ1Ijoic2h1YmhhbmthcnMiLCJhIjoiY2s4aWJ5eHhpMDA3ajNtbzA1eWVvZTJvYiJ9.CGc1fY4fMRcaMYiDUIhkEw'
                  onViewportChange={(viewport) => this.setState({ viewport })}

                  {...viewport}
                >
                  <Source id='water' type='vector' url='mapbox://mapbox.mapbox-streets-v11' />
                  <Layer
                    id='water'
                    type='polygon'
                    source='mapbox-streets'
                    source-layer='water'
                    paint={{
                      'line-color': '#FFFFFF',
                      'line-width': 1
                    }}
                  />
                  <Grid >
                    <Grid.Row style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <Grid.Column width={4}>
                        <Dropdown
                          placeholder='United Kingdom'
                          fluid
                          selection
                          value={region}
                          onChange={this.handleChange}
                          options={states}
                        />
                      </Grid.Column>
        
                    </Grid.Row>
                  </Grid >
                  <USPolygons kpi={this.state.kpi} getPopupData={this.getPopupData} stateFilterData={stateFilterData} handlehover={this.handlehover} mapClick={this.mapClick} />
                  <UKPolygons kpi={this.state.kpi} getPopupData={this.getPopupData} stateFilterData={stateFilterData} handlehover={this.handlehover} mapClick={this.mapClick} />
                  {/* <Popup
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    closeButton={false}
                    closeOnClick={false}
                    onClose={this.onClose}
                  >
                    {
                      filterWithCategories != undefined &&
                      <div>
                        <h3>{filterWithCategories.stateName}</h3>
                        <List>
                          {
                            filterData.Male == 'Male' &&
                            <div>
                              <List.Item>ARPU male:{filterWithCategories.properties.arpu_Male}</List.Item>
                            </div>
                          }
                          {
                             filterData.Female == 'Female' &&
                            <div>
                              <List.Item>ARPU female:{filterWithCategories.properties.arpu_Female}</List.Item>
                            </div>
                          }
                          {
                            filterData.Male == undefined && filterData.Female == undefined &&
                            <div>
                              <List.Item>ARPU male:{filterWithCategories.properties.arpu_Male}</List.Item>
                              <List.Item>ARPU female:{filterWithCategories.properties.arpu_Female}</List.Item>
                              <List.Item>ARPU avg:{filterWithCategories.properties.arpu_Avg}</List.Item>
                            </div>
                          }



                         

                       
                        </List>

                      </div>
                    }
                  </Popup> */}
                  <div id="state-legend" class="legend">
                  <div><span style={{ "backgroundColor": "lightgreen" }}></span>{"ARPU Value >=75"}</div>
                    <div><span style={{ "backgroundColor": "red" }}></span>{"ARPU Value <=75"}</div>
                    
                  </div>
                </MapGL>
              </div>
            </Grid.Column>
            <Grid.Column width={5}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;