import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext); 
    const location = useLocation(); 
     
     if(loading){
        return <div className="text-center"> 
            <progress className="progress w-56  progress-secondary"></progress>
        </div> 
     }
     if(user?.email){
        return children;   
     }
    return <Navigate state={location.pathname} to="/login" replace></Navigate> 
};

export default PrivateRoute;