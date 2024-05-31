import React, { useState } from 'react'

export default function vvtProductAddorEdit(vvtOnSubmit) {
    const[vvt_productId, setvvt_producId] = useState('');
    const[vvt_productName, setvvt_producName] = useState('');
    const[vvt_quantity, setvvt_quantity] = useState(0);
    const[vvt_price, setvvt_price] = useState(0);


    const vvtHandleSubmit = (vvtEvent) => {
        vvtEvent.preventDefault();
        let vvtProduct = {
            vvt_productId: vvt_productId,
            vvt_productName: vvt_productName,
            vvt_quantity: vvt_quantity,
            vvt_price: vvt_price,
        };
        
      
        vvtOnSubmit(vvtProduct);
    };
    
  return (
    <div className='col-md-6'>
        <h2>Thêm mới / Sửa đổi sản phẩm</h2>
    <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
        <input type="text" className="form-control" placeholder="Mã sản phẩm"
                name='vvt_productId' value={vvt_productId}
                onChange={(ev)=>setvvt_producId(ev.target.value)}
           aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Tên sản phẩm</span>
        <input type="text" className="form-control" placeholder="Tên sản phẩm"
             name='vvt_productName' value={vvt_productName}
             onChange={(ev)=>setvvt_producName(ev.target.value)}
           aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Số lượn sản phẩm</span>
        <input type="number" className="form-control" placeholder="Số lượng sản phẩm"
             name='vvt_quantity' value={vvt_quantity}
             onChange={(ev)=>setvvt_quantity(ev.target.value)}
           aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Đơn giá</span>
        <input type="number" className="form-control" placeholder="Đơn giá"
             name='vvt_price' value={vvt_price}
             onChange={(ev)=>setvvt_price(ev.target.value)}
           aria-describedby="basic-addon1"/>
    </div>
    <button className='btn btn-primary' name='vvtBtnAction'
    onClick={vvtHandleSubmit}
    >Thêm mới</button>
    </div>
  )
}