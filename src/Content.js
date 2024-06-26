import './App.css'
import { useState } from 'react';
function Content()
{
  function random()
  {
    const a=["hai","hello","welcome"];
    const b=Math.floor(Math.random()*3);
    return a[b];
  }
  const [count,setcount]=useState(10);
  function increment()
  {
    setcount((prevcount)=>{return prevcount+1}) //count is just a parameter can give any name
    setcount(prevcount=> prevcount+1)
  }
  function decrement()
  {
    setcount(count-1)
  }
  return(
    <main>
      <p>Now displays welcome</p>
      <button>Click here</button>
      <br />
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </main>
  )
}
export default Content; 