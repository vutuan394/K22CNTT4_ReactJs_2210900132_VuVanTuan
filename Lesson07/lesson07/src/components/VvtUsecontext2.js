import React, { useContext } from 'react'
import { ThemeContext } from './VvtUsecontext'

export default function VvtUseContext2() {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme + 'mm-3'} >
            <h2>VvtUseContext2</h2>
            <p>
                <b>2210900132</b>
                <b>Vũ Văn Tuấn</b>
                <i> K22CNTT4</i>
            </p>
        </div>
    )
}
