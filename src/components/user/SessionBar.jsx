import { useState } from "react";
import Button from "../common/Button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ChannelForm from "./ChannelForm";
import { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";
import { ColorPallet } from "../../constants";

const SessionBar = ({ session_data }) => {
  const { appConfig } = useContext(ConfigContext);
  const { id, day, start_time, type, fee } = session_data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <div
        className="relative w-full grid grid-cols-2 md:grid-cols-4
      rounded-lg shadow-md border bg-slate-50 border-gray-300
       hover:border-[#0460D9]/50 transition-colors duration-300 p-4
       space-y-4 md:space-y-0"
        role="region"
        aria-label="Session Details"
      >
        {/* Left Indicator */}
        <span
          className={`${
            appConfig ? appConfig.secondary_btn : ColorPallet.secondary_btn
          } absolute left-0 top-1/2 -translate-y-1/2 w-2 h-8 rounded-r `}
          aria-hidden="true"
        />

        {/* Day */}
        <div className="flex flex-col items-center justify-center border-gray-300 sm:border-r col-span-2 sm:col-span-1">
          <span className="text-lg font-extrabold text-gray-600">
            {day ? day : "Day"}
          </span>
        </div>

        {/* Time */}
        <div className="flex flex-col items-center justify-center border-gray-300 border-r sm:border-0 md:border-r">
          <span className="text-sm font-medium text-gray-700">Time</span>
          <span
            className={`text-lg font-extrabold ${
              appConfig ? appConfig.theme_text : ColorPallet.theme_text
            }`}
          >
            {start_time ? start_time.slice(0, 8) : "00:00 - 00:00"}
          </span>
          <span className="text-sm font-semibold text-gray-600">
            {type ? type : "Session Type"}
          </span>
        </div>

        {/* Price */}
        <div className="flex flex-col items-center justify-center border-gray-300 sm:border-r">
          <span className="text-sm font-medium text-gray-700">Fee</span>
          <span className="text-lg font-bold text-gray-600">
            {fee ? fee : "Rs 00.00"}
          </span>
        </div>

        {/* Book Now */}
        <div
          className="flex
         flex-col items-center justify-center col-span-2 mt-2 sm:mt-0 sm:col-span-1"
        >
          {isOpen ? (
            <Button
              title="Booking..."
              bg="bg-red-600 text-white px-2 py-1 hover:bg-red-700 rounded-lg
               cursor-not-allowed"
            />
          ) : (
            <Button
              title="Book Now"
              bg={`${
                appConfig
                  ? `${appConfig.secondary_btn} ${appConfig.secondary_btn_hover} ${appConfig.secondary_btn_text}`
                  : `${ColorPallet.secondary_btn} ${ColorPallet.secondary_btn_hover} ${ColorPallet.secondary_btn_text}`
              } px-2 py-1 rounded-lg`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <ChannelForm session_id={id} day={day} setStatus={setIsOpen} />
      )}
    </motion.div>
  );
};

export default SessionBar;
