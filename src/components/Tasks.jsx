
const Tasks = ({tasks, setTasks}) => {
  const removeTask = function (id) {
    const newList = tasks.filter(task => task.id !== id)
    setTasks(newList)
  }
  
  
  return (
    <div>
      {tasks.map((task) => (
        <div className={task} key={task.id}>
            <button onClick={() => {task.status = !task.status;  setTasks(...tasks);} } style={{
    width: '50px', // Adjust the width and height as needed
    height: '50px',
    borderRadius: '50%', 
    border: '1px solid black', 
    backgroundColor: task.status ? 'green' : 'red',
  }}></button>
            <h2>{task.description}</h2> 
            
            <button onClick={() => removeTask(task.id)}>Remover</button>
            </div>
            
      ))}

      
    </div>
  )
}

export default Tasks;