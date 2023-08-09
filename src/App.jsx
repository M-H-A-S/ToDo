import { useState } from 'react'

// Custom compoents 
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Add Task Function
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])

  }

  // Delete Function 
  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  } 

  // Toggle Task
  const ToggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id == id
        ? { ... t, checked: !t.checked }
        : t 
    )))
    

  }

  // Update Task
  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id == task.id
        ? { ... t, name: task.name }
        : t 
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    // TODO: previous state focus
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    // TODO: set focus back to original
  }

  return (
    <>
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing && (
          <EditForm 
          editedTask={editedTask}
          updateTask={updateTask}
          />
        )
      }
      
      <CustomForm addTask={addTask} />
      { tasks && (
        <TaskList 
          tasks={tasks} 
          deleteTask= {deleteTask}  
          ToggleTask= {ToggleTask}    
          enterEditMode={enterEditMode}
        />
        
        )}
    </div>
    </>
  )
}

export default App
