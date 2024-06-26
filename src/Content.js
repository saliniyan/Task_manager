import './App.css'
import { useState } from 'react';
function Content()
{
    const [item,setitem]=useState([
      {
        id:1,
        value:"wake up",
        check:true
      },
      {
        id:2,
        value:"eat",
        check:true
      },
      {
        id:3,
        value:"sleep",
        check:true
      }
    ]
    )
  return(
    <main>
      <ul>{
        item.map((i)=>(
          <li>
            <input type="checkbox" checked={i.check} />
            <label>{i.value}</label> 
          </li>
        ))
      }
      </ul>
    </main>
  )
}
export default Content; 