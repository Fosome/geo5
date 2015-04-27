import React  from "react"
import Router from "react-router"

var Link = Router.Link

export default React.createClass({

  render() {
    return (
      <ul className="nav nav-tabs">
        <li><Link to="finder">Finder</Link></li>
        <li><Link to="history">History</Link></li>
      </ul>
    )
  }
})
