import React              from "react"
import GeoHeader          from "components/geo_header"
import GeoCoordinates     from "components/geo_coordinates"
import FindLocationButton from "components/find_location_button"
import FindSpinner        from "components/find_spinner"

export default React.createClass({

  getInitialState: function() {
    return {
      finding: false,
      latitude: null,
      longitude: null
    }
  },

  render: function() {
    return (
      <div>
        <GeoHeader />
        <GeoCoordinates latitude={this.state.latitude} longitude={this.state.longitude} />
        <br/><br/>
        <FindLocationButton onFinding={this.updateFinding} onFound={this.updateLocation} />
        <FindSpinner finding={this.state.finding} />
      </div>
    );
  },

  updateFinding: function(value) {
    this.setState({
      finding: value
    })
  },

  updateLocation: function(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }
})
