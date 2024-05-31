import React from 'react'

export default function vvtListProducts({rendervvtProducts}) {
    console.log("List Product:",rendervvtProducts);
    let vvtTong=0;
    let vvtElementProduct = rendervvtProducts.map((vvtProduct,index)=> {
       vvtTong += vvtProduct.vvt_quantity*vvtProduct.vvt_price;
        return(
            <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{vvtProduct.vvt_productId}</td>
                <td>{vvtProduct.vvt_productName}</td>
                <td>{vvtProduct.vvt_quantity}</td>
                <td>{vvtProduct.vvt_price}</td>
                <td>{vvtProduct.vvt_quantity*vvtProduct.vvt_price}</td>
                <td>
                    <button className='btn btn-outline-success mx-1'>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='btn btn-outline-danger mx-1'>
                    <i class="fa-solid fa-trash-arrow-up"></i>
                    </button>
                </td>
            </tr>
            </>
        )
        
    })
  return (
    <div>
      <h2>DANH SÁCH SẢN PHẨM</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            {vvtElementProduct}
        </tbody>
        <tfood>
            <tr>
                <th colSpan={5} className='text-end'> Tổng cộng: </th>
                <th colSpan={2} className='text-start'>
                {vvtTong}
                </th>
            </tr>
        </tfood>
      </table>
    </div>
  )
}