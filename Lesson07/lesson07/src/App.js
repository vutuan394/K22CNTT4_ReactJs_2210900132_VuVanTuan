import React from 'react'
import VvtUseState from './components/VvtUseState'
import VvtUseEffect from './components/VvtUseEffect'
import VvtUseContext from './components/VvtUsecontext'
import './/App.css'

export default function app() {

  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Vũ Văn Tuấn - hook</h1>
      <hr />
      <VvtUseState />
      <hr />
      <VvtUseEffect />
      <hr />
      <VvtUseContext />

    </div>

  )
}
