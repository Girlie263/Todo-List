
import { dummyData } from "./Components/todos"

function App() {
  return (
    <main className="bg-gray-100 h-screen">
      <h1 className="font-bold text-3xl text-center">Todos</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {dummyData.map(todo => (
            <p key={todo.id} className="text-center">
              {todo.title}</p>
          ))}
        </div>
      </div>
    </main>
  )

}  

export default App