import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setcategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setinputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setcategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.prototype = {
  setcategories: PropTypes.func.isRequired,
};

export default AddCategory;
