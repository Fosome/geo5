import EventEmitter from "events"
import Location     from "models/location"

var _locations = []
var _emitter = new EventEmitter()

const CHANGE_EVENT = "change"

export default {

  all() {
    return _locations
  },

  latest() {
    return _locations[0]
  },

  save(loc) {
    _locations.unshift(loc)
    _emitter.emit(CHANGE_EVENT)
    return true
  },

  addListener(callback) {
    _emitter.on(CHANGE_EVENT, callback)
  },

  removeListener(callback) {
    _emitter.removeListener(CHANGE_EVENT, callback)
  }
}
