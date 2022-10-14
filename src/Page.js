import React, { useState } from "react"
import {FaTimes, FaDivide, FaRetweet} from 'react-icons/fa'
function Page() 
{
  const [count, setCount] = useState(100);
  function times(){
    setCount((prevCount) => prevCount *2 )

  };
  function reset(){
    setCount(100)
  };
  function divide(){
    setCount((prevCount) => prevCount/2)
  }
  //return (
    <div className="App">
      <div className="number">
        {count}
      </div>
     <button onClick={times} className="button-1">
        <FaTimes/>2
     </button>&nbsp;
     <button onClick={reset} className="button-2">
      <FaRetweet/>
     </button>&nbsp;
     <button onClick={divide} className="button-3">
      <FaDivide/>2
     </button>
    </div>
  //);
}

export default Page;
