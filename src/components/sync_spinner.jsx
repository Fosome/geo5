import React from 'react'

export default React.createClass({

  render() {
    return this.props.active ? (
      <div>
        <br />
        <br />
        <img src="img/spinner.gif" width="32" /> Syncing...
      </div>
    ) : null
  }
})
