import { nanoid } from "nanoid";
import { useEffect, useId, useState } from "react";

export type TaskType = {
  id: string;
  content: string;
};

export function useTasks() {
  const [tasks, set] = useState<TaskType[]>([]);

  function saveTask(task: string) {
    const id = nanoid(4);
    if (task.trim() === "") return;
    set((s) => {
      const temp = [...s, { id, content: task }];
      saveToLocalStorage(temp);
      return temp;
    });
  }

  function deleteTask(id: string) {
    set((s) => {
      const clearTasks = s.filter((task) => task.id !== id);
      saveToLocalStorage(clearTasks);
      return clearTasks;
    });
  }

  function saveToLocalStorage(tasksToSave: TaskType[]) {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasksToSave));
    } catch (e) {
      console.error("ERROR: saveToLocalStorage: ", e);
    }
  }

  function loadFromLocalStorage() {
    const tasksFromLocalStorage = localStorage.getItem("tasks");

    if (!tasksFromLocalStorage) {
      console.log(
        "ERROR: loadFromLocalStorage: No tasks found in localStorage"
      );
      return;
    }

    try {
      const parsedTasks: TaskType[] = JSON.parse(tasksFromLocalStorage);
      set(parsedTasks);
    } catch (e) {
      console.log(
        "ERROR: loadFromLocalStorage: Couldn't parse localStorage tasks"
      );
    }
  }

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  return { tasks, saveTask, deleteTask, set };
}
