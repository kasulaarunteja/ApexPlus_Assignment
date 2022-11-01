import React from "react";
import Navbar from "./Navbar";

const AddScenario = () => {
  return (
    <div>
      <Navbar />
      <h2 className="ti">Add Assignments</h2>
      <div className="main-admin-div">
        <div className="title-div">
          <p>Title</p>
          <input type="text" id="title" />
        </div>
        <div className="mid-div">
          <div>
            <p>Category</p>
            <select name="" id="category">
              <option value="">Choose</option>
              <option value="Coding">Coding</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Dsa">Dsa</option>
              <option value="Oj">Oj</option>
            </select>
          </div>
          <div>
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScenario;
