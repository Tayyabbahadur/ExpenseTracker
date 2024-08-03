import React, { useState } from "react";

const Editlilst = ({ index, expense, Setlist, list,setEdit }) => {
  // Initialize updatedItem with a copy of the expense object
  const [updatedItem, setUpdatedItem] = useState({ ...expense });

  const handleUpdate = (e) => {
    // Map through the list to find the item you want to update
    const updatedList = list.map((item, i) => {
      console.log("papa" ,i)
      if (i === index) {
        item.title = updatedItem.title;
        item.amount= updatedItem.amount;
        item.category = updatedItem.category;
        item.date = updatedItem.date;
       
        return { ...item}; // Update the title
      } else {
        return item;
      }
    });
    console.log(updatedList);
    // Set the updated list back in the state
    Setlist(updatedList);
    setEdit(false)
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    // Update the copy of the item in updatedItem
    setUpdatedItem({
      ...updatedItem,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        id="title"
        name="title"
        value={updatedItem.title}
        onChange={handleOnChange}
      />
      <input
        type="text"
        id="amount"
        name="amount"
        value={updatedItem.amount}
        onChange={handleOnChange}
      />
      <select
        className="inputcat"
        id="Category"
        name="category"
        value={updatedItem.category}
        onChange={handleOnChange}
      >
        <option value="Debit">Debit</option>
        <option value="Credit">Credit</option>
      </select>
      <input
        type="text"
        id="date"
        name="date"
        value={updatedItem.date}
        onChange={handleOnChange}
      />
      <button type="button" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default Editlilst;
