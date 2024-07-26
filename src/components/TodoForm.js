import React from "react";
import "./TodoForm.css";
import { IoMdAdd } from "react-icons/io";

const TodoForm = ({ what, AddBtn, handleWhat }) => {
  return (
    <form onSubmit={AddBtn}>
      <div className="form-center">
        <div className="form-group">
          <div className="search-container">
            <input
              type="text"
              className="form-control"
              id="todo"
              name="todo"
              placeholder="예) 아침 운동"
              value={what}
              onChange={handleWhat}
            />
            <button type="submit" className="btn">
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
