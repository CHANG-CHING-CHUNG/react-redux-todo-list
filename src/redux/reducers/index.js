import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import editStatus from "./editStatus";

export default combineReducers({ todos, visibilityFilter, editStatus });
