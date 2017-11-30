import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class App extends Component {
  constructor(){
    super();
    this.state={
      searchTerm: "",
      ifChecked: false
    };
    this.handleFilterChange=this.handleFilterChange.bind(this);
    this.handleChecked=this.handleChecked.bind(this);
  }

  handleFilterChange(newValue){
    // console.log("my child component ran me");
    this.setState({
      searchTerm:newValue
    })
  }

  handleChecked(value){
    // console.log(value);
    this.setState({
      ifChecked:value
    })
  }

  render() {
    const searchTerm = this.state.searchTerm;
    // console.log(this.state.ifChecked); // this is true
    const ifCheck = this.state.ifChecked;
    return (
      <div className="App container">
        <SearchBar
          onChange={this.handleFilterChange}
          searchTerm={searchTerm}
          onChecked={this.handleChecked}
        />
        <ProductTable
          searchTerm={searchTerm}
          ifCheck={ifCheck}
        />
      </div>
    );
  }
}

export default App;
