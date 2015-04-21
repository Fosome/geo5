import React from "react"

export default React.createClass({

  render: function() {
    return (
      <div>
        <b>Latitude:</b> {this.props.latitude}<br/>
        <b>Longitude:</b> {this.props.longitude}
      </div>
    );
  }
})
