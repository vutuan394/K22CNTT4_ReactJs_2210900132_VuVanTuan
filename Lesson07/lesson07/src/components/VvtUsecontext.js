import React, { createContext, useContext, useState } from 'react'
import VvtUseContext1 from './VvtUsecontext1';
export const ThemeContext = createContext(); // tạo thành ngữ cảnh để chia

export default function VvtUseContext() {
    // state
    const [theme, setTheme] = useState('red');
    // Hàm thay đổi theme
    const VvtHandleChange = () => {
        setTheme(theme === 'red' ? 'blue' : 'red');
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className='alert'>
                <h2> Demo useContext</h2>
                <VvtUseContext1 />
                <button onClick={VvtHandleChange}> Change bgColor</button>
            </div>
        </ThemeContext.Provider>
    )
}
