import DashboardScreen from "./Features/Dashboard/Screen/DashboardScreen";
import ErrorScreen from "./Features/Error/ErrorScreen";
import LoginScreen from "./Features/Login/Screen/LoginScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "./Features/Login/Store/AuthStore"; // Assuming this is the path to your Zustand store

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
  }
]);


function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
