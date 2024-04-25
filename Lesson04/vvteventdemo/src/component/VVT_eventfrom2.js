import React from 'react'

export default function VVT_eventfrom2() {
  
    // Định nghĩa các hàm xử lsy sự kiện 
    const eventHandleClick1 = (content)=> {
        console.log('=================');
        console.log(content);
        console.log('=================');
    }

    return (
    <div className='alert alert-success'>
      <h2>Event Demo - Function Component  </h2>
    <button onClick={eventHandleClick1("Vũ Văn Tuấn")}>Gọi khi Render</button>
    <button onClick={()=>eventHandleClick1("K22CNTT4-ReactJS")}>Gọi khi Click</button>

    </div>
  )
}
