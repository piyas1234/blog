import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { NavbarContext } from "../Global/Context";
import AccoutScreen from "../Screens/AccountsScreen";
import BlogDetailsScreen from "../Screens/BlogDetailsScreen";
import CreatePosts from "../Screens/CreatePosts";
import Deshboard from "../Screens/Deshboard";
import HomeScreen from "../Screens/HomeScreens";
function NavLink() {

  const {Auth} = useContext(NavbarContext)
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
         {Auth.admin =='true' && <>
         <Route   path="/create" component={CreatePosts} />
        <Route   path="/deshboard" component={Deshboard} /></>}
        <Route   path="/details/:id" component={BlogDetailsScreen} />
        <Route   path="/account" component={AccoutScreen} />
      </Switch>
    </div>
  );
}

export default NavLink;
