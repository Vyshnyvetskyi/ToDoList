import React from 'react';

function TaskItem({
  task, index, isEditing, tempTask,
  handleEditChange, saveEdit, cancelEdit,
  startEditing, deleteTask, moveTaskUp, moveTaskDown
}) {
  return (
    <li>
      {isEditing === index ? (
        <>
          <input
            type="text"
            value={tempTask}
            onChange={handleEditChange}
          />
          <button className="save-button" onClick={() => saveEdit(index)}>
            Save
          </button>
          <button className="cancel-button" onClick={cancelEdit}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="text">{task}</span>
          <button
            className="edit-button"
            onClick={() => startEditing(index)}
          >
            Edit
          </button>
          <button
            className="delete-button"
            onClick={() => deleteTask(index)}
          >
            delete
          </button>
          <button
            className="move-button"
            onClick={() => moveTaskUp(index)}
          >
            UP
          </button>
          <button
            className="move-button"
            onClick={() => moveTaskDown(index)}
          >
            down
          </button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
