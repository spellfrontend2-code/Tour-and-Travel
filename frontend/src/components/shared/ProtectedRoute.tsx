import  {Outlet, Navigate} from "react-router-dom";
import { useState, useEffect } from "react";
function ProtectedRoute() {
const [token, setToken] = useState(
  () => localStorage.getItem("token")
);
//console.log(localStorage.getItem("token"));
useEffect(() => {
  setToken(localStorage.getItem("token"));
}, []);
  return token
    ? <Outlet />
    : <Navigate to="/login" replace />;
}

export default ProtectedRoute;