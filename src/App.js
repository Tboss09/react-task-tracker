import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer)
    }
    getTasks();
  }, [])

  // Fetch Task From Api 
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json();
    return data;
  }

  // Fetch Task From Api 
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    return data;
  }


  // Add Tasks
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();

    setTasks([...tasks, data])

  }

  // Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter(task => id !== task.id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    console.log(updTask);

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(updTask)
    })
    
    const data = await res.json(); 

    setTasks(tasks.map(task => task.id === id
      ? { ...task, reminder: !data.reminder } : task))
  }


  return (
    <div className="container">
      <Header title="Task Runner"
        onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      {showAddTask && < AddTask onAdd={addTask} />}

      {tasks.length > 0
        ?
        < Tasks tasksByTayo={tasks}
          onToggle={toggleReminder} onDelete={deleteTask} />
        :
        "No Task To Show"}

    </div>
  )
}
export default App;