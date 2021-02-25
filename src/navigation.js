import React from 'react'
import { Layout } from './components'
import { Home, Search, MovieDetails } from './pages'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
const Navigation = _ =>
(
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
      </Switch>
      <Switch>
        <Route exact path="/search/:query" component={Search} ></Route>
      </Switch>
      <Switch>
        <Route exact path="/search" component={Search} ></Route>
      </Switch>
      <Switch>
        <Route exact path="/movies/:id" component={MovieDetails} ></Route>
      </Switch>
    </Layout>
  </Router>
)


export default Navigation