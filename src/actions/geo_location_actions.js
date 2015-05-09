import Dispatcher from "dispatcher"


let GeoLocationActions = {

  FOUND: "FOUND_GEO_LOCATION",

  found(location) {
    Dispatcher.dispatch({
      actionType: this.FOUND,
      location:   location
    })
  }
}

export default GeoLocationActions
