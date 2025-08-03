import React, { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";
import { ColorPallet } from "../../constants";

const ProfileCard = ({ ProfileData }) => {
  const { appConfig } = useContext(ConfigContext);
  return (
    <div className="p-4 bg-white border h-fit border-[#0460D9]/50 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
      <div className="w-32 h-32 sm:w-36 sm:h-36">
        <img
          src={`/doctors/${
            ProfileData.image ? ProfileData.image : "default.png"
          }
                `}
          alt={ProfileData.name ? ProfileData.name : "default.png"}
          className={`w-full h-full object-cover rounded-full border-2 
            ${appConfig ? appConfig.theme_border : ColorPallet.theme_border}`}
        />
      </div>
      <div className="text-center items-center flex flex-col space-y-2 w-full">
        <h3 className="uppercase text-lg font-semibold text-gray-700">
          {ProfileData.name ? ProfileData.name : "Unknow Name"}
        </h3>
        <hr className="w-1/4 border-gray-300" />
        <p className="uppercase text-xs sm:text-sm text-gray-500">
          {ProfileData.specialization ? ProfileData.specialization : "None"}
        </p>
        <hr className="w-1/4 border-gray-300" />
        <p className="uppercase text-[12px] text-gray-500">
          {ProfileData.description ? ProfileData.description : "No Data"}
        </p>
        <hr className="w-1/4 border-gray-300" />
        <p className="uppercase text-xs sm:text-sm text-gray-500">
          {ProfileData.hospital ? ProfileData.hospital : "Unknown Hospital"}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
