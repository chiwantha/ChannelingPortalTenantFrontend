import React from "react";
import { Link } from "react-router-dom";
import { ColorPallet } from "../../constants";
import { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";

const IconButton = ({
  bg,
  fg,
  title,
  icon,
  subtitle,
  active,
  badge,
  badgeColor,
  badgeText,
  link,
}) => {
  const { appConfig } = useContext(ConfigContext);

  // Compute background color
  const bgClass = bg
    ? bg
    : active
    ? appConfig
      ? `${appConfig.primary_btn} ${appConfig.primary_btn_hover}`
      : `${ColorPallet.primary_btn} ${ColorPallet.primary_btn_hover}`
    : `bg-slate-100 ${
        appConfig ? appConfig.theme_hover : ColorPallet.theme_hover
      }`;

  // Compute text color
  const titleColor = fg
    ? fg
    : active
    ? appConfig
      ? appConfig.primary_btn_text
      : ColorPallet.primary_btn_text
    : "text-[#0F2753] group-hover:text-white";

  const subtitleColor = active
    ? "text-slate-200"
    : "text-slate-400 group-hover:text-slate-200";

  // Badge color mapping
  const badgeColorClass =
    {
      hot: "bg-red-600 text-white",
      warning: "bg-amber-500 text-white",
      info: "bg-blue-500 text-white",
      success: "bg-green-600 text-white",
    }[badgeColor] || "bg-red-600 text-white";

  return (
    <Link
      to={link && link}
      className={`relative group rounded-lg overflow-hidden shadow-md transition-colors duration-500 ease-in-out 
        ${bgClass} 
        flex items-center justify-center gap-4 p-4
        flex-col md:flex-row md:justify-start md:items-center`}
    >
      {/* Icon */}
      <div className="object-cover rounded-full border-2 border-slate-100">
        <img
          src={icon}
          width={60}
          height={60}
          className="aspect-square min-w-[60px]"
          alt=""
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <span className={`font-bold text-lg ${titleColor} transition-colors`}>
          {title}
        </span>
        <span className={`text-[15px] ${subtitleColor} transition-colors`}>
          {subtitle}
        </span>
      </div>

      {/* Badge */}
      {badge && (
        <div
          className={`absolute top-0 right-0 rounded-bl-lg px-4 py-0.5 shadow-md ${badgeColorClass}`}
        >
          <span className="text-xs font-medium">{badgeText || "Badge"}</span>
        </div>
      )}
    </Link>
  );
};

export default IconButton;
