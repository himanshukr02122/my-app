import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Dashboard from "../containers/dashboard";
// import Layout from "../layouts";
import Business from "../containers/business";



const AppRoutes =()=> {
    return (
        <Suspense>
          <Router>
            <Routes>
                <Route  element={<Dashboard />} path="/" exact={true} />
                <Route  element={<Business />} path="/business" exact={true} />
                
            
            </Routes>    
          </Router>  
        </Suspense>
    )

}
export default AppRoutes;