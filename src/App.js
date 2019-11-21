import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from "react-router-dom";
import './App.css';
import Home from "./views/Home";
import Prolist from "./views/Prolist";
import Cartlist from "./views/Cartlist";



function App() {
  return (
    <div>
   
     	<Router>
	     	<div>
		     <Route path="/home" component={Home} ></Route>
		     <Route path="/prolist" component={Prolist} ></Route>
		     <Route path="/cartlist/:id" component={Cartlist} ></Route>
		     
		     
		     
		     <Redirect to="/prolist"/>
	     	</div>
     	</Router>
    </div>
  );
}

export default App;
