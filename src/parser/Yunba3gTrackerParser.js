import { Yunba3gTrackerModel } from '../model/Yunba3gTrackerModel'

export class Yunba3gTrackerParser {
  static parse (str) {
    let rstArr = this.re.exec(str)
    let timestamp = new Date(rstArr[1] + 'GMT+0800')
    let lockId = parseInt(rstArr[2], 16)
    let gpsInfo = rstArr[3].split(',')
    let [lat, lng] = this._parsePosition(gpsInfo)

    return new Yunba3gTrackerModel(timestamp, lockId, lat, lng)
  }

  // helper method
  static _parsePosition (posArray) {
    let lat, lng
    lat = (posArray[1] === 'N' ? posArray[0] : '-' + posArray[0]) / 100
    lng = (posArray[3] === 'E' ? posArray[2] : '-' + posArray[2]) / 100
    return [lat, lng]
  }
}

Yunba3gTrackerParser.re = /(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}\.\d{3}).+<<"(.+)">>.+<<"(.+)">>/
