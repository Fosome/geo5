// DEPRECATED 
//

import EventEmitter from "events"
import request      from "superagent"

var _locations = []
var _emitter   = new EventEmitter()

const CHANGE_EVENT = "change"
const SYNC_EVENT   = "sync"
const URL          = "http://localhost:3000/geolocations"

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

  flush() {
    _emitter.emit(SYNC_EVENT, true)

    var response = request
      .get(URL)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        _emitter.emit(SYNC_EVENT, false)

        if (err) {
          console.log(err)
        }
        else {
          _locations = res.body
          _emitter.emit(CHANGE_EVENT)
        }
      })
  },

  addChangeListener(callback) {
    _emitter.on(CHANGE_EVENT, callback)
  },

  removeChangeListener(callback) {
    _emitter.removeListener(CHANGE_EVENT, callback)
  },

  addSyncListener(callback) {
    _emitter.on(SYNC_EVENT, callback)
  },

  removeSync(callback) {
    _emitter.removeListener(SYNC_EVENT, callback)
  }
}
