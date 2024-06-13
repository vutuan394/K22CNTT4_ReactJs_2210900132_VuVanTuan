import React from 'react';

export default function vvtStudentList({rendervvtStudentList}) {
    console.log("Data:", rendervvtStudentList)
    let vvtElement = rendervvtStudentList.map((vvtStudent, index)=>{
        return(
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{vvtStudent.vvtId}</td>
            <td>{vvtStudent.vvtName}</td>
            <td>{vvtStudent.vvtAge}</td>
            <td>{vvtStudent.vvtPhone}</td>
            <td>{vvtStudent.vvtEmail}</td>
            <td>{vvtStudent.vvtStatus}</td>
            <td>
                Edit / Delete
            </td>
        </tr>
        )
    });
    return (
        <div>
            <h2> Danh sách sinh viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ Tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {vvtElement}
                </tbody>
            </table>

        </div>
    )
}


