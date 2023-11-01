
const Tasks = ({tasks, setTasks, backUpTasks, setBackUp}) => {
  const removeTask = function (id) {
    const newList = tasks.filter(task => task.id !== id)
    const newBackUp = backUpTasks.filter(task => task.id !== id)
    setTasks(newList)
    setBackUp(newBackUp)
  }
  const changeStatus = function (id) {
   const updatedTaks = tasks.map((task) => {
    if(task.id == id) {task.status = !task.status; console.log(task.status); return task}
    else return task
  })
  setTasks(updatedTaks) 
  }
  
  return (
    <div className="containerItem">
      {tasks.map((task) => (
        <div className={`{task} task` }  key={task.id} >
            <button onClick={() => changeStatus(task.id)} style={{
    width: '50px', // Adjust the width and height as needed
    height: '50px',
    borderRadius: '50%', 
    border: '1px solid black', 
    backgroundColor: task.status ? 'green' : 'red',
  }}></button>
            <p>{task.description}</p> 
            
            <button onClick={() => removeTask(task.id)}>X</button>
            </div>
            
      ))}

      
    </div>
  )
}

export default Tasks;
