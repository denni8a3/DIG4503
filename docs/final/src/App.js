import React from 'react';
import './App.css';


import HomePage from "./components/HomePg";

class App extends React.Component {

  render() {

    return (

      <HomePage firstName="Maurice" />
    );
  }
}

export default App;