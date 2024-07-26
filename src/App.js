import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import AddList from "./components/AddList";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 0, text: "밥 먹기", isChecked: false },
  ]);
  const [currentText, setCurrentText] = useState("");
  const [isEdit, setIsEdit] = useState({});
  const [undoneCount, setUndoneCount] = useState(0);

  useEffect(() => {
    setUndoneCount(todoList.filter((item) => !item.isChecked).length);
  }, [todoList]);

  const handleCheck = (id) => {
    setTodoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!currentText.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: currentText,
      isChecked: false,
    };

    setTodoList((prevList) => [...prevList, newTodo]);
    setCurrentText("");
  };

  const handleChange = (e) => {
    setCurrentText(e.target.value);
  };

  const handleDelete = (id) => {
    setTodoList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setIsEdit((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCancel = (id) => {
    setIsEdit((prev) => ({ ...prev, [id]: false }));
  };

  const handleSave = (id, newText) => {
    setTodoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
    setIsEdit((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="main-container">
      <div className="main-title">Todo-List</div>
      <TodoForm
        AddBtn={handleAdd}
        what={currentText}
        handleWhat={handleChange}
      />
      <AddList
        list={todoList}
        setTodoList={setTodoList}
        onDelete={handleDelete}
        isEdit={isEdit}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
        onCheck={handleCheck}
        undoneCount={undoneCount}
      />
    </div>
  );
};

export default App;
