import React from "react";
import Home from "./Home";
import Login from "./Login";
import "./index.css"
import {
    Routes,Route
     
  } from "react-router-dom";
export default function NavigationBar(){
  return(
    
    <nav>
        <Routes>
    < Route exact path = "/" element = {<Home/>}/>
    <Route path = "/Login"  element = {<Login/>}/>
       </Routes>

    </nav>
    
    
  )
}