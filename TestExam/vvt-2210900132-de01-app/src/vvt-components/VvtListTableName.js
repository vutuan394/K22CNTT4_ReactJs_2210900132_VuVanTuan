import React from 'react'

export default function VvtListTableName({ renderVvtListTableName, onVvtDelete }) {
    console.log("List:", renderVvtListTableName);
    const vvtElementTableName = renderVvtListTableName.map((vvtItem, vvtIndex) => {
        return (
            <tr key={vvtIndex}>
                <td>{vvtItem.vvtId}</td>
                <td>{vvtItem.vvtTbName}</td>
                <td>{vvtItem.vvtTbEmail}</td>
                <td>{vvtItem.vvtTbPhone}</td>
                <td>{(vvtItem.vvtTbStatus===true || vvtItem.vvtTbStatus==="true") ? "Active" : "Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'>Vvt-edit</button>
                    <button className='btn btn-danger'
                        onClick={(ev) => vvtHandleDelete(vvtItem.vvtId)}
                    >Vvt-delete</button>
                </td>
            </tr>
        )
    })

    //Sự kiện xóa
    const vvtHandleDelete = (vvtId) => {
        if (window.confirm('Bạn có muốn xóa dữ liệu có vvtId=' + vvtId)) {
            onVvtDelete(vvtId);
        }
    }
    
    return (
        <div>
            <h2>Danh sách thông tin ...</h2>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>vvtId</th>
                        <th>vvtTName</th>
                        <th>vvtTbEmail</th>
                        <th>vvtTbPhone</th>
                        <th>vvtTbStatus</th>
                        <th>vvt: Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {vvtElementTableName}
                </tbody>
            </table>
        </div>
    )
}