import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');
    function handleEnteredTask(event) {
        setEnteredTask(event.target.value);
    }
    function handleClick() {
        onAdd(enteredTask); // Call the onAdd function passed as a prop with the entered task
        // Clear the input field after adding the task
        setEnteredTask('');
    }
    return (
        <div className="flex items-center gap-4">
            <input type="text" onChange={handleEnteredTask} value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200"></input>
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    );
}
