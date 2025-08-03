import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import ProfileCard from "../../components/user/ProfileCard";
import Skeleton from "../../components/common/Skeliton";
import SessionBar from "../../components/user/SessionBar";
import InstructuonsCard from "../../components/user/InstructionsCard";
import { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";

const DoctorProfile = () => {
  const { id: doctor_id } = useParams();
  const { appConfig } = useContext(ConfigContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["DoctorProfile", doctor_id],
    queryFn: async () => {
      const res = await makeRequest.post(`/doctors/fullprofile`, {
        doctor_id: doctor_id,
        hospital_id: appConfig && appConfig.id,
      });
      return res;
    },
    enabled: !!appConfig?.id,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div className="space-y-4">
        {isLoading ? (
          <Skeleton skfor={"ProfileCard"} />
        ) : (
          !error && data && <ProfileCard ProfileData={data.data[0]} />
        )}
        <InstructuonsCard />
      </div>

      <div className="sm:col-span-3 flex flex-col gap-4">
        {isLoading ? (
          <Skeleton skfor={"SessionBar"} />
        ) : error ? (
          <div className="text-red-500">Failed to load sessions.</div>
        ) : data && data.data[1] && data.data[1].length > 0 ? (
          data.data[1].map((item, index) => (
            <SessionBar key={index} session_data={item} />
          ))
        ) : (
          <div className="text-slate-500 text-sm flex items-center justify-center p-4">
            No sessions available !
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
