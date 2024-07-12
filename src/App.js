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
  return (
    <div className="App">
      {items.map((i)=>(
        <li>
          <input 
          type="checkbox"
          checked={i.status}
          />
          <label>{i.item}</label>
          <button>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default App;
