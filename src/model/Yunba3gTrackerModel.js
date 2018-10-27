export class Yunba3gTrackerModel {
  constructor (timestamp, lockId, lat, lng) {
    this._timestamp = timestamp
    this._lockId = lockId
    this._lat = lat
    this._lng = lng
  }

  get timestamp () {
    return this._timestamp
  }

  set timestamp (value) {
    this._timestamp = value
  }

  get lockId () {
    return this._lockId
  }

  set lockId (value) {
    this._lockId = value
  }

  get lat () {
    return this._lat
  }

  set lat (value) {
    this._lat = value
  }

  get lng () {
    return this._lng
  }

  set lng (value) {
    this._lng = value
  }
}
