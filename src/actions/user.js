import { useDispatch } from "react-redux";
import { SET_USER_DATA } from "./_types";
export default class UserActions {
  constructor(source, product) {
    this.dispatch = useDispatch();
  }

  setData = async (data) => {
    await this.dispatch({ type: SET_USER_DATA, payload: data });
  };
}
