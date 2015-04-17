var Geo5App = React.createClass({
  getInitialState: function() {
    return {
      finding: false,
      latitude: null,
      longitude: null
    }
  },

  render: function() {
    return (
      <div>
        <GeoHeader />
        <GeoCoordinates latitude={this.state.latitude} longitude={this.state.longitude} />
        <br/><br/>
        <FindLocationButton onFinding={this.updateFinding} onFound={this.updateLocation} />
        <FindSpinner finding={this.state.finding} />
      </div>
    );
  },

  updateFinding: function(value) {
    this.setState({
      finding: value
    })
  },

  updateLocation: function(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }
});

var GeoHeader = React.createClass({
  render: function() {
    return (
      <div className="page-header">
        <h1>What's my location?</h1>
      </div>
    );
  }
});

var FindLocationButton = React.createClass({
  render: function() {
    return (
      <button className="btn btn-primary" onClick={this.find}>
        Find Location
      </button>
    );
  },

  find: function(e) {
    this.props.onFinding(true);

    if(geoPosition.init()) {
      geoPosition.getCurrentPosition(
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

  findError: function(error) {
    this.props.onFinding(false);
  }
});

var FindSpinner = React.createClass({
  render: function() {
    return (
      <img src="img/spinner.gif" width="32" style={ this.props.finding ? {} : { display: "none" }} />
    );
  }
});

var GeoCoordinates = React.createClass({
  render: function() {
    return (
      <div>
        <b>Latitude:</b> {this.props.latitude}<br/>
        <b>Longitude:</b> {this.props.longitude}
      </div>
    );
  }
});

$(document).ready(function() {
  React.render(
    <Geo5App />,
    document.getElementById("content")
  );
});
