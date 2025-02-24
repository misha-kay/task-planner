import { useState } from 'react';
import './App.css';
import Form from './components/form'
import List from './components/list'
import Tooltip from './components/Tooltip';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [showTooltip, setShowTooltip] = useState(false);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
    // Handle show & hide tooltip
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter ((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>Lets Get Stuff Done Today!</h1>
      <Form addTask={addTask}/>
      {/* Only show List and Tooltip if there's at least one Task */}
      {tasks.length > 0 && <List tasks={tasks} deleteTask={deleteTask} />}
      {/* Tooltip appears once a Task is added */}
      <Tooltip hide={!showTooltip} />
    </>
  );
};

export default App;
