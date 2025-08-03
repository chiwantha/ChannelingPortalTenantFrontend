/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";
import { ColorPallet } from "../../constants";

const DoctorCard = ({ id, name, specialization, img, gender }) => {
  const { appConfig } = useContext(ConfigContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="rounded-xl p-6 w-full sm:max-w-sm md:max-w-md lg:max-w-sm flex flex-col
       justify-between items-center border border-[#0560D9]/20 bg-white shadow-md 
    hover:shadow-lg hover:border transition-shadow duration-300 space-y-4"
    >
      {/* Top: Doctor Image */}
      <div className="w-32 h-32 sm:w-36 sm:h-36">
        <img
          src={`/doctors/${img}`}
          alt={`Dr. ${name}`}
          className={`w-full h-full object-cover rounded-full border-2 
            ${appConfig ? appConfig.theme_border : ColorPallet.theme_border}`}
        />
      </div>

      {/* Middle: Doctor Info */}
      <div className="text-center space-y-2 w-full flex-grow flex flex-col items-center justify-center">
        <p className="uppercase text-xs sm:text-sm text-gray-500 tracking-wide">
          {gender}
        </p>
        <h3
          className="uppercase leading-5 text-lg sm:text-lg 
        font-semibold text-gray-700 "
        >
          {name}
        </h3>
        <p className="uppercase text-xs sm:text-sm text-gray-500 tracking-wide">
          {specialization}
        </p>
      </div>

      {/* Bottom: Book Button */}
      <Link
        to={`/doctor/${id}`}
        className="inline-block w-full text-center mt-auto"
      >
        <Button title="Book Now" fullWidth />
      </Link>
    </motion.div>
  );
};

export default DoctorCard;
