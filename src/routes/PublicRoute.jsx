import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div>loading...</div>;
  }

  return !user ? children : <Navigate to={"/" || location.state}></Navigate>;
};
PublicRoute.propTypes = {
  children: PropTypes.node,
};
export default PublicRoute;
