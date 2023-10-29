
const TodosChooser = ({tasks, setTasks, backUpTasks, setBackUp}) => {
    
  
    const completed = function (){
       const newList = backUpTasks.filter(task => task.status == true)
       setTasks(newList)
    }
    const active = function (){
        const newList = backUpTasks.filter(task => task.status != true)
        setTasks(newList)
     }
     const clearCompleted = function () {
        const newList = backUpTasks.filter(task => task.status != true)
        const newTaskList = tasks.filter(task => task.status != true)
        setTasks(newTaskList)
        setBackUp(newList)
     }
    return (
    <div>
      {tasks.length == 0 ? <p>You have no tasks left</p> : <p>You have {tasks.length} tasks remaining</p>}
      <div>
      <button onClick={() => setTasks(backUpTasks)}>All</button>
      <button onClick={() => active()}>Active</button>    
      <button onClick={() => completed()}>Completed</button>
      </div>
      <button onClick={() => clearCompleted()}>Clear Completed</button>
    </div>
  )
}

export default TodosChooser
/* 

Botões para escolher qual Todo All, Active & Completed 
Botão ClearCompleted
*/
