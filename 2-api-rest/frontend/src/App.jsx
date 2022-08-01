import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormStudent from './components/FormStudent'
import FormClassRoom from './components/FormClassRoom'
 

function App() {

  return (
    <>
      <h1>Challenge</h1>

      
      <div className='form'>

          <div className='form2'>
            <FormStudent/>
          </div>

          <div className='form2'>
            <FormClassRoom/>    
          </div>
      
      </div>
    </>
  )
}

export default App
