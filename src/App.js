import './App.css';
import Home from './components/index/index';
import React from "react"
import {Route} from "react-router-dom"
import Resume from "./components/Resume/Resume"

function App() {
  return (
    <>

    <Route exact path="/" component={Home} />
    <Route path="/resume" component ={Resume} />
    </>
  );
}

export default App;
