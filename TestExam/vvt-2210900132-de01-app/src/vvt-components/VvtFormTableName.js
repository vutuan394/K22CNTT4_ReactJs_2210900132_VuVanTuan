import axios from '../vvt_apis/vvt-2210900132'
import React, { useState } from 'react'

export default function VvtFormTableName({ renderVvtTableName,onVvtAdd}) {
    const [vvtId, setVvtId] = useState(renderVvtTableName.vvtId)
    const [vvtTbName, setVvtTbName] = useState(renderVvtTableName.vvtTbName)
    const [vvtTbEmail, setVvtTbEmail] = useState(renderVvtTableName.vvtTbEmail)
    const [vvtTbPhone, setVvtTbPhone] = useState(renderVvtTableName.vvtTbPhone)
    const [vvtTbStatus, setvvtTbStatus] = useState(renderVvtTableName.vvtTbStatus)

    const vvtHandleSubmit = async (vvtEvent) => {
        vvtEvent.preventDefault();
        const vvtObjTableName = {
            "vvtTbName":vvtTbName ,
            "vvtTbEmail": vvtTbEmail,
            "vvtTbPhone":vvtTbPhone,
            "vvtTbStatus": vvtTbStatus,
            "vvtId": vvtId
        }
        console.log(vvtObjTableName);

        //Them du lieu vao trong api 
        await axios.post("vvtTableName",vvtObjTableName);
        onVvtAdd();

    }
    return (
        <div>
            <h2>Form xử lý dữ liệu thêm mới</h2>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="vvtId">vvtId</span>
                    <input type="text" className="form-control" placeholder="vvtId"
                        name='vvtId'
                        value={vvtId}
                        onChange={(vvtEv) => setVvtId(vvtEv.target.value)}
                        aria-label="vvtId" aria-describedby="vvtId" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="vvtTbName">VvtTbName</span>
                    <input type="text" className="form-control" placeholder="vvtTbName"
                        name='vvtTbName'
                        value={vvtTbName}
                        onChange={(vvtEv) => setVvtTbName(vvtEv.target.value)}

                        aria-label="vvtTbName" aria-describedby="vvtTbName" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="vvtTbEmail">VvtTbEmail</span>
                    <input type="text" className="form-control" placeholder="huanvu.180277@gmail.com"
                        name='vvtTbEmail'
                        value={vvtTbEmail}
                        onChange={(vvtEv) => setVvtTbEmail(vvtEv.target.value)}

                        aria-label="vvtTbEmail" aria-describedby="vvtTbEmail" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="vvtTbPhone">VvtTbPhone</span>
                    <input type="text" className="form-control" placeholder="09834015871"
                        name='vvtTbPhone'
                        value={vvtTbPhone}
                        onChange={(vvtEv) => setVvtTbPhone(vvtEv.target.value)}

                        aria-label="vvtTbPhone" aria-describedby="vvtTbPhone" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="vvtTbStatus">VvtTbStatus</span>
                    <select id='vvtTbStatus' className='form-control'
                        name='vvtTbStatus'
                        value={vvtTbStatus}
                        onChange={(vvtEv) => setVvtTbStatus(vvtEv.target.value)}
                    >
                        <option value={true}>Active</option>
                        <option value={false}>Non-Active</option>
                    </select>
                </div>

                <button className='btn btn-primary my-3' name='btnVvtSave' onClick={vvtHandleSubmit}>Vvt: Save</button>

            </form>


        </div>
    )
}
