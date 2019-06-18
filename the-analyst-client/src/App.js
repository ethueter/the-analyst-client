import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/login'
import about from './components/about'
import { Switch, Route } from 'react-router-dom'
import { Header, Image } from 'semantic-ui-react'
import MainContainer from './containers/MainContainer';
import SourceContainer from './containers/SourceContainer'
import ProfileContainer from './containers/ProfileContainer'

function App() {
  return (
    <div className="App" >
      <div>
        <Header inverted  textAlign='left' className='App-header' >
          
        </Header>

      </div>
      <Navbar />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/about' component={about} />
        <Route exact path='/sources' component={SourceContainer} />
        <Route exact path='/profile' component={ProfileContainer} />
        <Route path='/' component={MainContainer} />
      </Switch>
    </div>
  );
}

export default App;


