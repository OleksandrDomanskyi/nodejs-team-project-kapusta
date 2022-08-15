
import { Navigate, Outlet } from "react-router-dom";
const PublicRoute = () => {
    const isLoggedIn = false;

    if (isLoggedIn) {
        return <Navigate replace to="/auth" />
    }

    return <Outlet />;
}

export default PublicRoute;