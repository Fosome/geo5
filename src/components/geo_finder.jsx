import React                    from "react"

import GeoCoordinates           from "components/geo_coordinates"
import FindLocationButton       from "components/find_location_button"
import FindSpinner              from "components/find_spinner"

import CurrentGeoLocationStore  from "stores/current_geo_location_store"

let GeoFinder = React.createClass({

  getInitialState() {
    return {
      currentGeoLocation: CurrentGeoLocationStore.get(),
      finding: false
    }
  },

  componentDidMount() {
    CurrentGeoLocationStore.addChangeListener(this._onChange)
  },

  componentWillUnmount() {
    CurrentGeoLocationStore.removeChangeListener(this._onChange)
  },

  render() {
    return (
      <div>
        <GeoCoordinates location={this.state.currentGeoLocation} />

        <br/>

        <FindLocationButton onFinding={this._updateFinding} onMessage={this._updateFlash} />
        <FindSpinner active={this.state.finding} />
      </div>
    )
  },

  _onChange() {
    this.setState({
      currentGeoLocation: CurrentGeoLocationStore.get(),
    })
  },

  _updateFinding(value) {
    this.setState({
      finding: value
    })
  },

  _updateFlash(message) {
    this.props.onMessage(message)
  }
})

export default GeoFinder
