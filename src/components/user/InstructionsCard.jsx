import React from "react";
import { ColorPallet, Instructions } from "../../constants";
import { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";

const InstructuonsCard = () => {
  const { appConfig } = useContext(ConfigContext);
  return (
    <div
      className={`p-4 ${
        appConfig ? appConfig.theme : ColorPallet.theme
      } flex flex-col items-center
     justify-center text-center rounded-lg space-y-4`}
    >
      {/* Topic */}
      <div className="text-white font-bold text-xl">
        <h2>Instructions / උපදෙස්</h2>
      </div>
      <hr className="border-slate-400 w-4/6" />
      <div className="text-slate-200">
        <p>{Instructions.english}</p>
      </div>
      <hr className="border-slate-400 w-4/6" />
      <div className="text-slate-200 font-semibold">
        <p>{Instructions.sinhala}</p>
      </div>
    </div>
  );
};

export default InstructuonsCard;
