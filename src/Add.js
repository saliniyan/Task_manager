import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
import './Add.css';

const Add =({newitem,setnewItem,handlesubmit}) =>{
    const inputref=useRef()
    return (
        <div class="add">
        <form onSubmit={handlesubmit}>
            <label htmlFor="add">Add item: </label>
                <input
                autoFocus
                ref={inputref}
                id='add' 
                type="text"
                placeholder='Add item'
                value={newitem}
                onChange={(e)=>setnewItem(e.target.value)}
                 className="input-box"
                />
            <button type='submit'
            aria-label='Add Item'
            onClick={()=>inputref.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
        </div>
    )

}
export default Add