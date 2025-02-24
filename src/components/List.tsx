import Task from './Task';

type ListProps = {
    tasks: string[];
    deleteTask: (index: number) => void;
}

const List = ({ tasks, deleteTask}: ListProps) => {
  return (
    <div className="mx-12 mt-4 p-4 border-1 border-stone-600 rounded-2xl bg-stone-800 justify-center">
        <h3 className="pb-4 text-lg">Okay! Here are your plans for today...</h3>
        <Task tasks={tasks} deleteTask={deleteTask}/>
    </div>
  )
}

export default List;
