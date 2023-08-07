import { useState } from 'react';
import styles from './TaskItem.module.css';

// Library imports 
import {CheckIcon} from '@heroicons/react/24/outline'
import {PencilIcon} from '@heroicons/react/24/outline'

const TaskItem = ({task}) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
  }

  return (
    <li className={styles.task}>
        <div className={styles["task-group"]}>
            <input 
                type="checkbox" 
                className={styles.checkbox}
                checked={isChecked}
                onChange={handleCheckboxChange}
                name = {task.name}
                id={task.id}
            />
            <label 
                htmlFor={task.id}
                className={styles.label}
            >
              {task.name}
              <p className={styles.checkmark}>
                <CheckIcon strokeWidth={2} width={24}
                height={24}/>
              </p>
            </label>
        </div>
        <div className={styles["task-group"]}>
          <button
            className='btn'
            aria-label={'Update ${task.name} Task'}
            // onClick={}
          >

          </button>

        </div> 


    </li>
  )
}

export default TaskItem