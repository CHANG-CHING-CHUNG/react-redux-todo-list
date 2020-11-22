import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .todo-item {
  font-family: monospace;
  cursor: pointer;
  line-height: 1.5;
}

 .todo-item__text {
   margin-right: 2rem;
 }
.todo-item__text--completed {
  text-decoration: line-through;
  color: lightgray;
}

/** visibility filters **/
.filter {
  padding: 0.3rem 0;
  margin: 0 0.3rem;
  cursor: pointer;
}
.filter--active {
  border-bottom: 1px solid black;
}

`;
