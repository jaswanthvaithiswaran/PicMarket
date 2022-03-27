import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./core/Home";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import AdminRoutes from "./Auth/helper/AdminRoutes";
import AdminDashboard from "./Admin/AdminDashboard";
import CreateMovie from "./Movies/CreateMovie";

const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/signin" exact component={Signin}/>
            <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard}/>
            <AdminRoutes path="/movies/create" exact component={CreateMovie}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;