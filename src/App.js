import React from 'react'
import {Layout} from './components'
import Home from './pages/home/home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App = () => 
   {
   return (<>
   <Layout>
     <Router>
       <Switch>
         <Route exact path="/" component={Home} ></Route>
       </Switch>
     </Router>
   </Layout>
   </>
   );
   }

export default App;
