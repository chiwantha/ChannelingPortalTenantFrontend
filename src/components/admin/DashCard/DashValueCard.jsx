import dashDefault from "../../../assets/res/dashboard.png";
import { Link } from "react-router-dom";

const DashValueCard = ({ title, value, link, icon }) => {
  return (
    <div
      className="px-4 py-6 rounded-lg shadow-md border border-gray-300 bg-slate-50
    flex flex-col items-start relative overflow-hidden"
    >
      <span className="font-medium text-gray-500">
        {title ? title : "Card"}
      </span>
      <span className="text-5xl font-semibold mt-[-5px] text-gray-600">
        {value !== null ? value : "0000"}
      </span>
      {link ? (
        <Link
          to={link}
          className="text-xs font-bold mt-0.5 text-[#0463DF]/90 hover:text-[#202342]"
        >
          See More{" "}
        </Link>
      ) : (
        <span
          to={link}
          className="text-xs font-bold mt-0.5 text-[#0463DF]/90 hover:text-[#202342]"
        >
          ----
        </span>
      )}

      <img
        src={icon ? icon : dashDefault}
        width={100}
        height={100}
        alt="default.png"
        className="absolute right-[-40px] h-full top-0 aspect-square mask-l-from-0.5 opacity-40"
      />
    </div>
  );
};

export default DashValueCard;
