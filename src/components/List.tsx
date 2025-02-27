import Task from './Task';

type ListProps = {
    tasks: string[];
    deleteTask: (index: number) => void;
    reorderTasks: (dragIndex: number, hoverIndex: number) => void;
}

const List = ({ tasks, deleteTask, reorderTasks}: ListProps) => {
  return (
    <div className="mx-12 mt-4 p-4 border-1 border-stone-600 rounded-2xl bg-stone-800 justify-center">
        <h3 className="pb-4 text-lg text-center">Okay! Here are your plans for today...</h3>
        {tasks.map((task, index) => (
            <Task key={index} task={task} index={index} deleteTask={deleteTask} reorderTasks={reorderTasks} />
        ))}
    </div>
  )
}

export default List;
