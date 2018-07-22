import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      results: null
    };
  }
  search(event) {
    event.preventDefault();
    if(this.state.title) {
      axios.get(`http://www.omdbapi.com/?t=${this.state.title}&apikey=d5cf142a`).then(response => {
        this.setState({results: response.data});
      });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Movie Data</h1>
        <form onSubmit={this.search.bind(this)}><p>
          <input type="text" value={this.state.title} onChange={event => this.setState({title: event.target.value})} />
          <button type="submit">Search</button>
        </p></form>
        {this.state.results && (
          <div>
            <p>Year: {this.state.results.Year}</p>
            <p>Director: {this.state.results.Director}</p>
            <p>Plot: {this.state.results.Plot}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
