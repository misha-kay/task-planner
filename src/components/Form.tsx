import { useState } from "react";

const Form = ({ saveTask }: { saveTask: (t: string) => void }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevents the page from refreshing
    e.preventDefault();
    // Adds task to List and clears input from form
    saveTask(task);
    setTask("");
  };

  return (
    <div className="mt-8 p-4 pb-6 border-1 rounded-2xl border-stone-200 bg-stone-50 text-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 justify-center">
      <h3 className="pb-4 text-lg text-center dark:text-offwhite">
        What would you like to get done today?{" "}
        <span className="text-xl">&#x1F469;&#x200D;&#x1F4BB;</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo"
          placeholder="Task to do today..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border-1 rounded-md mr-4 p-2 border-stone-200 bg-purple-50 dark:border-stone-500 dark:bg-stone-700 focus:bg-purple-100 focus:outline-purple-300 dark:focus:bg-stone-600 dark:focus:outline-purple-500 w-sm"
        ></input>
        <input
          type="submit"
          value="Add!"
          className="border-0 rounded-lg p-2 px-3 bg-violet-700 hover:bg-fuchsia-500 text-white hover:cursor-pointer font-bold"
        ></input>
      </form>
    </div>
  );
};

export default Form;
