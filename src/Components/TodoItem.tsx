import {type Todo } from '../types/todo';

interface TodoItemProps {
    todo: Todo;
    onCompletedTodo: (id: number, completed: boolean) => void;
}


export default function TodoItem({todo, onCompletedTodo}:TodoItemProps) {
    return (
        <div>
            <label>
                <input type="checkbox"
                checked = {todo.completed}
                onChange={(e) => onCompletedTodo(todo.id, e.target.checked)}
                 />
                 <span className={ todo.completed ? "line-through gray-600 text-gray-300": ""}>{todo.title}</span>
            </label>
        </div>
    )
}