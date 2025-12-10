import usdata from '../../../mock/MapJson/unitedstategeo.json';
import React, { Component } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGL, { Popup, Source, Layer, Marker } from '@urbica/react-map-gl';

class USPolygons extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
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
      geoJson: usdata
    })
  }
  componentWillMount() {
    this.setState({
      geoJson: usdata
    })
  }

  clicked = (value, e) => {
    console.log(value, e.lngLat)
    this.props.getPopupData(value, e.lngLat.lng, e.lngLat.lat)
  }

  render() {
    let viewport = this.state.viewport;
    let USPolygonsMultiFilter = this.props.stateFilterData
    return (
      <div className="App">

        {
          usdata.map((item) => {
            return (
              <div>
                {
                  USPolygonsMultiFilter.map((properties) => {
                    return (
                      <div>
                        {
                          properties.stateName === item.properties.county &&
                          <div>
                            <Source id={properties.stateName} type="geojson" data={item} />
                            <Layer
                              id={properties.stateName}
                              type="fill"
                              source={properties.stateName}
                              onClick={(e) => this.clicked(properties, e)}
                              paint={{
                                'fill-color': "lightgreen",
                                'fill-opacity': properties.properties.arpu_Avg / 300

                              }}>
                            </Layer>
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

export default USPolygons;
