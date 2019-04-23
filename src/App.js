import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Menu from './containers/Menu/Menu';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/menu" component={Menu} />
            </main>
        </div>
      </Router>
    );
  }
}

export default App;
