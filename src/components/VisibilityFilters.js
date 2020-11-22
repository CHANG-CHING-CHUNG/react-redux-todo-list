import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from "../constants";
import { setFilter } from "../redux/actions";
import { getTodos } from "../redux/selectors";
import styled from "styled-components";

function MyVisibilityFilters({ activeFilter, todos, setFilter }) {
  console.log(
    todos.some((todo) => {
      return todo.isEditing === true;
    })
  );
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              const isEditing = todos.some((todo) => todo.isEditing === true);
              if (!isEditing) {
                setFilter(currentFilter);
              }
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
}

const VisibilityFilters = styled(MyVisibilityFilters)`
  margin-top: 1rem;
  text-align: left;
  list-style: none;
`;

const mapStateToProps = (state) => {
  return {
    activeFilter: state.visibilityFilter,
    todos: getTodos(state),
  };
};

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
