import './App.css';
import { useState } from 'react';
import Add from './Add';
import './Add.css';

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
    localStorage.setItem("to_do_list",JSON.stringify(listitem))
  }
  const handledelete=(id)=>{
    const deleteitem=items.filter((i)=>i.id!==id)
    setitems(deleteitem)
    localStorage.setItem("to_do_list",JSON.stringify(deleteitem))
  }

  const [newitem,setnewitem]=useState('')

  const handlesubmit =(e)=>
  {
    if(!newitem)//if no value is passed
      return;
    e.preventDefault() //to prevent default behaviour such as load when clivk sumbit
    console.log(e)
  }

  return (
    <div>
      <div className='add-container '>
      <Add 
        newitem={newitem}
        setnewItem={setnewitem}
        handlesubmit={handlesubmit}
      />
      </div>
    <div className="App">
      {items.map((i)=>(
        <li key={i.id}>
          <input 
          type="checkbox"
          onChange={()=> change(i.id)}
          checked={i.status}
          />
          <label onDoubleClick={()=> change(i.id)}>{i.item}</label>
          <button onClick={()=>handledelete(i.id)}>Delete</button>
        </li>
      ))}
    </div>
    </div>
  );
}

export default App;
