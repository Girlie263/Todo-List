import { Trash2 } from 'lucide-react';
import {type Todo } from '../types/todo';

interface TodoItemProps {
    todo: Todo;
    onCompletedTodo: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}


export default function TodoItem({todo, onCompletedTodo, onDelete}:TodoItemProps) {
    return (
        <>
        <div className='flex items-center gap-1'>
    
            <label className='flex items-center gap-2 border rounded-md py-1  hover:bg-slate-50 grow'>
                <input type="checkbox" className='scale-110 ml-2'
                checked = {todo.completed}
                onChange={(e) => onCompletedTodo(todo.id, e.target.checked)}
                 />
                 <span className={ todo.completed ? "line-through gray-600 text-gray-300": ""} >{todo.title}</span>

            </label>
            <button className='p-2'
            onClick={() => onDelete(todo.id)}
            >
                <Trash2 size={20}  className='text-gray-500'/>
            </button>
        </div>
        </>
    )
}