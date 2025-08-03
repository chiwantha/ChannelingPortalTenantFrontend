import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthContext } from "./Context/authContext";
import { useContext } from "react";

// User Pages
import Home from "./pages/users/Home";
import Channeling from "./pages/users/Channeling";
import DoctorProfile from "./pages/users/DoctorProfile";
import MyAppointment from "./pages/users/MyAppointment";

// Admin Pages
import RemovedAppoiment from "./pages/admin/appointments/RemovedAppoiment";
import AppointmentCheckList from "./pages/admin/appointments/AppointmentCheckList";
import Dashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/auth/AdminLogin";

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import AdminPannels from "./pages/admin/AdminPannels";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectUserRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to={"/home"} />;
    }
    return children;
  };

  const ProtectAdminRoute = ({ children }) => {
    if (!currentUser || currentUser.role !== 1) {
      return <Navigate to={"/adm-login"} />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectUserRoute>
        <UserLayout />
        // </ProtectUserRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "channeling",
          element: <Channeling />,
        },
        {
          path: "doctor/:id",
          element: <DoctorProfile />,
        },
        {
          path: "myappointment",
          element: <MyAppointment />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <ProtectAdminRoute>
          <AdminLayout />
        </ProtectAdminRoute>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "appointments",
          element: <AppointmentCheckList />,
        },
        {
          path: "removed",
          element: <RemovedAppoiment />,
        },
        {
          path: "apps",
          element: <AdminPannels />,
        },
      ],
    },
    {
      path: "/adm-login",
      element: <AdminLogin />,
    },
  ]);

  return (
    <div className="select-none">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
