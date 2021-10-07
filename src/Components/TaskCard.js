import React from 'react'
import { useDispatch } from 'react-redux'
import { handelcomplete, handeldelete } from '../redux/action'
import EditTask from './EditTask'


const TaskCard = ( {el} ) => 
{
   const dispatch = useDispatch( )
return (
   <div className="task-card " >
   <hl id={el.isDone?"comp" :null}>{el.action}</hl>
<div ></div>
<button className="boton1" onClick={ ( )=>dispatch(handeldelete(el.id) ) }>Delete</button>
  <button className="boton2" onClick={ ( )=>dispatch(handelcomplete(el.id) ) }>Complete</button>
  <EditTask el={el}/>
</div>

      )
}

export default TaskCard