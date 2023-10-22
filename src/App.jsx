import { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'
function App() {
  const [tasks, setTasks] = useState( [
    { id: 1, description: 'Complete project proposal', status: 'In Progress' },
    { id: 2, description: 'Review and respond to emails', status: 'Pending' },
    { id: 3, description: 'Prepare for client meeting', status: 'Not Started' },
    { id: 4, description: 'Write a blog post', status: 'In Progress' },
    { id: 5, description: 'Finish coding assignment', status: 'Completed' }
  ])

  return (
    <div>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App
