import { useState } from "react";
import { useTaskStore } from "../../stores/TaskStore";
import styles from "./TaskForm.module.css";

const TaskForm = ({ closeModal }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleTaskChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.length > 0) {
      addTask(taskTitle);
      setTaskTitle("");
      closeModal();
    } else {
      alert("Please fill out title field!");
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            name="task"
            type="text"
            placeholder="Title"
            value={taskTitle}
            onChange={handleTaskChange}
          />
        </div>
        <button type="submit" className={styles.formBtn}>
          Add
        </button>
      </form>
    </>
  );
};

export default TaskForm;
