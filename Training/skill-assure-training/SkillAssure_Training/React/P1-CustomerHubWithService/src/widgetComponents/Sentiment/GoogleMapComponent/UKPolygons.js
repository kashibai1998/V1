import { Layer, Popup, Source } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { Component } from 'react';
import ukdata from '../../../mock/MapJson/unitedkingdom.json';

class UKPolygons extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      viewport: {
        latitude: 37.912498,
        longitude: 95.484128,
        zoom: 2,
        show: false,
        geoJson: null
      }

    };

  }

  onClicked = () => {
    this.setState({
      geoJson: ukdata
    })
  }
  componentWillMount() {
    this.setState({
      geoJson: ukdata
    })
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    const abc = <Popup closeButton={false} closeOnClick={true}>
      <ul>Covid-19 details here <br />
                  Total confirmed cases: <br />
                   active cases:<br />
                  recovered cases:<br />
                  deaths:<br />
      </ul>

    </Popup>;
    console.log(abc);
  }

  clicked = (value, e) => {
    console.log(value, e.lngLat)
    this.props.getPopupData(value, e.lngLat.lng, e.lngLat.lat)
  }

  render() {
    let viewport = this.state.viewport;
    let UKPolygonsMultiFilter = this.props.stateFilterData
    return (
      <div className="App">
        {
          ukdata.features.map((item) => {
            return (
              <div>
                {
                  UKPolygonsMultiFilter.map((properties) => {
                    return (
                      <div>
                        {
                          properties.stateName === item.properties.county &&
                          <div>
                            <Source id={properties.stateName} type="geojson" data={item} />
                            {
                              properties.properties.sentiment_Avg < 80 && this.props.category=="Sentiment" &&
                              <Layer
                                id={properties.stateName}
                                type="fill"
                                source={properties.stateName}
                                onClick={(e) => this.clicked(properties, e)}
                                paint={{
                                  'fill-color': "lightgreen",
                                  'fill-opacity': properties.properties.sentiment_Avg / 300

                                }}>
                              </Layer>}
                            {
                              properties.properties.sentiment_Avg >= 80 && this.props.category=="Sentiment" &&
                              <div>
                                <Layer
                                  id={properties.stateName}
                                  type="fill"
                                  source={properties.stateName}
                                  onClick={(e) => this.clicked(properties, e)}
                                  paint={{
                                    'fill-color': "red",
                                    'fill-opacity': properties.properties.sentiment_Avg / 300

                                  }}>
                                </Layer>
                              </div>
                            }
                             {
                              properties.properties.nps_Avg >= 2.5 && this.props.category=="NPS" &&
                              <div>
                                <Layer
                                  id={properties.stateName}
                                  type="fill"
                                  source={properties.stateName}
                                  onClick={(e) => this.clicked(properties, e)}
                                  paint={{
                                    'fill-color': "lightgreen",
                                    'fill-opacity': properties.properties.nps_Avg /8

                                  }}>
                                </Layer>
                              </div>
                            }
                            {
                              properties.properties.nps_Avg < 2.5 && this.props.category=="NPS" &&
                              <div>
                                <Layer
                                  id={properties.stateName}
                                  type="fill"
                                  source={properties.stateName}
                                  onClick={(e) => this.clicked(properties, e)}
                                  paint={{
                                    'fill-color': "red",
                                    'fill-opacity': properties.properties.nps_Avg /8

                                  }}>
                                </Layer>
                              </div>
                            }
                            {
                              properties.properties.clv_Avg <165 && this.props.category=="CLV" &&
                              <div>
                                <Layer
                                  id={properties.stateName}
                                  type="fill"
                                  source={properties.stateName}
                                  onClick={(e) => this.clicked(properties, e)}
                                  paint={{
                                    'fill-color': "red",
                                    'fill-opacity': properties.properties.clv_Avg /250

                                  }}>
                                </Layer>
                              </div>
                            }
                            {
                              properties.properties.clv_Avg >=165 && this.props.category=="CLV" &&
                              <div>
                                <Layer
                                  id={properties.stateName}
                                  type="fill"
                                  source={properties.stateName}
                                  onClick={(e) => this.clicked(properties, e)}
                                  paint={{
                                    'fill-color': "lightgreen",
                                    'fill-opacity': properties.properties.clv_Avg /250

                                  }}>
                                </Layer>
                              </div>
                            }
                            {
                              properties.properties.rev_Avg <=50 && this.props.category=="REV" &&
                              <div>
                                <Layer
                                  id={properties.stateName}
                                  type="fill"
                                  source={properties.stateName}
                                  onClick={(e) => this.clicked(properties, e)}
                                  paint={{
                                    'fill-color': "lightgreen",
                                    'fill-opacity': properties.properties.rev_Avg /100

                                  }}>
                                </Layer>
                              </div>
                            }
                            {
                              properties.properties.rev_Avg >50 && this.props.category=="REV" &&
                              <div>
                                <Layer
                                  id={properties.stateName}
                                  type="fill"
                                  source={properties.stateName}
                                  onClick={(e) => this.clicked(properties, e)}
                                  paint={{
                                    'fill-color': "red",
                                    'fill-opacity': properties.properties.rev_Avg /100

                                  }}>
                                </Layer>
                              </div>
                            }

                          </div>
                        }
                      </div>

                    )
                  })
                }

              </div>
            );
          })
        }
      </div>
    );
  }
}

export default UKPolygons;
