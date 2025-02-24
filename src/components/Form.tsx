import { useState } from 'react'; 

type FormProps = {
    addTask: (task: string) => void;
};

const Form = ({ addTask }: FormProps) => {

    const [task, setTask] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevents the page from refreshing
        e.preventDefault();

        // Avoids empty tasks being added to List
        if (task.trim() === '') return;

        // Adds task to List and clears input from form
        addTask(task);
        setTask('');
    };

    return (
        <div className="mx-12 mt-8 p-4 pb-6 border-1 border-stone-600 rounded-2xl bg-stone-800 justify-center">
            <h3 className="pb-4 text-lg">What would you like to get done today? <span className="text-xl">&#x1F469;&#x200D;&#x1F4BB;</span></h3>
            <form onSubmit={handleSubmit}>
                <input type="text" id="todo" placeholder="Task to do today..." value={task} onChange={(e) => setTask(e.target.value)} className="border-1 rounded-md mr-4 p-2 border-stone-500 bg-stone-700 w-sm"></input>
                <input type="submit" value="Add!" className="border-0 rounded-lg p-2 px-3 bg-violet-700 hover:bg-fuchsia-500 hover:cursor-pointer font-bold"></input>
            </form>
        </div>
    )
}

export default Form;