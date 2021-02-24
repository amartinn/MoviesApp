import React from 'react'
import {Layout} from './components'
import {Home,Search} from './pages'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App = () => 
   {
   return (
    <Router> 
   <Layout>
       <Switch>
         <Route exact path="/" component={Home} ></Route>
       </Switch>
       <Switch>
         <Route path="/search/:query" component={Search} ></Route>
       </Switch>
       </Layout>
     </Router>
   );
   }

export default App;
