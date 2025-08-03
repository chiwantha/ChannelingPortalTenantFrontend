import React from "react";
import DashSkelton from "../../assets/res/dash/skelton.png";

const Skeleton = ({ skfor }) => {
  if (skfor === "DoctorCard") {
    return (
      <div
        className="rounded-xl p-6 w-full sm:max-w-sm md:max-w-md lg:max-w-sm flex flex-col
       justify-between items-center border border-[#0560D9]/20 bg-white shadow-md animate-pulse
    hover:shadow-lg hover:border transition-shadow duration-300 space-y-4"
      >
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gray-200 animate-pulse border-2 border-[#cccccc]" />

        <div className="text-center space-y-2 w-full flex-grow flex flex-col items-center justify-center">
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
          <div className="h-2 w-4/6 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-8 w-full bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }

  if (skfor === "ProfileCard") {
    return (
      <div className="p-4 bg-white border border-[#0460D9]/50 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-md">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gray-200 animate-pulse border-2 border-[#0560D9]" />

        <div className="text-center space-y-2 w-full flex-grow flex flex-col items-center justify-center">
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />

          <div className="h-6 w-40 bg-gray-300 rounded animate-pulse" />

          <hr className="w-1/4 border-gray-300" />

          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />

          <hr className="w-1/4 border-gray-300" />

          <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />

          <hr className="w-1/4 border-gray-300" />

          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (skfor === "Timetable") {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="h-3 w-48 bg-gray-200 rounded mb-4"></div>
        <hr className="my-2 border-gray-300" />
        <table className="w-full mt-2">
          <tbody>
            {/* Two skeleton rows */}
            {[...Array(2)].map((_, index) => (
              <tr key={index}>
                <td className="px-2 py-1">
                  <div className="h-2 w-20 bg-gray-200 rounded-lg"></div>
                </td>
                <td>
                  <div className="flex gap-2">
                    <div className="h-2 w-24 bg-gray-200 rounded-lg"></div>
                    <div className="h-2 w-24 bg-gray-200 rounded-lg"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (skfor === "SessionBar") {
    return (
      <div
        className="relative w-full grid grid-cols-2 md:grid-cols-4
      rounded-lg shadow-md border bg-slate-50 border-gray-300
       hover:border-gray-500/40 transition-colors duration-300 p-4
       space-y-4 md:space-y-0 animate-pulse"
        role="region"
        aria-label="Session Details"
      >
        {/* Left Indicator */}
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-8 rounded-r
           bg-gray-400 "
          aria-hidden="true"
        />

        {/* Day */}
        <div className="flex flex-col items-center justify-center border-gray-300 sm:border-r col-span-2 sm:col-span-1">
          <span className="text-lg font-extrabold w-4/12 rounded-lg bg-gray-200 p-2" />
        </div>

        {/* Time */}
        <div
          className="flex flex-col space-y-2 items-center justify-center
           border-gray-300 border-r sm:border-0 md:border-r"
        >
          <span className="text-sm font-medium w-4/12 rounded-lg bg-gray-200 p-1" />
          <span className="text-sm font-medium w-4/6 rounded-lg bg-gray-200 p-2" />
          <span className="text-sm font-medium w-4/12 rounded-lg bg-gray-200 p-1" />
        </div>

        {/* Price */}
        <div
          className="flex flex-col items-center justify-center border-gray-300 
        sm:border-r space-y-2"
        >
          <span className="text-sm font-medium w-4/12 rounded-lg bg-gray-200 p-1" />
          <span className="text-sm font-medium w-4/6 rounded-lg bg-gray-200 p-2" />
        </div>

        {/* Book Now */}
        <div
          className="flex flex-col items-center justify-center col-span-2
         mt-2 sm:mt-0 sm:col-span-1"
        >
          <span className="text-sm font-medium w-4/8 rounded-lg bg-gray-200 p-4" />
        </div>
      </div>
    );
  }

  if (skfor === "dashCard") {
    return (
      <div
        className="px-4 py-6 rounded-lg shadow-md border border-gray-300 bg-slate-50
    flex flex-col items-start relative overflow-hidden space-y-2 animate-pulse"
      >
        <span className="text-sm font-medium w-1/2 rounded-lg bg-gray-200 p-2" />
        <span className="text-sm font-medium w-4/6 rounded-lg bg-gray-200 p-4" />
        <span className="text-sm font-medium w-1/3 rounded-lg bg-gray-200 p-1" />

        <img
          src={DashSkelton}
          width={100}
          height={100}
          alt="default.png"
          className="absolute right-[-70px] h-full top-0 aspect-square mask-l-from-0.5 opacity-70"
        />
      </div>
    );
  }

  return <div>No Skeleton!</div>;
};

export default Skeleton;
