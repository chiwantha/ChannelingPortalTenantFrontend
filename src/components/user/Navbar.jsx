// import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Company } from "../../constants";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";

const Navbar = () => {
  const { appConfig } = useContext(ConfigContext);
  const [IsSubMenu, setIsSubMenu] = useState(false);

  const click = () => {
    toast.info("Comming Soon !", {
      position: "top-center",
    });
  };
  return (
    <nav className="w-full border-b  py-1 shadow-md border-[#0460D9]/50">
      <div
        className="bg-white px-2 mx-auto max-w-7xl h-[45px] 
      flex items-center justify-between"
      >
        <div className="flex items-center gap-5">
          {/* <span className="text-[#0460D9] text-2xl font-bold">AROGYA</span> */}
          <Link to={"/"}>
            <img
              src={`/hospital/logo/${
                appConfig ? appConfig.logo : `default.png`
              }`}
              width={100}
              height={100}
              alt=""
            />
          </Link>
          <div className="sm:flex items-center gap-5 hidden">
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
          </div>
        </div>
        <div className="">
          <span
            className="text-[#0460D9] sm:hidden text-2xl font-bold"
            onClick={() => {
              setIsSubMenu(!IsSubMenu);
            }}
          >
            {IsSubMenu ? <IoClose /> : <FaBars />}
          </span>
          <div className="sm:flex gap-2 items-center hidden">
            <Button
              title={`Sign In`}
              onClick={() => {
                click();
              }}
            />
          </div>
        </div>
      </div>
      <AnimatePresence>{IsSubMenu && <SubMenu />}</AnimatePresence>
    </nav>
  );
};

export default Navbar;
