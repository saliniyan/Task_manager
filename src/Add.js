import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Add =({newitem,setnewItem,handlesubmit}) =>{
    return (
        <form onSubmit={handlesubmit}>
            <label htmlFor="add">Add item: </label>
                <input
                autoFocus
                id='add' 
                type="text"
                placeholder='Add item'
                value={newitem}
                onChange={(e)=>setnewItem(e.target.value)}
                />
            <button type='submit'
            aria-label='Add Item'
            >
                <FaPlus />
            </button>
        </form>
    )

}
export default Add