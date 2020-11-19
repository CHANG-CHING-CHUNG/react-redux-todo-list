import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from "../constants";
import { setFilter } from "../redux/actions";
import styled from "styled-components";

function MyVisibilityFilters({ activeFilter, setFilter }) {
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
              setFilter(currentFilter);
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

export default VisibilityFilters;
