import React, { useState, useEffect } from 'react'; 
import InputField from './components/InputField';
import TaskItem from './components/TaskItem';

function ToDoList() {

  const dataList = [
    'Тарас',
    'Презлята',
    'Анатолійович',
  ];


  const [tasks, setTasks] = useState([]); // списк
  const [newTask, setNewTask] = useState(''); // Нова задача
  const [isEditing, setIsEditing] = useState(null); // редагування
  const [tempTask, setTempTask] = useState(''); // Збереження редагування(тимчасове)

  useEffect(() => {
    setTasks(dataList); // Заповнюємо з dataList
  }, []); 
    function handleInputChange(event) {
    setNewTask(event.target.value); // Оновлюємо  newTask
  }
  function addTask() {
    if (newTask.trim() !== '') { //  чи не пусте
      setTasks((t) => [...t, newTask]); // нове завдання
      setNewTask(''); // Очищення
    }
  }
  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updateTasks); 
  }
  function moveTaskUp(index) {
    if (index > 0) { 
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]; // Змінюємо місцями завдання
      setTasks(updatedTasks); 
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) { // чи не є останнім
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]; // Змінюємо місцями завдання
      setTasks(updatedTasks); // Оновлюємо список завдань
    }
  }
  function startEditing(index) {
    setIsEditing(index);
    setTempTask(tasks[index]); // Зберігаємо поточне значення завдання у тимчасовий стан
  }
// Функція для збереження редагованого поля
  function saveEdit(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = tempTask; 
    setTasks(updatedTasks); // Оновлюємо 
    setIsEditing(null); // внесення
  }
 // Функція скасування 
  function cancelEdit() {
    setIsEditing(null); 
    setTempTask('');
  }
  function handleEditChange(event) {
    setTempTask(event.target.value); // Оновлюємо тимчасовий стан значенням з поля редагування
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <InputField
        newTask={newTask} 
        handleInputChange={handleInputChange} 
        addTask={addTask}
      />
      <ol>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            index={index}
            task={task}
            isEditing={isEditing}
            tempTask={tempTask}
            handleEditChange={handleEditChange}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
            startEditing={startEditing}
            deleteTask={deleteTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
