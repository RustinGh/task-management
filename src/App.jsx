import TaskForm from "./components/TaskForm";
import Column from "./components/Column";
import TaskModal from "./components/TaskModal";
import useBoolean from "./hooks/useBoolean";
import { TASK_STATUSES } from "./constants/Task";
import "./App.css";

function App() {
  const [value, handleOpen, handleClose] = useBoolean(false);

  return (
    <>
      <div className="appContainer">
        <header className="header">
          <h1>Task Management</h1>
          <button onClick={handleOpen}>Add Task</button>
        </header>
        <div className="row">
          <Column status={TASK_STATUSES.todo} />
          <Column status={TASK_STATUSES.inProgress} />
          <Column status={TASK_STATUSES.done} />
        </div>
      </div>
      {value && (
        <TaskModal closeModal={handleClose}>
          <TaskForm closeModal={handleClose} />
        </TaskModal>
      )}
    </>
  );
}

export default App;
