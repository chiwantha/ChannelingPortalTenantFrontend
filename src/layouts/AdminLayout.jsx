import { Outlet, useLocation } from "react-router-dom";
import AdminNav from "../components/admin/AdminNav";
import Sidebar from "../components/admin/Sidebar";
import { ToastContainer } from "react-toastify";
import { SidebarProvider } from "../Context/SidebarContext";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const AdminLayout = () => {
  const location = useLocation();
  return (
    <SidebarProvider>
      <div className="space-y-4">
        <AdminNav />
        <div className="mx-auto px-2 max-w-7xl">
          <div className="flex max-h-screen gap-4">
            <div className="w-44  fixed sm:sticky top-[70px] z-40 ">
              <Sidebar />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                className="flex-1  z-30"
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <ToastContainer />
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
