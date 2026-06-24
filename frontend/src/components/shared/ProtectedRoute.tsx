import  {Outlet, Navigate} from "react-router-dom";
import { useAuthStore } from "@/context/useAuthStore";
function ProtectedRoute({role,navigateRoute}) {
const {authData}=useAuthStore();
const isAuthenticated=!!authData?.accessToken && authData?.role?.toLowerCase()===role?.toLowerCase();
return isAuthenticated
    ? <Outlet />
    : <Navigate to={navigateRoute} replace />;

}

export default ProtectedRoute;