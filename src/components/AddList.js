import React from "react";
import "./AddList.css";
import AddItem from "./AddItem";
import { ReactSortable } from "react-sortablejs";

const AddList = ({
  list,
  setTodoList,
  onDelete,
  isEdit,
  onEdit,
  onSave,
  onCancel,
  onCheck,
  undoneCount,
}) => {
  return (
    <>
      <div className="undone-count">남은 할 일: {undoneCount}</div>
      <div className="list-container">
        <ReactSortable
          tag="ul"
          list={list}
          setList={setTodoList}
          animation={200}
          className="list-ul"
          easing="ease-in-out"
        >
          {list.map((item) => (
            <AddItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              isEdit={isEdit[item.id] || false}
              onEdit={onEdit}
              onSave={onSave}
              onCancel={onCancel}
              onCheck={onCheck}
            />
          ))}
        </ReactSortable>
      </div>
    </>
  );
};

export default AddList;
