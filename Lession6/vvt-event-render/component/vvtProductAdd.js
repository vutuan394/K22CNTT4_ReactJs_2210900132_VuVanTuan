import React, { Component } from 'react'

export default class vvtProductAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:'',
            status:0
        }
    }

    vvtHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    //submit form
    vvtHandleSubmit = (ev)=>{
        ev.preventDefault();
        this.props.onSubmit(this.state)
    }
  render() {
    return (
      <div>
        <h2> Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
           <div className="input-group mb-3">
            <span className="input-group-text" id="id">
                ID
            </span>
            <input
                type="text"
                className="form-control"
                id='id'
                name='id'
                value={this.state.id}
                onChange={this.vvtHandleChange}
            />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                Title
            </span>
            <input
                type="text"
                className="form-control"
                name='title'
                value={this.state.title}
                onChange={this.vvtHandleChange}
            />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
                Status
            </span>
            <input
                type="text"
                className="form-control"
                name='status'
                value={this.state.status}
                onChange={this.vvtHandleChange}
            />
            </div>
            <button className='btn btn-success' onClick={this.vvtHandleSubmit}>Ghi lại</button>
        </form>
      </div>
    )
  }
}