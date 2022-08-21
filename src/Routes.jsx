import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PublicRoute from "./shared/components/PublicRoute";
import PrivateRoute from "./shared/components/PrivateRoute";
import Loader from "./shared/components/Loader";

const BalancePage = lazy(() => import("./pages/BalancePage/BalancePage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const ReportPage = lazy(() => import("./pages/ReportPage/ReportPage"));

const MyRoutes = () => {
  return (
    <Suspense fallback={<Loader isEnabled={true} />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={"/auth"} element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={"/*"} element={<BalancePage />} />
          <Route path={"/reports"} element={<ReportPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
