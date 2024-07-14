import './App.css';
import { useState } from 'react';

function App() {
  const [items,setitems]=useState([
    {
      id:1,
      status:true,
      item:"play"
    },
    {
      id:2,
      status:true,
      item:"eat"
    },
    {
      id:3,
      status:false,
      item:"sleep"
    }
  ])
  const change=(id)=>{
    const listitem=items.map((i)=>i.id===id? {...i,status:!i.status}:i)
    setitems(listitem)
  }
  const handledelete=(id)=>{
    const deleteitem=items.filter((i)=>i.id===id)
    setitems(deleteitem)
  }
  return (
    <div className="App">
      {items.map((i)=>(
        <li key={i.id}>
          <input 
          type="checkbox"
          onChange={()=> change(i.id)}
          checked={i.status}
          />
          <label>{i.item}</label>
          <button onClick={()=>handledelete(i.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default App;
