import React from 'react'

import MapView from '../component/MapView'
import TrackList from '../component/TrackList'

export default class Yunba3gTracker extends React.Component {
  constructor (props) {
    super(props)
    this.mapview = React.createRef()
    this.tracklist = React.createRef()
  }

  render () {
    return (
      <div>
        <MapView ref={this.mapview} />
        <TrackList
          ref={this.tracklist}
          map={this.mapview}
        />
      </div>
    )
  }
}
