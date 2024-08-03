import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Editlilst from "./Editlilst";

function ExpenseInput() {
  const [addSection, setAddSection] = useState(false);
  const [update, setUpdate] = useState(-1);
  const [edit, setEdit] = useState(false)
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (
      formData.title.trim() === "" ||
      formData.amount.trim() === "" ||
      formData.date.trim() === ""
    ) {
      return;
    }

    setList([...list, formData]);
    setFormData({
      title: "",
      amount: "",
      category: "",
      date: "",
    });
  };

  const handleEditExpense = (index) => {
    setUpdate(index);
    setEdit(true)
  };

  const deleteListItem = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <>
      <div className="outbox">
        <div className="listcontainer">
          <ul className="list">
            <li className="li">
              <p className="para">Title</p>
              <p className="para">Amount</p>
              <p className="para">Category</p>
              <p className="para">Date</p>
              <p className="para">Operation</p>
            </li>
            {list.map((expense, index) => (
              
                edit ? (update !== -1 && (
                  <Editlilst
                    index={update}
                    expense={list[update]}
                    Setlist={setList}
                    list = {list}
                    setEdit = {setEdit}
                  />
                )) :( <li
                  key={index}
                  className={`li ${expense.category === "Credit" ? "color-red" : "color-green"}`}
                >
                  <p className="para">{expense.title}</p>
                  <p className="para">{expense.amount}</p>
                  <p className="para">{expense.category}</p>
                  <p className="para">{expense.date}</p>
                  <button onClick={() => deleteListItem(index)}>Delete</button>
                  <button onClick={() => handleEditExpense(index)}>Edit</button>
                </li>)
              
   
             
            ))}
          </ul>
        </div>
        {addSection && (
          <div className="formdiv">
            <form className="formbox" onSubmit={handleOnSubmit}>
              <FontAwesomeIcon
                className="cross"
                onClick={() => {
                  setAddSection(false);
                }}
                icon={faTimes}
              />
              <h1 className="hadding1">ADD EXPENSE</h1>
              <label htmlFor="title">Title</label>
              <input
                className="input"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleOnChange}
              />
              <div className="amm">
                <label htmlFor="amount">Amount</label>
                <div>
                  <input
                    className="inputamount"
                    type="text"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleOnChange}
                  />
                  <select
                    className="inputcat"
                    id="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleOnChange}
                  >
                    <option value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                  </select>
                </div>
              </div>
              <label htmlFor="date">Date</label>
              <input
                className="input"
                type="text"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleOnChange}
              />
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="addBtn">
        <button
          onClick={() => {
            setAddSection(true);
          }}
        >
          ADD EXPENSE
        </button>
      </div>
   
    </>
  );
}

export default ExpenseInput;
