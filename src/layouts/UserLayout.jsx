import { Outlet } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const UserLayout = () => {
  const location = useLocation();
  return (
    <div className="space-y-4">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto px-2 max-w-7xl"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default UserLayout;
