import { useContext } from "react"
import { authContext } from "../pages/Providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export default function PrivateRoute({children}) {
    const location = useLocation();
    const {user , loading} = useContext(authContext);
    if(loading) return <span className="loading loading-spinner loading-lg"></span>
    if(user){
        return children;
    }
  return <Navigate state={location.pathname} to="/login"></Navigate>
}
PrivateRoute.propTypes = {
    children : PropTypes.node
}