import React              from "react"
import GeoHeader          from "components/geo_header"
import Flash              from "components/flash"
import GeoCoordinates     from "components/geo_coordinates"
import FindLocationButton from "components/find_location_button"
import FindSpinner        from "components/find_spinner"

export default React.createClass({

  getInitialState() {
    return {
      flashMessage: null,
      finding: false,
      latitude: null,
      longitude: null
    }
  },

  render() {
    return (
      <div>
        <GeoHeader />
        <Flash message={this.state.flashMessage} />
        <GeoCoordinates latitude={this.state.latitude} longitude={this.state.longitude} />
        <br/><br/>
        <FindLocationButton onFinding={this.updateFinding} onFound={this.updateLocation} onMessage={this.updateFlash} />
        <FindSpinner finding={this.state.finding} />
      </div>
    );
  },

  updateFlash(message) {
    this.setState({
      flashMessage: message
    })
  },

  updateFinding(value) {
    this.setState({
      finding: value
    })
  },

  updateLocation(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }
})
