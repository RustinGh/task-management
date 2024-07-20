import { useShallow } from "zustand/react/shallow";
import { useTaskStore } from "../../stores/TaskStore";
import styles from "./Column.module.css";
import Task from "../Task/Task";

const Column = ({ status }) => {
  const tasks = useTaskStore(
    useShallow((store) => store.tasks.filter((task) => task.status === status))
  );
  const dropTask = useTaskStore((store) => store.dropTask);

  const handleDropOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    dropTask(status);
  };

  return (
    <div
      className={styles.column}
      onDragOver={handleDropOver}
      onDrop={handleDrop}
    >
      <header className={styles.status}>
        <h2>{status}</h2>
        <small>({tasks.length})</small>
      </header>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
