import { useState } from 'react'

// Custom compoents 
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([0]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])

  }

  return (
    <>
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      { tasks && <TaskList tasks={tasks} />}
    </div>
    </>
  )
}

export default App
