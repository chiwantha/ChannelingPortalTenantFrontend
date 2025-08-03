import React, { useContext } from "react";
import DashValueCard from "./DashValueCard";
import { makeRequest } from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import Pending from "../../../assets/res/dash/pending.png";
import Reject from "../../../assets/res/dash/reject.png";
import Approve from "../../../assets/res/dash/approve.png";
import Total from "../../../assets/res/dash/total.png";
import Doctor from "../../../assets/res/dash/doctor.png";
import Doctors_No_Session from "../../../assets/res/dash/doctors_no_session.png";
import Session from "../../../assets/res/dash/session.png";
import Sale from "../../../assets/res/dash/sale.png";
import Sms from "../../../assets/res/dash/sms.png";
import Skeleton from "../../common/Skeliton";
import { ConfigContext } from "../../../Context/configContext";

const DashCardGrid = () => {
  const { appConfig } = useContext(ConfigContext);
  const { data, isLoading } = useQuery({
    queryKey: ["dashCounts"],
    queryFn: async () => {
      const res = await makeRequest.post("/dashboard/counts", {
        hospital_id: appConfig ? appConfig.id : "0",
      });
      return res.data;
    },
  });

  return (
    <div className="flex flex-col space-y-4">
      {/* Appointment */}
      <div className="flex flex-col space-y-2">
        <span className="text-gray-500 uppercase text-sm">Appointment</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {isLoading ? (
            <>
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
            </>
          ) : (
            <>
              {/* Appointment Pending */}
              <DashValueCard
                link={true}
                icon={Pending}
                title={"Pending"}
                value={data ? data.pending : null}
              />
              {/* Appointment Addroved */}
              <DashValueCard
                link={true}
                icon={Approve}
                title={"Approved"}
                value={data ? data.approved : null}
              />
              {/* Appointment Rejected */}
              <DashValueCard
                link={true}
                icon={Reject}
                title={"Removed"}
                value={data ? data.reject : null}
              />
              {/* Appointment Total */}
              <DashValueCard
                link={true}
                icon={Total}
                title={"Total"}
                value={data ? data.total : null}
              />
            </>
          )}
        </div>
      </div>
      {/* Doctor */}
      <div className="flex flex-col space-y-2">
        <span className="text-gray-500 uppercase text-sm">Doctor</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {isLoading ? (
            <>
              <Skeleton skfor={"dashCard"} />
              <Skeleton skfor={"dashCard"} />
              <div className="col-span-2 md:col-span-1">
                <Skeleton skfor={"dashCard"} />
              </div>
            </>
          ) : (
            <>
              {/* All Doctors */}
              <DashValueCard
                link={true}
                icon={Doctor}
                title={"All"}
                value={data ? data.doctors : null}
              />
              {/* Doctors No Sessions */}
              <DashValueCard
                link={true}
                icon={Doctors_No_Session}
                title={"outSession"}
                value={data ? data.doctors_no_session : null}
              />
              {/* Active Sessions */}
              <div className="col-span-2 md:col-span-1">
                <DashValueCard
                  link={true}
                  icon={Session}
                  title={"Sessions"}
                  value={data ? data.active_stssion : null}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {/* System */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-500 uppercase text-sm">Finance</span>
          {isLoading ? (
            <Skeleton skfor={"dashCard"} />
          ) : (
            <>
              {/* Sale */}
              <DashValueCard
                link={true}
                icon={Sale}
                title={"Sale"}
                value={data ? data.sale : null}
              />
            </>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-gray-500 uppercase text-sm">Sms</span>
          {isLoading ? (
            <Skeleton skfor={"dashCard"} />
          ) : (
            <>
              {/* Sale */}
              <DashValueCard
                link={true}
                icon={Sms}
                title={"Balance"}
                value={data ? data.sms_balance : null}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashCardGrid;
