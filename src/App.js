import './App.css';
import Home from './components/index/index';
import React from "react"
import {Route} from "react-router-dom"
import WorkExperience from "./components/WorkExperience/WorkExperience"

function App() {
  return (
    <>

    <Route exact path="/" component={Home} />
    <Route path="/workexperience" component ={WorkExperience} />
    </>
  );
}

export default App;
