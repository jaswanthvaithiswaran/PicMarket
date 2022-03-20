import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./core/Home";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import AdminRoutes from "./Auth/helper/AdminRoutes";
import AdminDashboard from "./Admin/AdminDashboard";
const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/signin" exact component={Signin}/>
            <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;