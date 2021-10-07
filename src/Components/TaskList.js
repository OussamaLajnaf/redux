import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

const TaskList = () => {
    const todos = useSelector(state => state.todos)

    return (
        <div>
            {
                todos.map((el,i) => <TaskCard el={el} key={i}/>)
            }
        </div>
    )
}

export default TaskList
