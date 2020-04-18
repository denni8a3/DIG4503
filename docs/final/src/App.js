import React from 'react';
import './App.css';
import HomePage from "./components/HomePg";


class App extends React.Component {

  render() {

    const divStyle = {
      border: 'coral solid 5px'
    };

    
    return (
      <div className="App" style={divStyle}>

        

        <HomePage firstName="Got it covered"/>

         

        

       
      </div>
    );
  }
}

export default App;