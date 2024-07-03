import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import '../App.css'; // Import your CSS file

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index) => {
    const newTask = prompt('Edit Task:', tasks[index]);
    if (newTask) {
      dispatch(editTask(index, newTask));
    }
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <div className="task-text">{task}</div>
          <div>
            <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
            <button className="edit-btn" onClick={() => handleEditTask(index)}>Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
