import React, {Component} from 'react';


//we are making a new Component. This component is a class, but also a subclass of React Component
class SearchBar extends Component{
  render(){
    return(
      <form className={"search-bar"}>
        <input type="text" placeholder={"search"}/>
        <div>
          <input id={"in-stock"} type="checkbox"/>
        </div>
      </form>
    )
  }
}

export default SearchBar;