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
    <div className="taskMaker containerItem" /* style={{
      backgroundColor: document.body.className == "lightTheme"  ? 'green' :  'red'
    }}*/> 
      
     <form  onSubmit={handleSubmit}>
     <input style={{width: '50px', // Adjust the width and height as needed
    height: '50px',
    borderRadius: '50%', 
    border: '1px solid black', 
    backgroundColor: "white"}}type="submit" />
      <label>
        <input
          type="text" 
          value={description}
          onChange={(e) => {setNewTask(e.target.value)}}
        />
      </label>
      
    </form>
    </div>
  )
}

export default TaskMaker
