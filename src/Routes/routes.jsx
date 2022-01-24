import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard";
import { Login } from "../Pages/login";
import { DashboardSettings } from "../Pages/settings";
import { Todos } from "../Pages/welcome";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/settings"
          element={
            <PrivateRoute>
              <DashboardSettings />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
