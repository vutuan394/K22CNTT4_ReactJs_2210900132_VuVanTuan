

import './App.css';
import{React , useState} from 'react'
import vvtListProducts from './Components/vvtListProducts';
import vvtProductAddorEdit from './Components/vvtProductAddorEdit';


function vvtApp() {
// mock data
const vvt_Products = [
  {
      vvt_productId:"2210900132"      
     ,vvt_productName:"Vũ Văn Tuấn"      
     ,vvt_quantity:15       
     ,vvt_price:1000
  },
  {
        vvt_productId:"P002"
      , vvt_productName:"IPhone 15"
      , vvt_quantity:20
      , vvt_price:1250
  },
  {
      vvt_productId:"P003"
      , vvt_productName:"IPhone 12"
      ,  vvt_quantity:10
      , vvt_price:1500
  },
]

// sử dụng hàm useState của hook
 const [vvtListProduct,setvvtListProduct] = useState(vvt_Products)


   const vvtHandleSubmit = (vvtProduct)=>{
    console.log("AddOrEdit",vvtProduct);
    //thêm vào vvtListProduct
      setvvtListProduct(vvtPrev =>{
        return[
          ...vvtPrev,
          vvtProduct
        ]
      })

   }
  return (
    <div className="container border mt-5 p-3">
      <h1 className='text-center'> Xử lý chức năng CRUD - Hook</h1>
      <hr/>
      <vvtListProducts rendervvtProducts = {vvtListProduct}/>
      <vvtProductAddorEdit vvtOnSubmit={vvtHandleSubmit}/>
    </div>
  );
}

export default vvtApp;
