import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import { key } from '../res/config'

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `600px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap,
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: -34.397, lng: 150.644}}
  >
    {props.pltArr.map(mkr => (
      <Marker key={mkr.timestamp} position={{lat: mkr.lat, lng: mkr.lng}} onClick={props.handleMarkerClick}/>
    ))}
  </GoogleMap>
)

export default class MapView extends React.PureComponent {
  state = {
    pltArr: []
  }

  componentDidMount () {
    // TODO
  }

  /*
  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true})
    }, 3000)
  }
  */

  handleMarkerClick = () => {
    // TODO
  }

  render () {
    return (
      <MapComponent
        pltArr={this.state.pltArr}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
