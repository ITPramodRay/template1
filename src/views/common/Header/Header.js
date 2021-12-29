import React from "react";
import { useLocation } from "react-router-dom";

import HeaderMV from "./HeaderMV";
import HeaderPC from "./HeaderPC";
import { useLocation } from "react-router-dom";
const AppHeader = () => {
    const location = useLocation()
    
    return (
      <>
        <HeaderMV activepath={location.pathname} />
        <HeaderPC activepath={location.pathname} />
        
      </>
    );
  };
  
  export default AppHeader;

import "./header.scss";

const AppHeader = () => {
  const location = useLocation();

  return (
    <>
      <HeaderMV activepath={location.pathname} />
      <HeaderPC activepath={location.pathname} />
    </>
  );
};

export default AppHeader;
