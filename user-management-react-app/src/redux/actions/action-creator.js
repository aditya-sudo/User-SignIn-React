import { ActionTypes } from "./action-type";
export const setUsers = (user) => {
  return {
    type: ActionTypes.SIGN_IN,
    payload: user,
  };
};
