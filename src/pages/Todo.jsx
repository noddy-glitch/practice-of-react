import React, { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [inputs, setInputs] = useState({
    task: "",
    description: "",
    date: "",
  });

  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputs.task.trim()) {
      alert("Task is required!");
      return;
    }

    if (isEdit) {
      []
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...inputs, id: editId } : todo
        )
      );
      resetForm();
    } else {
      setTodos([...todos, { ...inputs, id: Date.now(), completed: false }]);
      resetForm();
    }
  };

  const handleEdit = (item) => {
    setInputs({
      task: item.task,
      description: item.description,
      date: item.date,
    });
    setIsEdit(true);
    setEditId(item.id);
  };
  const handleComplete = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};


  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const resetForm = () => {
    setInputs({ task: "", description: "", date: "" });
    setIsEdit(false);
    setEditId(null);
  };

  return (
    <div className="todo-app">
      <h2 className="todo-title">Task Manager</h2>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Task name"
          className="todo-input"
          value={inputs.task}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Task description"
          className="todo-input"
          value={inputs.description}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          className="todo-input"
          value={inputs.date}
          onChange={handleChange}
        />

        <div className="todo-buttons">
          <button type="submit" className="btn btn-primary">
            {isEdit ? "Update Task" : "Add Task"}
          </button>

          {isEdit && (
            <button type="button" className="btn btn-secondary" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="todo-list-title">Your Tasks</h3>

      <ul className="todo-list">
        {todos.map((item) => (
          <li className="todo-item" key={item.id}>
            <div className="todo-details">
              <strong className={`todo-task ${item.completed ? "completed-task" : ""}`}>
  {item.task}
</strong>

              <span className="todo-description">{item.description}</span>
              <span className="todo-date">{item.date}</span>
            </div>

            <div className="todo-actions">
              <button className="btn btn-edit" onClick={() => handleEdit(item)}>
                Edit
              </button>
              <button className="btn btn-delete" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
              <button
                className="btn btn-complete"
                onClick={() => handleComplete(item.id)}
              >
                {item.completed ? "Undo" : "Complete"}
              </button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
