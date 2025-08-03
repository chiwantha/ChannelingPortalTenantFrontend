import React from "react";
import IconButton from "../../components/common/IconButton";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const AdminPannels = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["adminPannels"],
    queryFn: async () => {
      const res = await makeRequest.get("/dashboard/pannels");
      return res;
    },
  });

  return (
    <div className="flex flex-col space-y-2">
      <div className="">
        <span className="text-gray-500 uppercase text-sm">
          Select Admin Pannel
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {!isLoading &&
          data &&
          data.data.map((item, index) => (
            <a
              className={`flex flex-col gap-1 overflow-hidden relative bg-slate-100 hover:bg-slate-200 rounded-lg p-4 border font-medium border-blue-400/40`}
              key={index}
              href={`${item.portal_link}/admin`}
            >
              <span>{item.name}</span>
              <span className="text-xs">{`${item.portal_link}/admin`}</span>
              <img
                src={`/hospital/logo/${item.logo && item.logo}`}
                alt="/hospital/logo/default.png"
                width={100}
                height={100}
                className="absolute right-[-50px] h-full opacity-5 mask-l-from-3 aspect-auto w-auto top-0"
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default AdminPannels;
