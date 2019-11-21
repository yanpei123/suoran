import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from "react-router-dom";
import './App.css';
import Home from "./views/Home";
import Prolist from "./views/Prolist";
import Cartlist from "./views/Cartlist";
import Login from './views/login/Login'
import Register from './views/register/Register';
import SingDetail from './views/singledetail/SingDetail';


function App() {
  return (
    <div>
   
     	<Router>
	     	<div>
		     <Route path="/home" component={Home} ></Route>
		     <Route path="/prolist" component={Prolist} ></Route>
		     <Route path="/cartlist/:id" component={Cartlist} ></Route>
			 <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path= '/singledetail' component={SingDetail}/>
		     
		     
		     {/* <Redirect to="/prolist"/> */}
	     	</div>
     	</Router>
    </div>
  );
}

export default App;
