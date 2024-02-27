import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Navigate, useSearchParams } from 'react-router-dom';

const Updatetodo = () => {
  const { id } = useParams();
  const [data, setData] = useState()
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    title: '',
    task: '',
    completed: false,
    due_date: '',
  });


  useEffect(() => {
    axios.get(`http://localhost:3000/todolist/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data)
    }).catch(error => console.error(error))
}, [])

  const handleUpdateTodo = () => {
    console.log(id); 
    axios.put(`http://localhost:3000/todolist/${id}`, formData)
      .then(response => {
        console.log(response.data);
        
        
      })
      .catch(error => console.error(error));
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // navigate(`/`)
  }

  return (
    <div>
      <h2>Modifier la tâche</h2>
      <label>
        Titre :
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Tâche :
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
        />
      </label>
      <label>
        Date d'échéance :
        <input
          type="date"
          name="due_date"
          value={formData.due_date}
          onChange={handleChange}
        />
      </label>
      <label>
        Terminé :
        <input
          type="checkbox"
          name="completed"
          checked={formData.completed}
          onChange={() => setFormData({ ...formData, completed: !formData.completed })}
        />
      </label>
      <button onClick={handleUpdateTodo}>Enregistrer les modifications</button>
    </div>
  );
}

export default Updatetodo;
