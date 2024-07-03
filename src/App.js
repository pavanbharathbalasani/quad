import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="container">
      <h1>To-Do App</h1>
      <div className="input-container">
        <TaskInput />
      </div>
      <TaskList />
    </div>
  );
};

export default App;
