import react from 'react'
import './App.css'
import React from 'react';

function Numbers(){
  return(
    <div className='grid'>
      <div className='numbers'>1</div>
      <div className='numbers'>2</div>
      <div className='numbers'>3</div>
      <div className='numbers'>4</div>
      <div className='numbers'>5</div>
      <div className='numbers'>6</div>
      <div className='numbers'>7</div>
      <div className='numbers'>8</div>
      <div className='numbers'>9</div>
    </div>
  )
}
function ZeronDot()
{
  return(
    <div>
      <div></div>
      <div></div>
    </div>
  )
}
function App() {
  return (
    <>
      <Numbers/>
    </>
  );
}


export default App
