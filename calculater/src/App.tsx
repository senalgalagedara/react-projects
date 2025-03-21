import './App.css';
import React, { useState } from 'react';

const handleClick = (value: string) => {
//  setButtonValue(value); // Update state with the clicked button's value
};

//const handleCalculate() => {}

function Numbers(){
  return(
    <>
    <div className='wrapper'>
      <div className="display">
          <input
          className='textbtn'
          type="text"
        //  value={inputValue}
        // onChange={handleInputChange}
        // onKeyPress={handleKeyPress}
        />
      </div>
      <div className='grid'>
        <button className='numbers' onClick={() => handleClick('1')}>1</button>
        <button className='numbers' onClick={() => handleClick('2')}>2</button>
        <button className='numbers' onClick={() => handleClick('3')}>3</button>
        
        <button className='symbole' onClick={() => handleClick('*')}>C</button>

        <button className='numbers' onClick={() => handleClick('4')}>4</button>
        <button className='numbers' onClick={() => handleClick('5')}>5</button>
        <button className='numbers' onClick={() => handleClick('6')}>6</button>

        <button className='symbole' onClick={() => handleClick('-')}>-</button>

        <button className='numbers' onClick={() => handleClick('7')}>7</button>
        <button className='numbers' onClick={() => handleClick('8')}>8</button>
        <button className='numbers' onClick={() => handleClick('9')}>9</button>

        <button className='symbole'>+</button>

        <button className='numbers' onClick={() => handleClick('0')}>0</button>
        <button className='symbole' onClick={() => handleClick('/')}>÷</button>
        <button className='symbole' onClick={() => handleClick('%')}>×</button>
        <button className='symbole' onClick={() => handleCalculate('=')}>=</button>      
      </div>
    </div>
    </>
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
