import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/login'
import { Switch, Route } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <div>
        <Header size='massive'>
          <h1>The Analyst</h1>
          <h3>How do you rate the news....when you don't know where it is coming from?</h3>
        </Header>
      </div>
      <Navbar />
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
