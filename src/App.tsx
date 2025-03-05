import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Form from "./components/Form";
import List from "./components/List";
import { Tooltip } from "./components/Tooltip";
import { useTasks } from "./hooks/useTasks";
import DarkLightToggle from "./components/DarkLightToggle";

function App() {
  const { tasks, saveTask, deleteTask, set } = useTasks();
  const [showTooltip, setShowTooltip] = useState({
    hasShown: false,
    show: false,
  });

  const handleSaveTask = (task: string) => {
    saveTask(task);
    // Handle show & hide tooltip
    setShowTooltip((s) => ({ ...s, show: true }));
    setTimeout(() => setShowTooltip({ hasShown: true, show: false }), 5000);
  };

  const reorderTasks = (dragIndex: number, hoverIndex: number) => {
    const updatedTasks = [...tasks];
    const [draggedTask] = updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(hoverIndex, 0, draggedTask);
    set(updatedTasks);
  };

  return (
    <div>
      <header className="fixed top-0 right-0 p-8">
        <DarkLightToggle />
      </header>
      <div className="flex flex-col max-w-lg place-self-center">
        <DndProvider backend={HTML5Backend}>
          <h1 className="text-stone-800 dark:text-stone-200 text-4xl text-center">
            Lets Get Stuff Done Today!
          </h1>
          <Form saveTask={handleSaveTask} />
          {/* Only show List and Tooltip if there's at least one Task */}
          {tasks.length > 0 && (
            <List
              tasks={tasks}
              deleteTask={deleteTask}
              reorderTasks={reorderTasks}
            />
          )}
          {/* Tooltip appears once a Task is added */}
          <Tooltip show={showTooltip.show && !showTooltip.hasShown} />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
