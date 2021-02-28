import React from 'react'
import { Layout } from './components'
import { Home, Search, MovieDetails, Error } from './pages'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

const Navigation = _ => {

return (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route path='/search/:query' component={Search} ></Route>
        <Route path='/search' component={Search} ></Route>
        <Route path='/movies/:id' component={MovieDetails} ></Route>
        <Route  component={Error} ></Route>
      </Switch>
    </Layout>
  </Router>
)
}

export default Navigation