import React, { useEffect, useState } from 'react'
import VvtListTableName from './vvt_components/VvtListTableName'
import axios from './vvt_apis/vvt-2210900132'
import VvtFormTableName from './Vvt_components/VvtFormTableName'

export default function VvtApp() {
  //đọc dữ liệu từ bảng api
  const [vvtListTableName, setVvtListTablename] = useState([])
  const vvtGetTableName = async () => {
    let vvtResp = await axios.get("vvtTableName");
    console.log("App List: ", vvtResp.data);
    setVvtListTablename(vvtResp.data);
  }
  
  useEffect(() => {
    vvtGetTableName();
  }, [])

  //hàm Xóa 
  const vvtHandleDelete = async (vvtId) => {
    let vvtResp = await axios.delete("vvtTableName/" + vvtId);
    vvtGetTableName();
  }

  const vvtObjTableName = {
      "vvtTbName": "Vũ Văn Tuấn",
      "vvtTbEmail": "huanvu.180277@gmail.com",
      "vvtTbPhone": "0983401587",
      "vvtTbStatus": true,
      "vvtID": "2210900132"
    
  };

  const [vvtTableName,setvvtTableName]= useState(vvtObjTableName);
  const vvtHandleAdd=()=>{
    vvtGetTableName();
  }



  return (
    <div className='container border my-3'>
      <h1>Bài đánh giá hét học phần - Vũ Văn Tuấn - 2210900132</h1>
      <hr />
      <VvtListTableName renderVvtListTableName={vvtListTableName} onVvtDelete={vvtHandleDelete} />
      <hr />
      <VvtFormTableName renderVvtTableName={vvtTableName} onVvtAdd={vvtHandleAdd}/>
    </div>
  )
}
