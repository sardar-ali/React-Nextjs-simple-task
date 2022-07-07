import COUNT_TYPES from "./countType";

const initialSatat = {
  count: 0,
};

const countReducer = (state = initialSatat, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNT_TYPES.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case COUNT_TYPES.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count >= 1 && state.count - 1,
      };

    case COUNT_TYPES.RESET_COUNT:
      return {
        ...state,
        count: state.count >= 1 && 0,
      };
    default:
      return state;
  }
};

export default countReducer;
