import { useState } from 'react'

// Custom compoents 
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTasks] = useState(null);

  // Add Task Function
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])

  }

  // Delete Function 
  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  } 

  const ToggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id == id
        ? { ... t, checked: !t.checked }
        : t 
    )))
    // TODO: close the edit mode

  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id == task.id
        ? { ... t, name: task.name }
        : t 
    )))
  }


  return (
    <>
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <EditForm 
        editedTask={editedTask}
        updateTask={updateTask}
      />
      <CustomForm addTask={addTask} />
      { tasks && (
        <TaskList 
          tasks={tasks} 
          deleteTask= {deleteTask}  
          ToggleTask= {ToggleTask}    
        />
        
        )}
    </div>
    </>
  )
}

export default App
