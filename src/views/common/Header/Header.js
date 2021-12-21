import React from "react"
import MVHeader from "./MVHeader";
import PCHeader from "./PCHeader";
import { useLocation } from "react-router-dom";
const AppHeader = () => {
    const location = useLocation()
    
    return (
      <>
        <MVHeader activepath={location.pathname} />
        <PCHeader activepath={location.pathname} />
      </>
    );
  };
  
  export default AppHeader;

