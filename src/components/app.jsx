import React           from "react"
import Router          from "react-router"
import GeoHeader       from "components/geo_header"
import Flash           from "components/flash"
import Navigation      from "components/navigation"
import GeoFinder       from "components/geo_finder"
import Locations       from "stores/locations"

var RouteHandler = Router.RouteHandler

export default React.createClass({

  getInitialState() {
    return {
      locations:    Locations.all(),
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
        <Navigation />
        <Flash message={ this.state.flashMessage } />

        <RouteHandler onMessage={ this.updateFlash } />
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
  }
})
