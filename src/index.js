import React   from "react"
import Router  from "react-router"

import App     from "components/app"
import Finder  from "components/geo_finder"
import History from "components/recent_history"

var {
  Route,
  DefaultRoute
} = Router

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="finder"  handler={Finder} />
    <Route        name="history" handler={History} />
  </Route>
)

Router.run(
  routes,
  function (Handler) {
    React.render(
      <Handler />,
      document.getElementById("content")
    )
  }
)
