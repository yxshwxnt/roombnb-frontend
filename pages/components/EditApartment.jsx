import React, { useState } from "react";

const EditApartment = ({ apartment, onSave }) => {
  const [formData, setFormData] = useState(apartment);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-lg"
        />
      </div>
      {/* Add more input fields for other apartment details (rent, location, description, etc.) */}
      <button type="submit" className="btn-primary">
        Save Changes
      </button>
    </form>
  );
};

export default EditApartment;
