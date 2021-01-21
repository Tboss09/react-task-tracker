import React from 'react'
import Task from './Task'

const Tasks = ({ tasksByTayo, onToggle, onDelete }) => {

    return (
        <>
            {tasksByTayo.map(task => (
                <Task key={task.id} tasksByTayo={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
