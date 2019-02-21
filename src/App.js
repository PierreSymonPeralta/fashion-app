import React, { Component } from 'react';
import './App.scss';
import { Header, Content, SideBar, Filters } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Filters/>
        <SideBar/>
        <Content/>
      </div>
    );
  }
}
export default App;
