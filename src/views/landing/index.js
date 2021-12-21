import React,{useEffect,useState,lazy} from 'react';
import { Link, useHistory } from "react-router-dom";

const Home = lazy(()=>import("./components/index"))
const Navbar = lazy(()=>import("../common/Header/Navbarmenu"))

export default function LandingPage({ ...props }) {
  const history = useHistory();
  return (
   <>
   <Navbar/>
   <Home/>
   {/* <PlanRetirment/> */}
   </>
  );
}
