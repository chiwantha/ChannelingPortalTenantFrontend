import SidebarItem from "./SidebarItem";
import { RiDashboardFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { FaStethoscope } from "react-icons/fa";

import { MdEventNote, MdAssessment } from "react-icons/md";
import { useSidebar } from "../../Context/SidebarContext";
import { AuthContext } from "../../Context/authContext";
import { useContext } from "react";

const sideBar = [
  {
    title: "Pannel",
    link: "apps",
    icon: <GoHomeFill />,
  },
  {
    title: "Dashboard",
    link: "/admin",
    icon: <RiDashboardFill />,
  },
  {
    title: "Channeling",
    submenu: [
      {
        title: "List",
        link: "appointments",
        icon: <MdEventNote />,
      },
      {
        title: "Removed",
        link: "removed",
        icon: <FaTrashAlt />,
      },
    ],
  },
  {
    title: "Reports",
    submenu: [
      {
        title: "Appointments",
        link: "appointments",
        icon: <MdAssessment />,
      },
      {
        title: "Financial",
        link: "appointments",
        icon: <HiDocumentText />,
      },
    ],
  },
  {
    title: "Settings",
    link: "/admin/settings",
    icon: <FiSettings />,
  },
  {
    title: "Portal",
    link: "/",
    icon: <FaStethoscope />,
  },
];

const Sidebar = () => {
  const { currentUser, userLogout } = useContext(AuthContext);
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-80 sm:translate-x-0"
      }
     transition-transform duration-300 overflow-y-auto max-h-screen pb-20
     no-scrollbar`}
    >
      <div className={`flex flex-col gap-4 z-50 `}>
        {/* top part */}
        <div className="rounded-lg bg-[#0463DF] p-4 space-y-4 flex flex-col justify-center items-center">
          <img
            src={"/doctors/default.png"}
            className="rounded-full aspect-square"
            width={100}
            height={100}
            alt="admin.png"
          />
          <div className="flex flex-col">
            <span className="text-center uppercase text-sm text-white font-semibold">
              {currentUser ? currentUser.name : "User Name"}
            </span>
            <span className="text-center uppercase text-xs text-slate-300 ">
              {currentUser
                ? currentUser.role === 1
                  ? "Admin"
                  : "Management"
                : "User Role"}
            </span>
          </div>
        </div>
        {/* sidebarlinks */}
        <div
          className={`sm:bg-slate-100 bg-slate-200 border sm:border-none rounded-lg text-[#0463DF]
        flex flex-col overflow-hidden
        
      `}
        >
          {sideBar.map((item, index) => (
            <SidebarItem
              key={index}
              title={item.title}
              link={item.link}
              icon={item.icon}
              submenu={item.submenu}
              color={item.bg ? item.bg : false}
            />
          ))}
        </div>
        <div
          onClick={() => {
            userLogout();
          }}
        >
          <SidebarItem
            color={`bg-red-500 hover:bg-red-400 text-white rounded-lg
              cursor-default`}
            title={"Log Out"}
            icon={<BiLogOut />}
          />
        </div>
        {/* bottom part */}
        <div className="rounded-lg bg-[#0463DF] p-4 space-y-4">
          <p className="text-sm text-slate-200">
            This is a beta version of the Admin Panel for the Channeling
            Management Portal
          </p>
          <div className="flex flex-col">
            <span className="text-slate-300">Developed By</span>
            <span className="text-[#00C950] font-bold">K-Chord (Pvt) Ltd</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
