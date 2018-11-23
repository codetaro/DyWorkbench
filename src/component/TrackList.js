import React from 'react'
import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemPrimaryText
} from '@rmwc/list'
import { Checkbox } from '@rmwc/checkbox'
import { Button } from '@rmwc/button'

import { Yunba3gTrackerParser } from '../parser/Yunba3gTrackerParser'

import '@material/list/dist/mdc.list.css'
import '@material/checkbox/dist/mdc.checkbox.css'
import '@material/form-field/dist/mdc.form-field.css'
import '@material/button/dist/mdc.button.css'

import './TrackList.css'

export default class TrackList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      posArr: [],
      idxArr: []
      // pltArr: []
    }
    this.handleReloadClick = this.handleReloadClick.bind(this)
    this.handlePlotClick = this.handlePlotClick.bind(this)
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
  }

  handleReloadClick (event) {
    this.clearState()

    // const cors = 'https://cors-anywhere.herokuapp.com/'
    const endpoint = 'http://abj-elogic-test1.yunba.io:49152/check_gps_log?id='
    // let device1Id = 'a84bcda2' // device1 was broken
    let device2Id = '777d6337'

    // fetch(cors + endpoint + device2Id)
    fetch(endpoint + device2Id)
      .then((response) => {
        return response.text()
      })
      .then((text) => {
        if (text !== '') { this.setState({ posArr: text.trim().split('\n') }) }
      })
  }

  handlePlotClick (event) {
    // TODO
  }

  handleCheckboxClick (event, index) {
    if (event.target.checked) {
      this.state.idxArr.push(index)
    } else {
      let idx = this.state.idxArr.indexOf(index)
      this.state.idxArr.splice(idx, 1)
    }

    this.state.idxArr.sort((a, b) => {
      if (parseInt(a) < parseInt(b)) return -1
      if (parseInt(a) > parseInt(b)) return 1
      if (parseInt(a) === parseInt(b)) return 0
    })
    let pltArr = this.state.idxArr.map(idx =>
      Yunba3gTrackerParser.parse(this.state.posArr[idx])
    )
    this.props.map.current.setState({
      pltArr: pltArr
    })
  }

  render () {
    return (
      <div>
        <List id={'tracklist'}>
          {this.state.posArr.map((element, index) => (
            <ListItem key={this.constructor.name + index}>
              <ListItemGraphic icon={<Checkbox onClick={(e) => { this.handleCheckboxClick(e, index) }} />} />
              <ListItemPrimaryText>{element}</ListItemPrimaryText>
            </ListItem>
          ))}
          {/*
          <ListItem onClick={() => this.setState({cookiesChecked: !this.state.cookiesChecked})}>
            <ListItemGraphic icon={<Checkbox checked={this.state.cookiesChecked}/>}/>
            Cookies
          </ListItem>
          */}
        </List>
        <Button raised onClick={this.handleReloadClick}>Reload</Button>
        {/* <Button raised onClick={this.handlePlotClick}>Plot</Button> */}
      </div>
    )
  }

  // helper methods
  clearState () {
    this.setState({
      posArr: [],
      idxArr: []
      // pltArr: []
    })

    this.props.map.current.setState({
      pltArr: []
    })
  }
}
