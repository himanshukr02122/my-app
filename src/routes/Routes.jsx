import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Business from "../components/Business";
// import Layout from "../layouts";
import Main from "../components";



const AppRoutes =()=> {
    return (
        <Suspense>
          <Router>
            <Routes>
                <Route  element={<Main />} path="/" exact={true} />
                <Route  element={<Business />} path="/business" exact={true} />
                
            
            </Routes>    
          </Router>  
        </Suspense>
    )

}
export default AppRoutes;