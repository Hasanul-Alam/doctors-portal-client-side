import { CircularProgress } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <CircularProgress/>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;