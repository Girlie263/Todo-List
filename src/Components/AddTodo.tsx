import { useState } from "react";

interface AddTodoProps {
    onAddTodo: (title: string) => void,
}

export default function AddTodo({onAddTodo}: AddTodoProps) {

    const [title, setTitle] = useState<string>("");

    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (title.trim() === "") {
            return;
        }
        onAddTodo(title);
        setTitle("");
    }





    return (
        <div className="justify-center flex">
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value) } 
                className="border border-gray-300 py-1 grow items-center rounded-md"
                />
                <button type="submit" className="text-white bg-black hover:bg-gray-700 py-1 px-2 rounded-md">Add</button>
            </form>
        </div>
    )
}