import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import AddTodo from './component/Addtodo';



function App() {
  const [data, setData] = useState()
  const { id } = useParams();
  const [searchParams] = useSearchParams()
  const mode = searchParams.get("mode")
  

  useEffect(() => {
      axios.get("http://localhost:3000/todolist")
        .then((response) => {
          console.log(response);
          setData(response.data)
      }).catch(error => console.error(error))
  }, [])

  const deletetodolist = (id) => {
    
    axios.delete(`http://localhost:3000/todolist/${id}`)
      .then(() => console.log(`La tâche ${id} est correctement supprimée`))
      .catch((error) => {
        console.error(error);
      });

      Navigate("/")
  }

  return (
    <>
      <Link to="/addtodo">Ajouter une tâche</Link>
      <div className="card-container">
        {data &&
          data.map((todolist) => (
            <div key={todolist.id} className="card">
              <h2 className="card-title">{todolist.title}</h2>
              <p className="card-text"><strong>Task: </strong> {todolist.task}</p>
              <p className="card-text"> <strong>Completed: </strong> {todolist.completed}</p>
              <p className="card-text"><strong>Due Date: </strong> {todolist.due_date}</p>
              <div className='btn'>
              <button onClick={() => deletetodolist(todolist.id)}>Supprimer</button>
              <Link to={`/updatetodo/${todolist.id}`}>Modifier</Link>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default App
