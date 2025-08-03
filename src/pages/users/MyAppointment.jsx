import { useState, useEffect, useContext } from "react";
import { makeRequest } from "../../axios";
import Button from "../../components/common/Button";
import { useMutation } from "@tanstack/react-query";
import AppointmentCard from "../../components/common/AppointmentCard";
import { ConfigContext } from "../../Context/configContext";
import { ColorPallet } from "../../constants";

const MyAppointment = () => {
  const { appConfig } = useContext(ConfigContext);
  const initialQuery =
    JSON.parse(localStorage.getItem("appoimentNumber")) || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const {
    data,
    isPending,
    error,
    mutate: reachData,
  } = useMutation({
    mutationFn: async () => {
      const res = await makeRequest.post(`/appointment/reach`, {
        contact: searchQuery,
        hospital_id: appConfig ? appConfig.id : "0",
      });
      return res.data;
    },
  });

  useEffect(() => {
    if (initialQuery && initialQuery.trim() !== "") {
      reachData();
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [initialQuery, reachData]);

  const handleSearch = () => {
    if (searchQuery && searchQuery.trim() !== "") {
      reachData();
    }
  };

  return (
    <div className="space-y-4">
      <div
        className={`w-full grid grid-cols-4 p-2 py-4 gap-4 ${
          appConfig ? appConfig.theme : ColorPallet.theme
        } shadow-md rounded-lg`}
      >
        <div className="sm:col-span-3 col-span-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1 col-span-2">
            <label className="pl-1 font-semibold text-sm text-slate-200">
              Search With Contact No <span className="text-red-500">*</span>
            </label>
            <input
              required
              maxLength={200}
              type="search"
              name="contact"
              value={searchQuery}
              className="bg-white rounded-md outline-none w-full px-2 py-2"
              placeholder="eg :- 0788806670"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-end sm:col-span-1 col-span-4">
          <Button
            title={isPending ? "Searching..." : "Search"}
            bg={`${
              appConfig
                ? `${appConfig.secondary_btn} ${appConfig.secondary_btn_hover} ${appConfig.secondary_btn_text}`
                : `${ColorPallet.secondary_btn} ${ColorPallet.secondary_btn_hover} ${ColorPallet.secondary_btn_text}`
            } text-center font-normal py-2 w-full`}
            onClick={handleSearch}
            disabled={isPending}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {isPending && <div>Pending...</div>}
        {error && <div className="text-red-500">Error: {error.message}</div>}
        {data &&
          data.map((item, index) => (
            <AppointmentCard key={index} data={item} admin={false} />
          ))}
      </div>
    </div>
  );
};

export default MyAppointment;
