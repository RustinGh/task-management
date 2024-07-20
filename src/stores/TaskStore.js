import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { TASK_STATUSES } from "../constants/Task";

const taskStore = (set) => ({
  tasks: [],
  draggedTask: null,
  addTask: (title) => {
    const id = uuidv4();
    const newTask = { id, title, status: TASK_STATUSES.todo };
    set((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  },
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  dragTask: (selectedTask) => set({ draggedTask: selectedTask }),
  dropTask: (newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === state.draggedTask.id ? { ...task, status: newStatus } : task
      ),
    })),
});

export const useTaskStore = create(persist(taskStore, { name: "store" }));
