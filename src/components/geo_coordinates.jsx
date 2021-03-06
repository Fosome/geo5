import React from "react"

export default React.createClass({

  render() {
    return (
      <div style={{ "marginTop": 20 }}>
        <div style={{ "fontSize": 16 }}>
          <b>Latitude</b>: { this._currentLatitude() }
        </div>

        <div style={{ "fontSize": 16 }}>
          <b>Longitude</b>: { this._currentLongitude() }
        </div>
      </div>
    )
  },

  _currentLatitude() {
    return this.props.location ?
      this.props.location.latitude :
      <span className="glyphicon glyphicon-remove"/>
  },

  _currentLongitude() {
    return this.props.location ?
      this.props.location.longitude :
      <span className="glyphicon glyphicon-remove"/>
  },
})
