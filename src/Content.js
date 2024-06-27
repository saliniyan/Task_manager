import './App.css'
import { FaTrash } from "react-icons/fa";
function Content({item})
{
  return(
    <main>
      <ul>{
        item.map((i)=>(
          <li>
            <input type="checkbox" checked={i.check} />
            <label>{i.value}</label>
            <FaTrash 
            role="button"
            />
          </li>
        ))
      }
      </ul>
    </main>
  )
}
export default Content; 