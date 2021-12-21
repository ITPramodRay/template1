import { Fragment } from "react";
import { useSelector } from "react-redux";
import Loader from "../views/common/loader";
export default function LoaderWrapper({ history, children }) {
  let storeData = useSelector((state) => state);
  const {
    userData: { loading },
  } = storeData;
  return (
    <Fragment>
      {loading && <Loader />}
      {children}
    </Fragment>
  );
}
