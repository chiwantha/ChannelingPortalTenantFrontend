import { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";
import { ColorPallet } from "../../constants";

const Button = ({ title, onClick, bg, pd }) => {
  const { appConfig } = useContext(ConfigContext);

  const defaultBg = `${ColorPallet.primary_btn} ${ColorPallet.primary_btn_hover} ${ColorPallet.primary_btn_text}`;

  const backgroundClasses = bg
    ? bg
    : appConfig
    ? `${appConfig.primary_btn} ${appConfig.primary_btn_hover} ${appConfig.primary_btn_text}`
    : defaultBg;

  return (
    <div
      onClick={onClick}
      className={`${backgroundClasses} rounded-lg ${
        pd ? pd : "px-3 py-1"
      } transition-colors duration-300 cursor-pointer`}
    >
      <span className="font-bold">{title || "Button"}</span>
    </div>
  );
};

export default Button;
