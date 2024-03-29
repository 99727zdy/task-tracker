import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks,setTasks]=useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": false
      },
      {
          "id": 3,
          "text": "working at company",
          "day": "Feb 6th at 1:30pm",
          "reminder": false
      },
      {
        "id": 4,
        "text": "working at company",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
    },
    {
      "id": 5,
      "text": "working at company",
      "day": "Feb 6th at 1:30pm",
      "reminder": false
  }
])

// Delete Task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

// Toggle Reminder
const toggleReminder=(id)=>{
  console.log(id);
}

  return (
    <div className="container">
      <Header/>
      {tasks.length> 0? (<Tasks tasks={tasks} onDelete={deleteTask}/>)
      :('No Tasks To Show')}
    </div>
  );
}


export default App;
