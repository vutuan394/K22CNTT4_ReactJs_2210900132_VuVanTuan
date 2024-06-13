import './App.css';
import { React, useEffect, useState, } from 'react'
import axios from "axios";
import vvtStudentList from './components/vvtStudentList';


function vvtApp() {
  // sử dụng hàm useState của hook
  const [vvtStudentList, setvvtStudentList] = useState([]);
  //Get data form api 
  const vvtGetStudent = async () => {
    try {
      const response = await axios.get("https://666a9b977013419182d0077d.mockapi.io/api/vvtv1/vvtStudent");
      setvvtStudentList(response.data);
    } catch (eror) {
      console.error("Error fetching data", error);
    }
  }
}
useEffect(() => {
  vvtGetStudent();
}, []);

return (
  <div className="container border mt-5 p-3">
    <h1 className="text-center my-3">Xử lý chữ năng CRUD - Hook - API</h1>
    <hr />
    <vvtStudentList rendervvtStudentList = {vvtStudentList}/>
  </div>
);

export default vvtApp;
