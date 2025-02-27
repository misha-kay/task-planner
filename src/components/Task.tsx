import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

type TaskProps = {
  task: string;
  index: number;
  deleteTask: (index: number) => void;
  reorderTasks: (dragIndex: number, hoverIndex: number) => void;
};

const Task = ({ task, deleteTask, index, reorderTasks}: TaskProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  
  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        reorderTasks(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));
  
  return (
        <div ref={ref} className={`flex flex-row items-center place-content-between border-b-[0.25px] border-stone-600 pb-2 mb-2 ${isDragging ? 'opacity-50' : 'opacity-100'}`}>
            <div className="flex place-content-start items-center">
                <p className="flex justify-center items-center mr-4 hover:cursor-grab"><span className="material-symbols-outlined">drag_handle</span></p>
                <input type="checkbox" className="flex justify-center items-center w-5 h-5" />
                <p className="pl-4">{task}</p>
            </div>
            <button onClick={() => deleteTask(index)} className="border-0 rounded-lg bg-rose-700  hover:bg-rose-500 p-2 flex justify-center items-center hover:cursor-pointer"><span className="material-symbols-outlined">delete</span></button>
        </div>
      )
};

export default Task;
