import React from 'react'
import Navigation from './navigation'

import {GlobalProvider} from './context/globalState'
import {MovieProvider} from './context/movieState'


const App = () => {

 return (
 <GlobalProvider>
   <MovieProvider>
      <Navigation/>
   </MovieProvider>
</GlobalProvider>
 )

}

export default App;
