import React                          from "react"

import RecentHistoryGeoLocationStore  from "stores/recent_history_geo_location_store"

let RecentHistory = React.createClass({

  getInitialState() {
    return {
      locations: RecentHistoryGeoLocationStore.all()
    }
  },

  componentDidMount() {
    RecentHistoryGeoLocationStore.addChangeListener(this._onChange)
  },

  componentWillUnmount() {
    RecentHistoryGeoLocationStore.removeChangeListener(this._onChange)
  },

  render() {
    let rows = this.state.locations.map(function (l) { 
        return (
          <tr>
            <td>{l.latitude}</td>
            <td>{l.longitude}</td>
          </tr>
        )
    })

    return (
      <div>
        <h3>Recent Locations</h3>

        <table className="table">
          <tbody>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>

            { rows }
          </tbody>
        </table>
      </div>
    )
  },

  _onChange() {
    this.setState({
      locations: RecentHistoryGeoLocationStore.all()
    })
  }
})

export default RecentHistory
