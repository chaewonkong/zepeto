import * as constants from "./constants";

export const getToday = data => {
  return { type: constants.GET_TODAY, payload: data };
};
