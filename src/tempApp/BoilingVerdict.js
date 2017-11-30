import React from 'react';

// class BoilingVerdict extends Component{
//   render(){
//     return(
//       <h1>BoilingVerdict Component</h1>
//     )
//   }
// }
function BoilingVerdict(props){
  if(props.temp >=100){
    return (
      <h1>The water would boil</h1>
    )
  }else{
    return(
      <h1>The water would NOT boil</h1>
    )
  }
}
export default BoilingVerdict;