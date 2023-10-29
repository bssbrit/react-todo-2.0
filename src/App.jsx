import { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'
import TaskMaker from './components/TaskMaker'
import Header from './components/Header'
import TodosChooser from './components/TodosChooser'
function App() {
  const [backUpTasks, setBackUp]= useState( [
    { id: 1, description: 'Complete project proposal', status: false },
    { id: 2, description: 'Review and respond to emails', status: false},    { id: 3, description: 'Prepare for client meeting', status: false },
    { id: 4, description: 'Write a blog post', status: true },
    { id: 5, description: 'Finish coding assignment', status: false}
  ])
  const [tasks, setTasks] = useState([...backUpTasks])
  return (
    <div>
      
      <Header/>
      <TaskMaker tasks={tasks} setTasks={setTasks} backUptasks={backUpTasks} setBackup= {setBackUp}/>
      <Tasks tasks={tasks} setTasks={setTasks} backUpTasks={backUpTasks} setBackUp = {setBackUp}/>
      <TodosChooser tasks={tasks} setTasks={setTasks} backUpTasks={backUpTasks} setBackUp={setBackUp}/>
    </div>
  )
}

export default App
