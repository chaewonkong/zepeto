import * as constants from "../actions/constants";

const INITIAL_STATE = {
  today: {},
  detail: {}
};
export const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.GET_TODAY:
      return { ...state, today: action.payload };
    case constants.GET_DETAIL:
      return { ...state, detail: action.payload };
    default:
      return INITIAL_STATE;
  }
};
