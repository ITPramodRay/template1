import { SET_USER_DATA } from "../actions/_types";

let initialState = {
  loading: false,
  error: false,
  user: { firstname: "john", lastname: "doe", email: "johndoe@test.com" },
};

export default function applicationReducer(state = initialState, action) {
  var { type, payload } = action;
  switch (type) {
    case SET_USER_DATA:
      return { ...state, loading: false, error: false, user: { ...payload } };
    default:
      return { ...state };
  }
}
