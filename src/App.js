import './App.css';
import Home from './components/index/index';
import React from "react"
import {Route} from "react-router-dom"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Educaton from './components/Education/Educaton';
import Contacts from "./components/Contacts/Contacts"
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
    <Route exact path="/" component={Home} />
    <Route path="/workexperience" component ={WorkExperience} />
    <Route path="/education" component={Educaton} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path='/github' component={() => { 
     window.location.href = 'https://github.com/nafiur63'; 
     return null;
    }}/>
    <Route path='/linkedin' component={() => { 
     window.location.href = 'https://www.linkedin.com/in/md-nafiur-reza/'; 
     return null;
    }}/>
    
    </>
  );
}

export default App;
