import React      from "react"
import Locations  from "stores/locations"

export default React.createClass({

  getInitialState() {
    return {
      locations: Locations.all(),
    }
  },

  render() {
    var locs = []

    for (var i in this.state.locations) {
      locs.push(
        <tr key={i}>
          <td>{this.state.locations[i].latitude}</td>
          <td>{this.state.locations[i].longitude}</td>
        </tr>
      )
    }

    return (
      <div>
        <h3>Recent Locations</h3>

        <table className="table">
          <tbody>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>

            { locs }
          </tbody>
        </table>
      </div>
    )
  }
})
