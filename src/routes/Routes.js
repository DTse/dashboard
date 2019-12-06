import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";

/**
   * Return the user image located in the assets folder.
   * @param {object} props
   * @return {any} routes
**/ 
const Routes = (props) => {
  return (
	<Switch>
		<Route exact path="/" component={Dashboard}/>
		<Route path="/products" component={Products} />
		<Route component={NotFound} />
	</Switch>        
  )
};

export default Routes;