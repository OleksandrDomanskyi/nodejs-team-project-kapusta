import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PublicRoute from "./shared/components/PublicRoute";
import PrivateRoute from "./shared/components/PrivateRoute";

const BalancePage = lazy(() => import("./pages/BalancePage/BalancePage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const ReportPage = lazy(() => import("./pages/ReportPage/ReportPage"));

const MyRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path={"/*"} element={<AuthPage />} />
        <Route element={<PublicRoute />}>
          <Route path={"auth"} element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={"report"} element={<ReportPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
