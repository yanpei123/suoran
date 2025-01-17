import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from "react-router-dom";
import './App.css';
import Home from "./views/Home";
import Prolist from "./views/Prolist";
import Cartlist from "./views/Cartlist";
import Oder from './views/Oder';
import Login from './views/login/Login'
import Register from './views/register/Register';
import SingDetail from './views/singledetail/SingDetail';
import Address from './views/address/Address';
import Uporder from './views/uporder/Uporder';


function App() {
  return (
    <div>
   
     	<Router>
	     	<div>
		    <Route path="/home" component={Home} ></Route>
		    <Route path="/prolist/" component={Prolist} ></Route>
			<Route path="/cartlist" component={Cartlist} ></Route>
			<Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path= '/singledetail/:id' component={SingDetail}/>
			<Route path='/address' component={Address}/>
		    <Route path='/uporder' component={Uporder}/>
			<Route path= '/oder' component={Oder}/>
			{/* <Redirect to="/home"/> */}

	     	</div>
     	</Router>
    </div>
  );
}

export default App;
