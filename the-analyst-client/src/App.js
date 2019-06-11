import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/login'
import about from './components/about'
import { Switch, Route } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <div>
        <Header size='large'>
          <h1>The Analyst</h1>
          <h3>How do you rate the news....when you don't know where it is coming from?</h3>
        </Header>
      </div>
      <Navbar />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/about' component={about} />
        {/* <Route path='/' component={MainContainer} /> */}
      </Switch>
    </div>
  );
}

export default App;
