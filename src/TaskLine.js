import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const TaskLine = ({ task, checkTask, deleteTask }) => {
  return (
    <li className="task" key={task.id}>
      <input
        type="checkbox"
        onChange={() => checkTask(task.id)}
        completed={task.completed}
      />

      <label
        style={task.completed ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => checkTask(task.id)}
      >
        {task.task}
      </label>

      <FaTrashAlt
        onClick={() => deleteTask(task.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${task.task}`}
      />
    </li>
  );
};

export default TaskLine;
