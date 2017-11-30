import React from 'react';

function ProductRow(props){
  var productClass ="";
  if(props.item.inStock){
    productClass="text-success";
  }else{
    productClass="text-danger";
  }
  return(
    <tr>
      <td className={productClass}>{props.item.name}</td>
      <td>{props.item.price}</td>
    </tr>
  )
}

export default ProductRow;