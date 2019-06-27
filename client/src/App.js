import React from 'react'
import {Switch, Route} from "react-router-dom"
import AllPhones from "./containers/allPhones"
import OnePhone from "./containers/onePhone"

const App = () => 
    <Switch>
        <Route exact path="/" component={AllPhones}></Route>
        <Route path="/:id" render={(props) => <OnePhone {...props} />}></Route>
    </Switch>
    
export default App