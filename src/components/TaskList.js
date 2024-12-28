// src/components/TaskList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from '../redux/slices/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, status, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading tasks...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {tasks.length === 0 ? (
        <div>No tasks available</div>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-item">
            <div>{task.title}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
