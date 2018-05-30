import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Main/>
      </div>
    );
  }
}

export default App;
