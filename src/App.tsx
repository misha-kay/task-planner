import { useState } from 'react';
import Form from './components/Form'
import List from './components/List'
import { Tooltip } from './components/Tooltip';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [showTooltip, setShowTooltip] = useState({hasShown: false, show: false});


  const addTask = (task: string) => {
    setTasks([...tasks, task]);
    // Handle show & hide tooltip
    setShowTooltip(s => ({...s, show: true}));
    setTimeout(() => setShowTooltip({hasShown: true, show: false}), 3000);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter ((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const reorderTasks = (dragIndex: number, hoverIndex: number) => {
    const updatedTasks = [...tasks];
    const [draggedTask] = updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(hoverIndex, 0, draggedTask);
    setTasks(updatedTasks);
  }

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <h1>Lets Get Stuff Done Today!</h1>
        <Form addTask={addTask} />
        {/* Only show List and Tooltip if there's at least one Task */}
        {tasks.length > 0 && <List tasks={tasks} deleteTask={deleteTask} reorderTasks={reorderTasks} />}
        {/* Tooltip appears once a Task is added */}
        <Tooltip show={showTooltip.show && !showTooltip.hasShown} />
      </DndProvider>
    </>
  );
};

export default App;
