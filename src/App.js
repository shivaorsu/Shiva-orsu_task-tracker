// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLogin from "./components/AuthLogin";
import TaskManager from "./components/TaskManager";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLogin />} />
      <Route path="/tasks" element={<TaskManager />} />
    </Routes>
  );
};

export default App;
