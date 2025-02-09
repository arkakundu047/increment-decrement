import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [num,setnum]=useState(0);
    const incr=()=>{
        setnum(num+1);
    }

    const decr = () => {
        if(num==0){
            alert("0 can not be decresed");
        }
        else{
            setnum(num - 1);
        }
      
    };
  return (
    <>
      <div className="conatiner">
        <h1>{num}</h1>
        <div className="btn">
          <button id="btn1" onClick={incr}>
            Increment
          </button>
          <button onClick={decr}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default Counter