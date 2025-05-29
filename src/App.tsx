import { useState, type  ChangeEvent,} from "react"
import type { ITask } from "./Interfaces";

const  App =() => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])



  const handleChange = (e:ChangeEvent<HTMLInputElement>): void => {
    if(e.target.value === 'task') {
      setTask(e.target.value)
    }else {
      setDeadline(Number(e.target.value))
    }
  };

  const handleClick = (): void => {
    const newTask: ITask = {
      taskName: task,
      deadline:deadline
    };
    setTodoList([...todoList, newTask])
  }




  return (
    <>
    <h1>Todo-List</h1>
    <div>
      <input type="text"  name="task"  placeholder="Enter Task" onChange={handleChange}/>
      <input type="number"name="deadline" placeholder="Enter deadline(in days)" onChange={handleChange} />
    </div>
    <button onClick={handleClick}>Add Task</button>
    </>
  )
}

export default App
