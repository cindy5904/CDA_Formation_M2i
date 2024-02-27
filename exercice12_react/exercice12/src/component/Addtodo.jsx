import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const AddTodo = ({ onAddTodo }) => {
  const newTitleRef = useRef('');
  const newTaskRef = useRef('');
  const newCompletedRef = useRef(false);
  const newDueDateRef = useRef('');


  const handleAddTodo = () => {
    axios.post('http://localhost:3000/todolist', {
      title: newTitleRef.current.value,
      task: newTaskRef.current.value,
      completed: newCompletedRef.current.checked,
      due_date: newDueDateRef.current.value,
    })
      .then((response) => {
        onAddTodo(response.data);
        newTitleRef.current.value = '';
        newTaskRef.current.value = '';
        newCompletedRef.current.checked = false;
        newDueDateRef.current.value = '';
      })
      .catch((error) => {
        console.error(error);
      });
      Navigate("/")
  };

  return (
    <div>
      <label>
        Titre :
        <input
          type="text"
          ref={newTitleRef}
        />
      </label>
      <label>
        Tâche :
        <input
          type="text"
          ref={newTaskRef}
          
        />
      </label>
      <label>
        Date d'échéance :
        <input
          type="date"
          ref={newDueDateRef}

        />
      </label>
      <label>
        Terminé :
        <input
          type="checkbox"
          ref={newCompletedRef}
          
        />
      </label>
      <button onClick={handleAddTodo}>Ajouter</button>
    </div>
  );
};

export default AddTodo;
