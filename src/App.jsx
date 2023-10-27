import { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'
import TaskMaker from './components/TaskMaker'
import Header from './components/Header'
function App() {
  const [tasks, setTasks] = useState( [
    { id: 1, description: 'Complete project proposal', status: false },
    { id: 2, description: 'Review and respond to emails', status: false},    { id: 3, description: 'Prepare for client meeting', status: false },
    { id: 4, description: 'Write a blog post', status: true },
    { id: 5, description: 'Finish coding assignment', status: false}
  ])

  return (
    <div>
      
      <Header/>
      <TaskMaker tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App
