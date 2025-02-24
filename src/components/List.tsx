import Task from './Task'

const list = () => {
  return (
    <div className="mx-12 mt-4 p-4 border-1 border-stone-600 rounded-2xl bg-stone-800 justify-center">
        <h3 className="pb-4 text-lg">Okay! Here are your plans for today...<span className="text-xl"></span></h3>
        <Task />
        <Task />
        <Task />
        <Task />
    </div>
  )
}

export default list
