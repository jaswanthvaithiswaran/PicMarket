import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./core/Home";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import AdminRoutes from "./Auth/helper/AdminRoutes";
import AdminDashboard from "./Admin/AdminDashboard";
import CreateMovie from "./Movies/CreateMovie";
import CreateComedian from "./Comedian/CreateComedian";
import CreateActor from "./Actor/CreateActor";
import CreateTemplate from "./Templates/CreateTemplate";
import ComedianMovies from "./Comedian/ComedianMovies";
import MovieTemplates from "./Movies/MovieTemplates";
import Movies from "./Movies/Movies";
import Actors from "./Actor/Actors";
import ActorMovies from "./Actor/ActorMovies";

const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/signin" exact component={Signin}/>
            <Route path="/movies" exact component ={Movies}/>
            <Route path="/actors" exact component={Actors}/>
            <Route path="/actor/movies/:actorId" exact component={ActorMovies}/>
            <Route path="/comedian/movies/:comedianId" exact component={ComedianMovies}/>
            <Route path="/movie/templates/:movieId" exact component={MovieTemplates}/>
            <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard}/>
            <AdminRoutes path="/movies/create" exact component={CreateMovie}/>
            <AdminRoutes path="/comedian/create" exact component={CreateComedian}/>
            <AdminRoutes path="/actor/create" exact component={CreateActor}/>
            <AdminRoutes path="/templates/create" exact component={CreateTemplate}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;