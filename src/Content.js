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
  const [count,setcount]=useState(0);
  function increment()
  {
    setcount(count+1) //0+1
    setcount(count+1) //will do the same operation (0+1) 
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