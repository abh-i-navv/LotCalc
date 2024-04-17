import { useState } from 'react'
import Calculator from './components/Calculator'
function App() {
  

  return (
    <div className='flex-row justify-center items-center w-full h-full absolute'>
      <h1 className='flex items-center justify-center text-3xl m-10'>
        Lot Size Calculator
      </h1>
      <Calculator />
    </div>
  )
}

export default App
