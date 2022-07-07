import { HOME_PAGE_TITLE } from "./homeType";

const initailState = {
  title: "Default Title",
};

const homeReducer = (state = initailState, action) => {
  console.log("action ::", action);
  const { type, payload } = action;
  switch (type) {
    case HOME_PAGE_TITLE:
      return {
        ...state,
        title: payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
