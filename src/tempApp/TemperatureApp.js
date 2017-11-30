import React, {Component} from 'react';
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";


//TWO UTILITY FUNCTIONS THAT ARE NOT PART OF THE COMPOENT JUST JS 101 FUNCTIONS
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// try convert is going to take care of users enters something that isnt a number, it expects to convert to be a function above
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}




class TemperatureApp extends Component{
  constructor(){
    super();
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
    this.state={
      scale: "",
      temperature: ''
    }
  }

  handleCelciusChange(value){
    this.setState({
      scale: "c",
      temperature: value
    })
  }

  handleFahrenheitChange(value){
    this.setState({
      scale:"f",
      temperature: value
    })
  }

  render(){
    // console.log(tryConvert("100", toCelsius));
    var celsius;
    var fahrenheit;
    if(this.state.scale === "c"){
      celsius = tryConvert(this.state.temperature, toFahrenheit);
      console.log(celsius);
    }
    if(this.state.scale === 'f'){
      fahrenheit = tryConvert(this.state.temperature, toCelsius);
      console.log(fahrenheit);
    }
    return(
      <div>
        <TemperatureInput scale={"f"} onChange={this.handleFahrenheitChange} temp = {celsius}/>
        <TemperatureInput scale={"c"} onChange={this.handleCelciusChange} temp={fahrenheit}/>
        <BoilingVerdict />
      </div>
    )
  }
}


export default TemperatureApp;