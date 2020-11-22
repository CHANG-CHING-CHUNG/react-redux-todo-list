import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { getTodos } from "../redux/selectors";
import { checkEditing } from "../utilities";
import styled from "styled-components";

function MyAddTodo({ todos, addTodo }) {
  const [value, setValue] = useState("");
  const handleAddTodo = checkEditing((isEditing) => {
    if (value && !isEditing) {
      addTodo(value);
      setValue("");
    }
  }, todos);
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

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state),
  };
};

export default connect(mapStateToProps, { addTodo })(AddTodo);
