import React, { useEffect, useState } from 'react'

export default function VvtUseEffect() {
    // state:count
    const [count, setCount] = useState(0);

    // hàm sử lý sự kiện click me
    const HandleClick = () => {
        setCount(prev => prev + 1);
    }


    // sử dụng hàm useEffect để cập nhật lại tatle
    useEffect(() => {
        document.title = 'Vũ Văn Tuấn :You clicked ${count} times ';
        console.log('You clicked  ${count} times ');
    });
    // useEffect : tham số thứ 2 là rỗng 
    useEffect(() => {
        console.log("chạy lần đầu tiên-Một lần");
    }, [])
    // [deps]
    useEffect(() => {
        console.log('useEfect count click: ', count)
    }, [count])
    return (
        <div>
            <h2> Demo-useEfect:You clicked {count} times </h2>
            <button onClick={HandleClick}>
                click me
            </button>
        </div>
    )
}
