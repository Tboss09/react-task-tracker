import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState(
    [
      {
        text: "Doctor's Apartment",
        day: "Feb 12 2021",
        reminder: true,
        id: 3
      },

      {
        text: "Hangout At Friends House",
        day: "March 10pm 2021",
        reminder: true,
        id: 3
      },

      {
        text: "Existing Tasks",
        day: "11pm",
        reminder: true,
        id: 3
      },
      {
        text: "Go To bed ",
        day: "Feb 06pm 2021",
        reminder: false,
        id: 4
      }
    ])

  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json();
  //   return data;
  // }


  // Add Tasks
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1

    const updatedTask = { ...task, id }

    // const res = await fetch('http://localhost:5000/tasks', {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(task)
    // });
    // const data = await res.json();

    setTasks([...tasks, updatedTask])

  }

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => id !== task.id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {



    setTasks(tasks.map(task => task.id === id
      ? { ...task, reminder: !task.reminder } : task))

    // const taskToToggle = await fetchTask(id);
    // const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    // console.log(updTask);

    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     'Content-type': "application/json"
    //   },
    //   body: JSON.stringify(updTask)
    // })

    // const data = await res.json();
  }


  return (
    <Router>
      <div className="container">
        <Header title="Task Runner"
          onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />



        <Route path="/" exact render={() => (
          <>
            {showAddTask && < AddTask onAdd={addTask} />}
            {tasks.length > 0
              ?
              < Tasks tasksByTayo={tasks}
                onToggle={toggleReminder} onDelete={deleteTask} />
              :
              "No Task To Show"}
          </>
        )} />

        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  )
}
export default App;