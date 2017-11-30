
import React, {Component} from 'react';
class TemperatureInput extends Component{
  constructor(props){
    super();
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.onChange(event.target.value);
  }


  render(){
    const temperature = this.props.temp;
    return(
      <div>
        <legend>{this.props.scale}</legend>
        <input type="text" value={temperature} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default TemperatureInput;