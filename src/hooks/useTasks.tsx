import { useEffect, useState } from "react";

export function useTasks() {
  const [tasks, set] = useState<string[]>([]);

  function saveTask(task: string) {
    if (task.trim() === "") return;
    set((s) => {
      const updatedTasks = [...s, task];
      saveToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  }

  function deleteTask(task: string) {
    set((s) => {
      const clearTasks = s.filter((i) => i !== task);
      saveToLocalStorage(clearTasks);
      return clearTasks;
    });
  }

  function saveToLocalStorage(tasksToSave: string[]) {
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
      const parsedTasks: string[] = JSON.parse(tasksFromLocalStorage);
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
