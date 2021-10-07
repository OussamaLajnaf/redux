import React from 'react'
import { useDispatch } from 'react-redux'
import { filTask } from '../redux/action'


const FilterTask = () => {
       const dispatch = useDispatch()
 return (
      <div>
       <button onClick={ ()=>{dispatch(filTask())}}>filter</button>
      </div>
     )
     }
export default FilterTask