import { ActionTypes } from "../actions/action-type";

export const userReducer = (user = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN:
      return (user = payload);
    default:
      return user;
  }
};
