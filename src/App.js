import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'jippy'
  }

  nameChangedHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangedHandler} username={this.state.username} />
        <UserOutput username={this.state.username} changed={this.nameChangedHandler} />
        <UserOutput username={this.state.username} changed={this.nameChangedHandler} />
        <UserOutput username={this.state.username} changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
