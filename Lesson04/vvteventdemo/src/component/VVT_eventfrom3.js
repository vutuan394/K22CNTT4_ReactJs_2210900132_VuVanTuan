import React, { Component } from 'react'
// Xử lý sự kiện với  props, state 

export default class VVT_eventfrom3 extends Component {
  constructor(props){
    super(props);
    // Tạo đối tượng thông qua state 
    this.state = {
        name:"Vũ Văn Tuấn",
        job: "Student"
    }
  }
  // Hàm Xử lý Sự Kiện 
  handleChangeName = (Event)=> {
    this.setState ({
        name:"K22CNTT4-ReactJs"
    })
    }
  handleChangeJob = (Event)=> {
    this.setState ({
        job:"Student1"
    })
    }


    render() {
    return (
      <div className='alert alert-primary'>
        <h2> Thay Đổi dữ Liệu trong state </h2>
        <p> Dữ Liệu:{this.state.name} = {this.state.job} </p>
        <button onClick={this.handleChangeName}>Thay Đổi Name </button>
        <button onClick={this.handleChangeJob}>Thay Đổi Job </button>
      </div>
    )
  }
}
