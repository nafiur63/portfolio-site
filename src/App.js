import './App.css';
import Home from './components/index/index';
import React from "react"
import {Route} from "react-router-dom"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Educaton from './components/Education/Educaton';
import Contacts from "./components/Contacts/Contacts"
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
    <Route exact path="/" component={Home} />
    <Route path="/workexperience" component ={WorkExperience} />
    <Route path="/education" component={Educaton} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/skills" component={Skills} />
    <Route path='/github' component={() => { 
     window.location.href = 'https://github.com/nafiur63'; 
     return null;
    }}/>
    <Route path='/linkedin' component={() => { 
     window.location.href = 'https://www.linkedin.com/in/md-nafiur-reza/'; 
     return null;
    }}/>
    <Route path='/git-project-eshop' component={() => { 
     window.location.href = 'https://github.com/nafiur63/mern-e-shop'; 
     return null;
    }}/>
    <Route path='/git-project-chat' component={() => { 
     window.location.href = 'https://github.com/nafiur63/node-react-socket-chat-app'; 
     return null;
    }}/>
    <Route path='/git-project-journal' component={() => { 
     window.location.href = 'https://github.com/nafiur63/journal-site'; 
     return null;
    }}/>
    <Route path='/git-project-course' component={() => { 
     window.location.href = 'https://github.com/snake-lab/advisingapp'; 
     return null;
    }}/>
    
    </>
  );
}

export default App;
