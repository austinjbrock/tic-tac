import './App.css'
import { useState } from 'react'


function Square(){
  
  //add state:
  const [value,setValue] = useState(null)


  // this function will handle clicks for user input
  function handleClick(){
      setValue('X')
  }



  return (
    <button
     className='square' onClick={handleClick}>{value}</button>
   )
}





export default function Board() {
  return (
    <>
    <div className='board-row'>
      <Square />
      <Square />
      <Square />
    </div>
    <div className='board-row'>
      <Square />
      <Square />
      <Square />
    </div>
    <div className='board-row'>
      <Square />
      <Square />
      <Square />
    </div>
    </>
  )
}



