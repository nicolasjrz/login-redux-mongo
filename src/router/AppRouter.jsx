import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { WebRoutes } from "../web/routes/WebRoutes";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  return (
    <Routes>
      {status === "checking" ? (
        <Route path="/auth/*" element={<AuthRoutes />} />
      ) : (
        <Route path="/*" element={<WebRoutes />} />
      )}

      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
