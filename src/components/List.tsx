import { TaskType } from "../hooks/useTasks";
import Task from "./Task";

type ListProps = {
  tasks: TaskType[];
  deleteTask: (task: string) => void;
  reorderTasks: (dragIndex: number, hoverIndex: number) => void;
};

const List = ({ tasks, deleteTask, reorderTasks }: ListProps) => {
  return (
    <div className="mt-4 p-4 border-1 rounded-2xl border-stone-200 bg-stone-50 text-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 justify-center">
      <h3 className="pb-4 text-lg text-center">
        Okay! Here are your plans for today...
      </h3>
      {tasks.map((task, i) => (
        <Task
          key={task.id}
          task={task}
          index={i}
          deleteTask={deleteTask}
          reorderTasks={reorderTasks}
        />
      ))}
    </div>
  );
};

export default List;
