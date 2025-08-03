import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Button from "../common/Button";

const SubMenu = () => {
  const click = () => {
    toast.info("Comming Soon !", {
      position: "top-center",
    });
  };
  return (
    <motion.div
      className="w-full sticky sm:hidden  "
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="mx-auto max-w-7xl p-2 flex flex-col space-y-2 items-center">
        <Link
          to={"/myappointment"}
          className="text-[#0463DF] hover:text-[#044ba8]
            font-medium"
        >
          My-Appointment
        </Link>
        <a
          className="text-[#0463DF] hover:text-[#044ba8]
            font-medium"
          href="https://www.arogyahospitals.lk/"
          target="_blank"
        >
          Visit-Main
        </a>
        <div className="sm:hidden gap-2 items-center flex">
          <Button
            title={`Sign In`}
            onClick={() => {
              click();
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SubMenu;
