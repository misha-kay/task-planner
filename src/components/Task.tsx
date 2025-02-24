type ListProps = {
  tasks: string[];
  deleteTask: (index: number) => void;
};

const Task = ({ tasks, deleteTask }: ListProps) => {
  return tasks.map((task, index) => (
        <div key={index} className="flex flex-row items-center place-content-between border-b-[0.25px] border-stone-600 pb-2 mb-2">
            <div className="flex place-content-start items-center">
                <p className="flex justify-center items-center mr-4 hover:cursor-grab"><span className="material-symbols-outlined">drag_handle</span></p>
                <input type="checkbox" className="flex justify-center items-center w-5 h-5" />
                <p key={index} className="pl-4">{task}</p>
            </div>
            <button onClick={() => deleteTask(index)} className="border-0 rounded-lg bg-rose-700  hover:bg-rose-500 p-2 flex justify-center items-center hover:cursor-pointer"><span className="material-symbols-outlined">delete</span></button>
        </div>
      ))
};

export default Task;
