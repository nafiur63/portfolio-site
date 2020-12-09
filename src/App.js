import './App.css';
import Home from './components/index/index';
import React from "react"
import {Route} from "react-router-dom"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Educaton from './components/Education/Educaton';

function App() {
  return (
    <>
    <Route exact path="/" component={Home} />
    <Route path="/workexperience" component ={WorkExperience} />
    <Route path="/education" component={Educaton} />
    </>
  );
}

export default App;
