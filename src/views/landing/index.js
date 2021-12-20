import React,{useEffect,useState,lazy} from 'react';
import { Link, useHistory } from "react-router-dom";

const Landing = lazy(()=>import("./LandingPage/Landing"))
const PlanRetirment = lazy(()=>import("./PlanRetirment/PlanRetirment"))


export default function LandingPage({ ...props }) {
  const history = useHistory();
  return (
   <>
   <Landing/>
   <PlanRetirment/>
   </>
  );
}
