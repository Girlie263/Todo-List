
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

  function handleDeleteTodo(id:number) {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id);
    })

  }



  return (
    <main className="bg-gray-100 h-screen overflow-y-auto ">
      <h1 className="font-bold text-3xl text-center mb-2">Todos</h1>
      <AddTodo 
      onAddTodo={(title) => {
        setTodos((prevTodos) => {
          return [
            ...prevTodos,
            {
              id: prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 1,
              title: title,
              completed: false,
              onDelete: handleDeleteTodo
            }
          ]
        })
      }}
      />
      <div className="max-w-lg mx-auto  ">
        <div className="space-y-2 shadow-md rounded-md bg-white p-4 mt-4 text-center">
          {todos.map(todo => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onCompletedTodo={handleCompletedTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
          {todos.length === 0 && (
          <p className="text-gray-400">No Todos, add todos</p>
        )}
        </div>
        
      </div>
    </main>
  )

}  

export default App