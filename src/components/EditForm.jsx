
import React from 'react'
import { useState } from 'react';
 import {CheckIcon} from '@heroicons/react/24/solid';


const EditForm = ({editedTask, updateTask}) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
    // start here - 1:03:10
    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({... editedTask, name: updatedTaskName})
        
    }
  
    return (
    <div 
        role="dialog" 
        aria-aria-labelledby="editTask"
        // onClick={}
        >
        <form  
            className="todo"
            onSubmit={handleFormSubmit}
            >
            
            
            <div className="wrapper">
                <input 
                    type="text" 
                    id="editTask"
                    className="input"
                    value={updatedTaskName}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder='Update Task' 
                />


                <label 
                    htmlFor="task"
                    className='label'
                >Update Task</label>
            </div>
            <button 
                className="btn"
                aria-label={`Confirm edited task to now read ${updatedTaskName}`}
                type="submit"
            >
            <   CheckIcon strokeWidth={2} height={24} width={24} />
            
            </button>
        </form>
    </div>
  )
}

export default EditForm