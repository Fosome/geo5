import React from "react"

export default React.createClass({

  render() {
    var loc = this.props.location;

    return loc ? (
      <div>
        <b>Latitude:</b> {loc.latitude}<br/>
        <b>Longitude:</b> {loc.longitude}
      </div>
    ): null;
  }
})
