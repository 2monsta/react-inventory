// I'm dumb....thinking hard...

import React from 'react'; // we still need react, we don't need a react component because it's not going to be a class but it's still a component

function ProductCategoryRow(props){
  return(
    <tr>
      <th>{props.header}</th>
    </tr>
  )
}

export default ProductCategoryRow;