import {
  ADD_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const updateTodo = (id, content) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    content,
  },
});

export const editTodo = (id) => ({
  type: EDIT_TODO,
  payload: {
    id,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id: id,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
