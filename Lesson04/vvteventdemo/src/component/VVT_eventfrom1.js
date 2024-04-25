import React, { Component } from 'react'

export default class VVT_eventfrom1 extends Component {

    //Hàm sử lý sự kiện
    eventHandleClick1 = ()=> {
        alert("Event Handle 1")
    }

    eventHandleClick2 = ()=> {
        alert("Event Click 2")
    }

  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event Handle</h2>
        {/* gọi hàm sử lý sự kiện khi render  */}
        {/* <button onClick={this.eventHandleClick1()}>Click 1</button> */}
            {/* gọi hàm sử lý khi click  */}
        <button onClick={this.eventHandleClick2}>Click 2</button>
      </div>
    )
  }
}
