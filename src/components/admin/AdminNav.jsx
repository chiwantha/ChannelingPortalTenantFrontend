// import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { useSidebar } from "../../Context/SidebarContext";
import { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";

const Navbar = () => {
  const { appConfig } = useContext(ConfigContext);
  const [IsSubMenu, setIsSubMenu] = useState(false);
  const { toggleSidebar } = useSidebar();

  const click = () => {
    toast.info("Comming Soon !", {
      position: "top-center",
    });
  };
  return (
    <nav className="w-full bg-white  border-b top-0 sticky py-1 z-50 shadow-md border-[#0460D9]/50">
      <div
        className="px-2 mx-auto max-w-7xl h-[45px] 
      flex items-center justify-between"
      >
        {/* <span className="text-[#0460D9] text-2xl font-bold">AROGYA</span> */}
        <Link to={"/admin"}>
          <img
            src={`/hospital/logo/${appConfig ? appConfig.logo : "default.png"}`}
            width={100}
            height={100}
            alt=""
          />
        </Link>

        <div className="">
          <span
            className="text-[#0460D9] sm:hidden text-2xl font-bold"
            onClick={() => {
              setIsSubMenu(!IsSubMenu);
              toggleSidebar();
            }}
          >
            {IsSubMenu ? <IoClose /> : <FaBars />}
          </span>
          <div className="sm:flex gap-2 items-center hidden">
            <Button
              bg={`bg-slate-200 text-[#0560D9]`}
              title={`Hi, Admin`}
              onClick={() => {
                click();
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
