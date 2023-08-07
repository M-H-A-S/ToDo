
import React from 'react'
import { useState } from 'react';
 import {PlusIcon} from '@heroicons/react/24/solid';


const EditForm = ({editedTask}) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
    // start here - 1:00:17
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
    }
  
    return (
    <form  
        className="todo"
        onSubmit={handleFormSubmit}
        >
        
        
        <div className="wrapper">
            <input 
                type="text" 
                id="task"
                className="input"
                value={task}
                onInput={(e) => setTask(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder='Enter Task' 
            />


            <label 
                htmlFor="task"
                className='label'
            >Enter Task</label>
        </div>
        <button 
            className="btn"
            aria-label="Add Task"
            type="submit"
        >
        <   PlusIcon  />
        
        </button>
    </form>
  )
}

export default EditForm