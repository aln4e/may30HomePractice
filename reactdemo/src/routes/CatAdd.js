import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from '../components/Header';
// import {Link, BrowserRouter as Router,Route} from 'react-router-dom'
import {addCat} from '../actions'

class CatAdd extends Component {
  constructor(props){
    super(props)
    this.state ={
      person: {
        firstName:"",
        favoriteFood:"",
        favoriteNumber:""
      },
      error:""
    }
  }

  handleChange(e){
    const target = e.target
    const person = this.state.person
    person[target.name] = target.value
    this.setState({
      person:person
    })
  }

  handleSubmit(e){
    e.preventDefault()
    addCat(this.state)

  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>First Name</label>
            <input type='text' name='firstName' value={this.state.person.firstName} onChange={this.handleChange.bind(this)} />
          </div>
          <div>
            <label>Favorite Food</label>
            <select name='favoriteFood' value={this.state.person.favoriteFood} onChange={this.handleChange.bind(this)}>
              <option></option>
              <option>Hamburger</option>
              <option>Steak</option>
            </select>
          </div>
          <div>
            <label>Favorite Number</label>
            <input type='number' name='favoriteNumber' value={this.state.person.favoriteNumber} onChange={this.handleChange.bind(this)} />
          </div>
          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default CatAdd;
