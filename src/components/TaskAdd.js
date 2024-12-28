// src/components/TaskAdd.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../redux/slices/tasksSlice';

const TaskAdd = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === '') return;

    const newTask = {
      title: taskTitle,
      completed: false,
    };

    dispatch(addTask(newTask));
    setTaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskAdd;
