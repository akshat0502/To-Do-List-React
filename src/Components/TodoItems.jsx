import React from 'react'
import checked from '../assets/checked.png'
import unchecked from '../assets/unchecked.png'
import deleteIcon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={checked} alt="" />
            <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
        </div>

        <img src={deleteIcon} className='w-3.5 cursor-pointer' alt="" onClick={()=>deleteTodo(id)}/>
        {/* <p className='w-3.5 cursor-pointer' onClick={()=>deleteTodo(id)}>delete</p> */}
    </div>
  )
}

export default TodoItems