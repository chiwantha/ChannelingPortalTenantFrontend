import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const SidebarItem = ({ title, link, submenu, icon, color }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="font-semibold text-sm">
      {!submenu ? (
        <Link to={link}>
          <div
            className={`px-4 py-4 ${
              color ? color : "hover:bg-gray-100 text-gray-600"
            } flex gap-2 items-center`}
          >
            <span className="text-lg ">{icon}</span>
            {title}
          </div>
        </Link>
      ) : (
        <div className="">
          <div
            className="px-4 py-4 hover:bg-gray-100
    text-gray-600  flex justify-between items-center gap-6"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            <div className="">{title}</div>
            {!isOpen ? <FaAngleDown /> : <FaAngleUp />}
          </div>

          <div
            className={`transition-all overflow-hidden duration-300
              bg-gray-200
              ${isOpen ? "max-h-40" : "max-h-0"}`}
          >
            {submenu.map((item, index) => (
              <Link to={item.link} key={index}>
                <div
                  className="pl-6 pr-4 py-4 hover:bg-gray-300
    text-gray-600 flex gap-2 items-center"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
