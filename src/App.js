
import React from "react";
import NavigationBar from "./components/NavigationBar"
import {
  BrowserRouter as Router
   
} from "react-router-dom";
export default function App(){
  return(
    <div className="nav-container">
     <Router>
      <NavigationBar/>
      </Router>
    </div>
    
  )
}
