import { useState } from "react"
import { v4 as uuid } from "uuid";
const TaskMaker = ({tasks, setTasks, backUptasks, setBackup}) => {
  let [description, setNewTask] = useState("")
  //description is the new task
  const createTask = function (description) {
    return {id: uuid(), description: description, status: false }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${description}`)
    console.log(description)
    const newTask = createTask(description)
    setTasks([...tasks, newTask])
    setNewTask("")
    console.log("hi")
    setBackup([...backUptasks, newTask])
    console.log(backUptasks)
  }

  return (
    
      
     <form className="taskMaker containerItem"  onSubmit={handleSubmit}>
     <input className="taskBtn"type="submit" />
      <label >
        <input className="taskInput"
          type="text" 
          value={description}
          onChange={(e) => {setNewTask(e.target.value)}}
        />
      </label>
      
    </form>
    
  )
}

export default TaskMaker
