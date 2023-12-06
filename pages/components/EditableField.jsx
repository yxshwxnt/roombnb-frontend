import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const EditableField = ({ value, onSubmit }) => {
  const [editing, setEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onSubmit(newValue);
    setEditing(false);
  };

  return (
    <div className="relative">
      {editing ? (
        <>
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="border border-gray-300 rounded-md p-1 mr-2"
          />
          <button
            onClick={handleSave}
            className="bg-primary text-white py-1 px-2 text-md rounded-md cursor-pointer"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            onClick={handleEdit}
            className="border border-gray-300 rounded-md p-1 pr-6"
          >
            {value}
          </span>
        </>
      )}
    </div>
  );
};

export default EditableField;
