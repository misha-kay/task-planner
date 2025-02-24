const Task = () => {
  return (
    <div className="flex flex-row items-center place-content-between border-b-[0.25px] border-stone-600 pb-2 mb-2">
        <div className="flex place-content-start items-center">
            <p className="flex justify-center items-center mr-4 hover:cursor-grab"><span className="material-symbols-outlined">drag_handle</span></p>
            <input type="checkbox" className="flex justify-center items-center w-5 h-5"></input>
            <p className="pl-4">Task details...</p>
        </div>
        <button className="border-0 rounded-lg bg-rose-700  hover:bg-rose-500 p-2 flex justify-center items-center hover:cursor-pointer"><span className="material-symbols-outlined">delete</span></button>
    </div>
  )
}

export default Task
