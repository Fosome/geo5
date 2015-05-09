import React              from "react"
import Modernizr          from "modernizr"

import GeoLocation        from "models/geo_location"

import GeoLocationActions from "actions/geo_location_actions"

export default React.createClass({

  render: function() {
    return (
      <button className="btn btn-primary" onClick={this._find}>
        Find Location
      </button>
    )
  },

  _find: function(e) {
    this.props.onFinding(true)

    if(Modernizr.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._findSuccess,
        this._findError, 
        {
          enableHighAccuracy: true
        }
      )
    }
    else {
      this.findError()
    }
  },

  _findSuccess: function(position) {
    this.props.onFinding(false)

    let loc = new GeoLocation(
      position.coords.latitude,
      position.coords.longitude
    )

    GeoLocationActions.found(loc)
  },

  _findError: function() {
    this.props.onFinding(false)
    this.props.onMessage("Location unavailable")
  }
})
