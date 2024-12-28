import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask, deleteTask, toggleTask } from "../redux/slices/tasksSlice";
import './taskManager.css'; // Import your custom CSS here



const TaskManager = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all"); // "all", "completed", "pending"
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    dispatch(addTask({ id: Date.now(), title: newTask, completed: false }));
    setNewTask("");
  };

  const handleUpdateTask = () => {
    if (!editTaskTitle.trim()) {
      alert("Task title cannot be empty!");
      return;
    }
    dispatch(updateTask({ id: editTaskId, title: editTaskTitle }));
    setEditTaskId(null);
    setEditTaskTitle("");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // "all"
  });

  return (
    <div className="task-manager bg-white rounded shadow-lg p-6 max-w-xl mx-auto mt-10">
      <h1 className="task-title">Task Tracker</h1>

      {/* Add Task Section */}
      <div className="task-add-container">
        <input
          type="text"
          placeholder="Add a new task..."
          className="task-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="task-add-button" onClick={handleAddTask}>
          Add
        </button>
      </div>

      {/* Filters */}
      <div className="task-filter-container">
        <button
          className={`task-filter-button ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`task-filter-button ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={`task-filter-button ${filter === "pending" ? "active" : ""}`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      {/* Task List */}
      <div>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div key={task.id} className="task-item">
              {editTaskId === task.id ? (
                <>
                  <input
                    className="task-edit-input"
                    type="text"
                    value={editTaskTitle}
                    onChange={(e) => setEditTaskTitle(e.target.value)}
                  />
                  <button className="task-save-button" onClick={handleUpdateTask}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <div className="task-details">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => dispatch(toggleTask(task.id))}
                      className="task-checkbox"
                    />
                    <span className={`task-title ${task.completed ? "completed" : ""}`}>
                      {task.title}
                    </span>
                  </div>
                  <div className="task-action-buttons">
                    <button
                      className="task-edit-button"
                      onClick={() => {
                        setEditTaskId(task.id);
                        setEditTaskTitle(task.title);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="task-delete-button"
                      onClick={() => dispatch(deleteTask(task.id))}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="task-no-tasks">No tasks found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
