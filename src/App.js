import React, { Component } from 'react';
import  Header  from './components/header/header_bar';
import  Inbox  from './components/email/inbox';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Inbox />

      </div>
    );
  }
}

export default App;
