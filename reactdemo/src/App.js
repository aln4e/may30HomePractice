import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import CatAdd from './routes/CatAdd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Router>
            <div>
              <Route exact path='/' component={CatAdd}></Route>
              <Route exact path='/add' component={CatAdd}></Route>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
