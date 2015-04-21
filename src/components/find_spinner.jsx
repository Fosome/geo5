import React from "react"

export default React.createClass({

  render: function() {
    return this.props.finding ? (
      <img src="img/spinner.gif" width="32" />
    ) : null
  }
})
