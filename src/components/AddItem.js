import React, { useState, useRef, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./AddItem.css";

const AddItem = ({
  item,
  onDelete,
  isEdit,
  onEdit,
  onSave,
  onCancel,
  onCheck,
}) => {
  const [updatedText, setUpdatedText] = useState(item.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  const handleSave = () => {
    onSave(item.id, updatedText);
  };

  const handleCancel = () => {
    setUpdatedText(item.text);
    onCancel(item.id);
  };

  return (
    <li className="item-li">
      <div className="item-container">
        {isEdit ? (
          <input
            ref={inputRef}
            className="item input-edit"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
        ) : (
          <div className={`item${item.isChecked ? " checked" : ""}`}>
            {item.text}
          </div>
        )}
        <div className="icon-container">
          {isEdit ? (
            <>
              <button className="edit-save btn" onClick={handleSave}>
                <FaCheck />
              </button>
              <button className="edit-cancel btn" onClick={handleCancel}>
                <FaTimes />
              </button>
            </>
          ) : (
            <>
              <div className="custom-checkbox-wrapper">
                <input
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  checked={item.isChecked}
                  onChange={() => onCheck(item.id)}
                  className="custom-checkbox"
                />
                <label
                  htmlFor={`checkbox-${item.id}`}
                  className="custom-checkbox-label"
                ></label>
              </div>
              <button className="edit-btn btn" onClick={() => onEdit(item.id)}>
                <MdEdit />
              </button>
              <button
                className="delete-btn btn"
                onClick={() => onDelete(item.id)}
              >
                <MdDelete />
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default AddItem;
