
import { dummyData } from "./Components/todos"
import TodoItem from "./Components/TodoItem";
import { useState } from "react";
import AddTodo from "./Components/AddTodo";

function App() {
  const [todos,setTodos]= useState(dummyData);

  function handleCompletedTodo(id: number, completed: boolean) {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: completed }
        } else {
          return todo
        }
      })
    })
  }


  return (
    <main className="bg-gray-100 h-screen">
      <h1 className="font-bold text-3xl text-center">Todos</h1>
      <AddTodo 
      onAddTodo={(title) => {
        setTodos((prevTodos) => {
          return [
            ...prevTodos,
            {
              id: prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 1,
              title: title,
              completed: false
            }
          ]
        })
      }}
      />
      <div className="max-w-lg mx-auto">
        <div className="space-y-2 shadow-md rounded-md bg-white p-4 mt-4 text-center">
          {todos.map(todo => (
            <TodoItem todo={todo}
            key ={todo.id}
            onCompletedTodo={handleCompletedTodo}

             />
            
          ))}
        </div>
      </div>
    </main>
  )

}  

export default App