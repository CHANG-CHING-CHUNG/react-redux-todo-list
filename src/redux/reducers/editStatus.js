import { IS_EDITING, NOT_EDITING } from "../actionTypes";

const initialState = {
  EDITING: false,
};

const editStatus = (state = initialState, action) => {
  switch (action.type) {
    case IS_EDITING: {
      return {
        EDITING: true,
      };
    }
    case NOT_EDITING: {
      return {
        EDITING: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default editStatus;
