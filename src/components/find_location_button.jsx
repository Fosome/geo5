import React     from "react"
import Modernizr from "modernizr"

export default React.createClass({

  render: function() {
    return (
      <button className="btn btn-primary" onClick={this.find}>
        Find Location
      </button>
    );
  },

  find: function(e) {
    this.props.onFinding(true);

    if(Modernizr.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.findSuccess,
        this.findError, 
        {
          enableHighAccuracy: true
        }
      );
    }
    else {
      this.findError();
    }
  },

  findSuccess: function(position) {
    this.props.onFound(position);
    this.props.onFinding(false);
  },

  findError: function() {
    this.props.onFinding(false);
    this.props.onMessage("Location unavailable");
  }
})
