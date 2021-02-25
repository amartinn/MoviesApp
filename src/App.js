import React from 'react'
import Navigation from './navigation'

import {GlobalProvider} from './context/globalState'
const App = () => (
 <GlobalProvider>
    <Navigation/>
 </GlobalProvider>
)

export default App;
