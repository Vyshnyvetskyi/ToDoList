import React from 'react';

function InputField({ newTask, handleInputChange, addTask }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        add
      </button>
    </div>
  );
}

export default InputField;