import React              from "react"
import GeoHeader          from "components/geo_header"
import Flash              from "components/flash"
import GeoCoordinates     from "components/geo_coordinates"
import FindLocationButton from "components/find_location_button"
import FindSpinner        from "components/find_spinner"
import RecentHistory      from "components/recent_history"
import Locations          from "stores/locations"
import Location           from "models/location"

export default React.createClass({

  getInitialState() {
    return {
      currentLocation: null,
      flashMessage: null,
      finding: false,
    }
  },

  render() {
    return (
      <div>
        <GeoHeader />
        <Flash message={this.state.flashMessage} />

        <GeoCoordinates location={this.state.currentLocation} />
        <br/>
        <FindLocationButton onFinding={this.updateFinding} onFound={this.updateLocation} onMessage={this.updateFlash} />
        <FindSpinner finding={this.state.finding} />

        <br/><br/>

        <RecentHistory locations={Locations.all()} />
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
    var loc = new Location(
      position.coords.latitude,
      position.coords.longitude
    );

    Locations.save(loc)

    this.setState({
      currentLocation: loc
    });
  }
})
