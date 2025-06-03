
import { dummyData } from "./Components/todos"
import TodoItem from "./Components/TodoItem";

function App() {
  return (
    <main className="bg-gray-100 h-screen">
      <h1 className="font-bold text-3xl text-center">Todos</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2 shadow-md rounded-md bg-white p-4 mt-4 text-center">
          {dummyData.map(todo => (
            <TodoItem todo={todo} />
            
          ))}
        </div>
      </div>
    </main>
  )

}  

export default App