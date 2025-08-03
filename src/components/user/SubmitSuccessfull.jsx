import React from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SubmitSuccessfull = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center 
     pt-6 pb-4 max-w-md mx-auto space-y-4"
    >
      {/* Animated checkmark container */}
      <svg
        className="checkmark w-[120px] h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>

      {/* Content */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#4DB847]">
        SUCCESS!
      </h2>
      <p className="text-gray-500 max-w-sm text-center leading-5">
        Your appointment has been successfully placed. Please wait for our
        confirmation call to verify the date and time.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center ">
        <Link to={"/channeling"}>
          <Button
            title={"Book Another"}
            bg={"text-white bg-[#4DB847]  py-1 "}
          />
        </Link>
        <Link to={"/myappointment"}>
          <Button title={"My Appointments"} />
        </Link>
      </div>

      {/* SVG animation styles */}
      <style>{`
        .checkmark {
          border-radius: 50%;
          display: block;
          stroke-width: 2;
          stroke: #4DB847;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #4DB847;
          animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
        }
        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #4DB847;
          fill: #fff;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }
        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes scale {
          0%, 100% {
            transform: none;
          }
          50% {
            transform: scale3d(1.1, 1.1, 1);
          }
        }
        @keyframes fill {
          100% {
            box-shadow: inset 0px 0px 0px 30px #4DB847;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default SubmitSuccessfull;
