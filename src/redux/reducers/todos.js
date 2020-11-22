import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
} from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
            isEditing: false,
          },
        },
      };
    }
    case UPDATE_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            content,
            isEditing: !state.byIds[id].isEditing,
          },
        },
      };
    }
    case EDIT_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            isEditing: !state.byIds[id].isEditing,
          },
        },
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      const filteredByIds = Object.keys(state.byIds)
        .filter((objId) => {
          return Number(objId) !== id;
        })
        .reduce((res, objId) => {
          res[objId] = state.byIds[objId];
          return res;
        }, {});
      return {
        allIds: state.allIds.filter((oldId) => oldId !== id),
        byIds: filteredByIds,
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
