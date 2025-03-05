import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TaskType } from "../hooks/useTasks";

type TaskProps = {
  task: TaskType;
  index: number;
  deleteTask: (task: string) => void;
  reorderTasks: (dragIndex: number, hoverIndex: number) => void;
};

const Task = ({ task, deleteTask, index, reorderTasks }: TaskProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "TASK",
    drop: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        reorderTasks(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`flex flex-row items-center place-content-between border-b-[0.25px] border-stone-300 dark:border-stone-600 pb-2 mb-2 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="flex place-content-start items-center">
        <p className="flex justify-center items-center mr-4 hover:cursor-grab">
          <span className="material-symbols-outlined text-stone-500">
            drag_handle
          </span>
        </p>
        <input
          type="checkbox"
          id="task"
          name="task"
          value="task-complete"
          className="flex justify-center items-center w-5 h-5 appearance-none border border-stone-300 dark:border-stone-300 rounded bg-stone-200 dark:bg-stone-700 checked:bg-green-400 checked:border-green-500 dark:checked:bg-green-400 checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
        />
        <p className="pl-4">{task.content}</p>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="border-0 rounded-lg bg-red-500 hover:bg-red-700 dark:bg-rose-700 dark:hover:bg-rose-500 text-white p-2 flex justify-center items-center hover:cursor-pointer"
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};

export default Task;
