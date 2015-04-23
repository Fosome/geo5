import React from "react"

export default React.createClass({

  render() {
    var locs = []

    for (var i in this.props.locations) {
      locs.push(
        <tr>
          <td>{this.props.locations[i].latitude}</td>
          <td>{this.props.locations[i].longitude}</td>
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
