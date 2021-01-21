import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Apartment",
      day: "Feb 5th at 2:30pm",
      reminder: true

    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true

    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: true

    },
  ])

  // Add Tasks
  function addTask(task) {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }

  // Delete Tasks
  function deleteTask(id) {
    console.log("delete this", id);
    setTasks(tasks.filter(task => id !== task.id))
  }

  // Toggle Reminder
  function toggleReminder(id) {
    console.log(id)
    setTasks(tasks.map(task => task.id === id
      ? { ...task, reminder: !task.reminder } : task))
  }


  return (
    <div className="container">
      <Header title="Task Runner" />

      {showAddTask && < AddTask onAdd={addTask} />
      }

      {tasks.length > 0 ?
        < Tasks tasksByTayo={tasks}
          onToggle={toggleReminder} onDelete={deleteTask} />

        : "No Task To Show"}

    </div>
  )
}
export default App;