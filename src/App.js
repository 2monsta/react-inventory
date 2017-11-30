import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class App extends Component {
  constructor(){
    super();
    this.state={
      searchTerm: ""
    }
    this.handleFilterChange=this.handleFilterChange.bind(this);
  }

  handleFilterChange(newValue){
    console.log("my child component ran me");
    this.setState({
      searchTerm:newValue
    })
  }
  render() {
    const searchTerm = this.state.searchTerm;

    return (
      <div className="App container">
        <SearchBar
          onChange={this.handleFilterChange}
          searchTerm={searchTerm}
        />
        <ProductTable
          searchTerm={searchTerm}
        />
      </div>
    );
  }
}

export default App;
