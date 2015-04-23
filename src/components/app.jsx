import React         from "react"
import GeoHeader     from "components/geo_header"
import Flash         from "components/flash"
import GeoFinder     from "components/geo_finder"
import RecentHistory from "components/recent_history"
import Locations     from "stores/locations"

export default React.createClass({

  getInitialState() {
    return {
      locations: Locations.all(),
      flashMessage: null
    }
  },

  componentDidMount() {
    Locations.addListener(this._onChange);
  },

  componentDidUnmount() {
    Locations.removeListener(this._onChange);
  },

  render() {
    return (
      <div>
        <GeoHeader />
        <Flash message={this.state.flashMessage} />
        <GeoFinder onMessage={this.updateFlash} />
        <RecentHistory locations={this.state.locations} />
      </div>
    )
  },

  updateFlash(message) {
    this.setState({
      flashMessage: message
    })
  },

  _onChange() {
    this.setState({
      locations: Locations.all()
    })

    console.log(this.state.locations)
  }
})
