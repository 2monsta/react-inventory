import React, {Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
//import our own component
import productData from './productData';
import ProductRow from "./ProductRow"
console.log(productData);


class ProductTable extends Component{
  constructor(){
    super();
    this.productData = productData;
    this.state={
      productsByCategory: {}
    }
  }
  componentDidMount(){
    this.formatData();
  }
  formatData(){
    let tempProducts = {};
    this.productData.data.map((product)=>{
      // console.log(product.category);
      if(tempProducts[product.category] ===undefined){
        tempProducts[product.category] = [];
      }
      tempProducts[product.category].push(product);
    });
    console.log(tempProducts);
    this.setState({
      productsByCategory:tempProducts
    })
  }

  render(){
    let rows = [];
    for(let key in this.state.productsByCategory){
      // console.log(key);
      rows.push(<ProductCategoryRow header={key} key={key} />);

      this.state.productsByCategory[key].map((item, index)=>{
        rows.push(<ProductRow key={item.name} item={item}/>);
      })
    }
    return(
      <div className={"product-table"}>
        <table className={"table table-striped"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/*our stuff goes here*/}
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}
export default ProductTable;