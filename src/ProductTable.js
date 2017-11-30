import React, {Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
//import our own component
import productData from './productData';
import ProductRow from "./ProductRow"
// console.log(productData);


class ProductTable extends Component{
  constructor(){
    super();
    this.productData = productData;
    this.safeProductData= Object.assign({}, productData);
    this.state={
      productsByCategory: {}
    }
  }
  componentDidMount(){
    this.formatData();
  }
  formatData(){
    var tempProducts = {};
    this.productData.data.map((product)=>{
      // console.log(product.category);
      if(tempProducts[product.category] ===undefined){
        tempProducts[product.category] = [];
      }
      tempProducts[product.category].push(product);
    });
    // console.log(tempProducts);
    this.setState({
      productsByCategory:tempProducts
    })
  }

  componentWillReceiveProps(newProps){
    // console.log(newProps);
    const searchTerm = newProps.searchTerm.toLowerCase();
    var tempProduct =[]
    this.safeProductData.data.map((item)=>{
      var itemName = item.name.toLowerCase();
      if(itemName.indexOf(searchTerm)!=-1){
        console.log(item);
        tempProduct.push(item);
      }
    });

    // for(let i =0;i<this.safeProductData.data.length; i++){
    //   var itemName = this.safeProductData.data[i].name.toLowerCase();
    //   if(itemName.indexOf(searchTerm)!=-1){
    //     tempProduct.push(this.safeProductData.data[i]);
    //   }
    // }
    this.productData.data=tempProduct;
    this.formatData();
  }

  render(){
    let rows = [];
    for(let key in this.state.productsByCategory){
      // console.log(key);
      rows.push(<ProductCategoryRow header={key} key={key} />);

      this.state.productsByCategory[key].map((item, index)=>{
        rows.push(<ProductRow item={item}/>);
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