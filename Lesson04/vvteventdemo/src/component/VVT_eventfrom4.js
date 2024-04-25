import React, { Component } from 'react'

export default class VVT_eventfrom4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Tuấn"
        }
    }

    handleGetName = ()=> {
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }



  render() {
    return (
      <div className='alert alert-info'>
        <h2> Lấy Dữ Liệu Từ Props</h2>
        <button onClick={this.handleGetName}>Lấy Tên</button>
        <h2>Welcome to, {this.state.name}</h2>
      </div>
    )
  }
}
