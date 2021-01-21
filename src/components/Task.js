import { FaTimes } from 'react-icons/fa'
const Task = ({ tasksByTayo, onDelete, onToggle }) => {
    return (
        <div className={`task ${tasksByTayo.reminder ? "reminder" : ''}`}
            onDoubleClick={() => onToggle(tasksByTayo.id)} >
            <h3>
                {tasksByTayo.text}
                <FaTimes style={{ color: "red" }} onClick={() => onDelete(tasksByTayo.id)} />
            </h3>
            <p>{tasksByTayo.day}</p>
        </div>
    )
}

export default Task
