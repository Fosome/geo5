import React           from "react"

import GeoHeader       from "components/geo_header"
import Flash           from "components/flash"
import GeoFinder       from "components/geo_finder"
import RecentHistory   from "components/recent_history"
import SyncSpinner     from "components/sync_spinner"

export default React.createClass({

  getInitialState() {
    return {
      flashMessage: null,
      syncing :     false
    }
  },

  componentDidMount() {
  },

  componentDidUnmount() {
  },

  render() {
    return (
      <div>
        <GeoHeader />
        <Flash message={ this.state.flashMessage } />

        <GeoFinder />

        <RecentHistory />

        <SyncSpinner active={ this.state.syncing }/>
      </div>
    )
  },

  updateFlash(message) {
    this.setState({
      flashMessage: message
    })
  },

  onSync(value) {
    this.setState({
      syncing: value
    })
  }
})
