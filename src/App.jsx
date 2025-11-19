import { useState } from 'react'  

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Form from './components/Form';
import Success from './components/Success';
import Order from './components/Order'; 


function App() { 

  return (
   <><Router>
    <Switch>
      <Route exact npath="/">

      <Home />
      </Route>
      <Route path="/form">
      <Form />
      </Route>
      <Route path="/success">
      <Success />
      </Route>
      <Route path="/order">
      <Order /> 
      </Route>  

      
    </Switch>
   </Router>
   </>
  )
}

export default App
