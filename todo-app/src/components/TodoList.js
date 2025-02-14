import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleToggleComplete = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <form onSubmit={handleAddTask} className="todo-form">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className="todo-input"
                />
                <button type="submit" className="add-button">Add Task</button>
            </form>
            <ul className="todo-list">
                {tasks.map(task => (
                    <li key={task.id} className="todo-item">
                        <div className="todo-content">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleComplete(task.id)}
                                className="todo-checkbox"
                            />
                            <span className={task.completed ? 'completed' : ''}>
                                {task.text}
                            </span>
                        </div>
                        <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="delete-button"
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
