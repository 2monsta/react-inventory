import React, {Component} from 'react';


//we are making a new Component. This component is a class, but also a subclass of React Component
class SearchBar extends Component{

  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleChange(event){
    console.log(event.target.value);
    this.props.onChange(event.target.value);
  }

  handleCheck(event){
    this.props.onChecked(event.target.checked);
  }
  render(){
    const searchTerm = this.props.searchTerm;
    return(
      <form className={"search-bar"}>
        <input type="text" value={searchTerm} placeholder={"search"} onChange={this.handleChange}/>
        <div>
          <input id={"in-stock"} type="checkbox" onChange={this.handleCheck} />
          <label htmlFor="in-stock">Check me</label>
        </div>
      </form>
    )
  }
}

export default SearchBar;