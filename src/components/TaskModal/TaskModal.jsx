import styles from "./TaskModal.module.css";

function TaskModal({ children, closeModal }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <button onClick={closeModal}>X</button>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

export default TaskModal;
