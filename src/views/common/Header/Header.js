import React from "react"
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

