import EventEmitter       from "events"
import request            from "superagent"

import Dispatcher         from "dispatcher"

import GeoLocation        from "models/geo_location"

import GeoLocationActions from "actions/geo_location_actions"

const CHANGE_EVENT = "change"
const URL          = "http://localhost:3000/geolocations"

let _emitter = new EventEmitter()

let _recentHistory = []

let RecentHistoryGeoLocationStore = {

  all() {
    return _recentHistory
  },

  add(loc) {
    _recentHistory.unshift(loc)
    this._emitChange()
  },

  addChangeListener(callback) {
    _emitter.on(CHANGE_EVENT, callback)
  },

  removeChangeListener(callback) {
    _emitter.removeListener(CHANGE_EVENT, callback)
  },

  sync() {
    var response = request
      .get(URL)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          console.log(err)
        }
        else {
          _recentHistory = res.body.map(function (r) {
            return new GeoLocation(r.latitude, r.longitude)
          })
          _emitter.emit(CHANGE_EVENT)
        }
      })
  },

  _emitChange() {
    _emitter.emit(CHANGE_EVENT)
  }
}

Dispatcher.register(function(action) {
  let type = action.actionType

  switch(type) {
    case GeoLocationActions.FOUND:
      RecentHistoryGeoLocationStore.add(action.location)
      break
    
    default:
      //no op
  }
})

export default RecentHistoryGeoLocationStore
