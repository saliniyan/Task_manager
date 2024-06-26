import './App.css'
import { useState } from 'react';
function Content()
{
  // function random()
  // {
  //   const a=["hai","hello","welcome"];
  //   const b=Math.floor(Math.random()*3);
  //   return a[b];
  // }
  const [count,setcount]=useState(10);
  const [count2,setcount2]=useState({name2:"hello",textcolor:"blue"});
  function increment()
  {
    setcount((prevcount)=>{return prevcount+1}) //count is just a parameter can give any name
    setcount(prevcount=> prevcount+1)
  }
  function decrement()
  {
    setcount(count-1)
  }
  function namechange()
  {
    setcount2({name2:"changed"})
    setcount2({textcolor:"red"})
  }
  return(
    <main>
       <p style={{ color: count2.textcolor }}>Now displays welcome {count2.name2}</p>
      <button onClick={namechange}>Click here</button>
      <br />
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </main>
  )
}
export default Content; 