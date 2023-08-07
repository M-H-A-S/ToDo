import styles from './TaskItem.module.css';

const TaskItem = ({task}) => {
  return (
    <li className={styles.task}>
        <div className={styles["task-group"]}>
            <input 
                type="checkbox" 
            />
        </div>
    </li>
  )
}

export default TaskItem