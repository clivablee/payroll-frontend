import DashboardScreen from "./Features/Dashboard/Screen/DashboardScreen";
import ErrorScreen from "./Features/Error/ErrorScreen";
import LoginScreen from "./Features/Login/Screen/LoginScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "./Features/Login/Store/AuthStore"; // Assuming this is the path to your Zustand store
import EmployeeScreen from "./Features/Employees/Screen/EmployeeScreen";
import ProfileScreen from "./Features/Profile/Screen/ProfileScreen";
import AttendanceScreen from "./Features/Attendance/Screen/AttendanceScreen";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? element : <Navigate to="/login" />;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={
      <DashboardScreen />
    } />,
    errorElement: <ErrorScreen />
  },
  {
    path: "/login",
    element: <LoginScreen />,
    errorElement: <ErrorScreen />
  },
  {
    path: "/employees",
    element: <EmployeeScreen />,
    errorElement: <ErrorScreen />
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
    errorElement: <ErrorScreen />
  },
  {
    path: "/attendance",
    element: <AttendanceScreen />,
    errorElement: <ErrorScreen />
  }
]);


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
