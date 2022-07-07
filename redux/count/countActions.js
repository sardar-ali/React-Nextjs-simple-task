import ACOUNT_TYPES from "./countType";

export const incrementCount = () => {
  return {
    type: ACOUNT_TYPES.INCREMENT_COUNT,
  };
};

export const decrementCount = () => {
  return {
    type: ACOUNT_TYPES.DECREMENT_COUNT,
  };
};

export const resetCount = () => {
  return {
    type: ACOUNT_TYPES.RESET_COUNT,
  };
};
