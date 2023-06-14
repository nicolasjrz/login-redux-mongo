import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { WebRoutes } from "../web/routes/WebRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<WebRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
