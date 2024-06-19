import React from 'react'

export default function vvtCategorylist({rendervvtCategories, onAddNew}) {
    console.log("rendervvtCategories: ",  rendervvtCategories);

    let vvtCategoryElement = rendervvtCategories.map((vvtCategory,index) => {
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <td>{vvtCategory.vvtId}</td>
                <td>{vvtCategory.vvtCategoryName}</td>
                <td>{vvtCategory.vvtCategoryStatus===true?"Hiển thị":"Tạm Khóa"}</td>
            </tr>
        )
    })

    const vvtHandleAdd = () =>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sách loại sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã Loại</th>
                        <th>Tên Loại</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {vvtCategoryElement}
                </tbody>

            </table>
            <button className='btn btn-primary' onClick={vvtHandleAdd}>Thêm mới </button>
        </div>
    )
}
