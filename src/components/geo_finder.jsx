import React              from "react"
import GeoCoordinates     from "components/geo_coordinates"
import FindLocationButton from "components/find_location_button"
import FindSpinner        from "components/find_spinner"
import Locations          from "stores/locations"
import Location           from "models/location"

export default React.createClass({

  getInitialState() {
    return {
      currentLocation: null,
      finding: false,
    }
  },

  render() {
    return (
      <div>
        <GeoCoordinates location={this.state.currentLocation} />
        <br/>
        <FindLocationButton onFinding={this.updateFinding} onFound={this.updateLocation} onMessage={this.updateFlash} />
        <FindSpinner finding={this.state.finding} />
      </div>
    )
  },

  updateFinding(value) {
    this.setState({
      finding: value
    })
  },

  updateLocation(position) {
    var loc = new Location(
      position.coords.latitude,
      position.coords.longitude
    )

    Locations.save(loc)

    this.setState({
      currentLocation: loc
    })
  },

  updateFlash(message) {
    this.props.onMessage(message)
  }
})
