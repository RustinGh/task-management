import cx from "classname";
import styles from "./Task.module.css";
import { useTaskStore } from "../../stores/TaskStore";
import { TASK_STATUSES } from "../../constants/Task";

const Task = (props) => {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const dragTask = useTaskStore((state) => state.dragTask);

  const handleDragStart = () => {
    dragTask(props);
  };

  const handleDeleteTask = () => {
    deleteTask(props.id);
  };

  return (
    <div className={styles.task} onDragStart={handleDragStart} draggable>
      <h3
        className={cx({
          [styles.done]: props.status === TASK_STATUSES.done,
        })}
      >
        {props.title}
      </h3>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
