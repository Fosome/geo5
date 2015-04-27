import React from "react"

export default React.createClass({

  render() {
    return this.props.message ? (
      <div>
        <br/>
        <div className="alert alert-danger" role="alert">
          {this.props.message}
        </div>
      </div>
    ) : null
  }
})
