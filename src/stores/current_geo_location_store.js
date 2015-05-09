import EventEmitter from "events"

import Dispatcher from "dispatcher"

import GeoLocationActions from "actions/geo_location_actions"

const CHANGE_EVENT = "change"

let _emitter = new EventEmitter()

let _currentGeoLocation = null

let CurrentGeoLocationStore = {

  get() {
    return _currentGeoLocation
  },

  set(loc) {
    _currentGeoLocation = loc
    this.emitChange()
  },

  emitChange() {
    _emitter.emit(CHANGE_EVENT)
  },

  addChangeListener(callback) {
    _emitter.on(CHANGE_EVENT, callback)
  },

  removeChangeListener(callback) {
    _emitter.removeListener(CHANGE_EVENT, callback)
  }
}

Dispatcher.register(function(action) {
  let type = action.actionType

  switch(type) {
    case GeoLocationActions.FOUND:
      CurrentGeoLocationStore.set(action.location)
      break

    default:
      //no op
  }
})

export default CurrentGeoLocationStore
