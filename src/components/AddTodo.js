import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, clearTodo } from "../redux/actions";
import { getTodos } from "../redux/selectors";
import { checkEditing } from "../utilities";
import styled from "styled-components";

function MyAddTodo({ todos, addTodo, clearTodo }) {
  const [value, setValue] = useState("");
  const handleAddTodo = checkEditing((isEditing) => {
    if (value && !isEditing) {
      addTodo(value);
      setValue("");
    }
  }, todos);
  const handleClearTodo = () => {
    clearTodo();
  };
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
      <button className="delete-todo" onClick={handleClearTodo}>
        Clear Todo
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

export default connect(mapStateToProps, { addTodo, clearTodo })(AddTodo);
