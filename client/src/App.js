import React from 'react'
import {Switch, Route} from "react-router-dom"
import Phones from "./Phones"
import PhoneDetails from "./PhoneDetails"

const App = () => 
    <Switch>
        <Route exact path="/" component={Phones}></Route>
        <Route path="/:id" render={(props) => <PhoneDetails {...props} />}></Route>
    </Switch>

    
    
export default App