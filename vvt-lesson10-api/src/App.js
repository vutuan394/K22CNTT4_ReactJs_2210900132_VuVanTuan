
import { useEffect, useState } from 'react';
import './App.css';
import vvtCategorylist from './components/vvtCategorylist';
import axios from './api/vvtApi';
import vvtCategoryform from './components/vvtCategoryform';


function App() {
  //Lấy dữ liệu từ api
  const [vvtCategories,setvvtCategories] = useState([]);

  const getCategories = async () => {
   try {
    const vvtCateRespose = await axios.get("vvtCategory");
    setvvtCategories(vvtCateRespose.data);
   } catch (error) {
    console.log("Lỗi", error);
   }
  }

  useEffect (() => {
    getCategories();
    console.log("vvtCategories: ", vvtCategories);
  }, [])
  //Trạng thái form
  const [vvtCategoryIsForm, setvvtCategoryIsFrom] = useState(false);

  const vvtHandleAddNew = (param) =>{
    setvvtCategoryIsFrom(param);
  }

  const vvtHandleCategoryCloseForm = (param) => {
    setvvtCategoryIsFrom(param);
  }

  return (
    <div className="container border my-3">
      <h1>Đàm Vĩnh Trinh - Call API</h1>

      <vvtCategorylist  rendervvtCategories = {vvtCategories}
                onAddNew={vvtHandleAddNew} />
      <hr/>
      {
        vvtCategoryIsForm ===true?<vvtCategoryform onCloseForm={vvtHandleCategoryCloseForm} />:""
      }
      
    </div>
  );
}

export default App;
