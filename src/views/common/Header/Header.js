import React from "react";
import { useLocation } from "react-router-dom";

import HeaderMV from "./HeaderMV";
import HeaderPC from "./HeaderPC";

import "./header.scss";

const AppHeader = ({empty}) => {
  const location = useLocation();

  return (
    <>
      <HeaderMV activepath={location.pathname} />
      <HeaderPC activepath={location.pathname} empty={empty||false}/>
    </>
  );
};

export default AppHeader;
