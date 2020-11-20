import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import styled from "styled-components";

function MyAddTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const handleAddTodo = () => {
    addTodo(value);
    setValue("");
  };
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

const AddTodo = styled(MyAddTodo)`
  margin-left: 0.5rem;
`;

export default connect(null, { addTodo })(AddTodo);
