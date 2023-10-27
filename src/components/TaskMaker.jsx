import { useState } from "react"
import { v4 as uuid } from "uuid";
const TaskMaker = ({tasks, setTasks}) => {
  let [description, setNewTask] = useState("")
  const createTask = function (description) {
    return {id: uuid(), description: description, status: false }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${description}`)
    console.log(description)
    const newTask = createTask(description)
    setTasks([...tasks, newTask])
    console.log(newTask)
  }

  return (
    <div>
     <button style={{width: '50px', // Adjust the width and height as needed
    height: '50px',
    borderRadius: '50%', 
    border: '1px solid black', 
    backgroundColor: "white"}}></button>   
     <form onSubmit={handleSubmit}>
        
      <label>
        <input
          type="text" 
          value={description}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </label>
      <input style={{borderStyle: "none"}}type="submit" />
    </form>
    </div>
  )
}

export default TaskMaker
