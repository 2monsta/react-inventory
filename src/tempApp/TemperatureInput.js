
import React, {Component} from 'react';


var ScaleName={
  "c": "Celsius",
  "f": "Fahrenheit"
};

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
        <legend>Scale: {ScaleName[this.props.scale]}</legend>
        <input type="text" value={temperature} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default TemperatureInput;