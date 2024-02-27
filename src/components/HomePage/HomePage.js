import { useEffect, useState } from "react";
import "./HomePage.css";

export default function HomePage(){

const [count,setCount]=useState(0);
const[timer,setTimer]=useState(0);
useEffect(function(){
    if(timer===0){return;}


    const interval=setInterval(()=>{
        setTimer(timer-1);
       
      
    },1000);

    return function(){clearInterval(interval);}
},[timer]);

return(

    <div className="home-container">
    <div className="home-timer">timer:{timer}</div>
    <div className="home-count">{count}</div>
    <button
      className="home-btn-start btn"
      onClick={() => {
        setTimer(10);
        setCount(0);
      }}
      disabled={timer !== 0}
    >
      start
    </button>
    <button
      className="home-btn-click btn"
      onClick={() => setCount(count + 1)}
      disabled={timer === 0}
    >
      click me
    </button>
    <button
      className="home-btn-reset btn"
      onClick={() => {
        setCount(0);
        setTimer(0);
      }}
    >
      reset
    </button>
  </div>
)
}