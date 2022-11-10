import { useState } from 'react'
import React from 'react';
import {Route} from "react-router-dom";
import { Home } from './components/home'

function App() {

  return (
    <Route path= "/home" component={Home}/>
  )
}

export default App
