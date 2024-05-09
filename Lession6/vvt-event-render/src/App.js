import React, { Component } from 'react'
import vvt_Productlist from './component/vvt_Productlist';
import vvtProductAdd from './component/vvtProductAdd';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        {title: 'Vũ Văn Tuấn', id:2210900132 , status:1},
        {title: 'Cabbage', id:1, status:1},
        {title: 'Garlic', id:2, status:0},
        {title: 'Apple', id:3, status:1},
        {title: 'Samsung', id:4, status:0},
      ]
    }
  }

  vvtHandleSubmit = (param)=>{
    console.log("App:",param);
    // Thêm vào mảng dữ liệu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Vũ Văn Tuấn Event Form - Render Data</h1>
        <hr/>
       <vvt_Productlist renderProducts={this.state.products}/>
       <hr/>
       <vvtProductAdd onSubmit = {this.vvtHandleSubmit}/>
      </div>
    )
  }
}
