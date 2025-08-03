import { TbPrinter } from "react-icons/tb";
import { TbPrinterOff } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { toPng } from "html-to-image";
import { useRef } from "react";

const AppointmentCard = ({ data, admin }) => {
  // patient info
  const { patient, contact, alternate_contact, email } = data;
  // session info
  const { doctor_name, session_type, start_time, end_time, fee } = data;
  // appointment info
  const { id, date, note, created_at, is_confirmed, is_printed } = data;

  const queryClient = useQueryClient();
  const cardRef = useRef();
  const controlRef = useRef();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const silentDownload = (dataUrl, filename) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const { mutate: mutation } = useMutation({
    mutationFn: async (data) => {
      const res = await makeRequest.put(`/appointment/update`, {
        id: id,
        action: data,
        timestamp: Date.now(),
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`appointmentListAdmin`]);
    },
  });

  const downloadAppointment = () => {
    if (!cardRef.current || !controlRef.current) return;

    // Hide the control buttons
    controlRef.current.classList.add("hidden");

    // Wait for DOM to update before taking the snapshot
    requestAnimationFrame(() => {
      toPng(cardRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const name = data.patient?.replace(/\s+/g, "_") || "appointment";
          silentDownload(dataUrl, `${name}_appointment.png`);
          mutation("print"); // mark as printed
        })
        .catch((err) => {
          console.error("Image download failed", err);
        })
        .finally(() => {
          // Re-show the control buttons after download
          controlRef.current.classList.remove("hidden");
        });
    });
  };

  const handleClick = (button) => {
    mutation(button);
  };

  return (
    <div
      className="rounded-lg shadow-md bg-white border border-blue-500/20
     p-4 flex flex-col gap-4 hover:shadow-md transition"
      ref={cardRef}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#0560D9]">
          Appointment #{id ?? "##"}
        </h2>

        <span
          className={`text-sm font-medium px-3 py-1 rounded-lg ${
            is_confirmed
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white animate-pulse"
          }`}
        >
          {is_confirmed ? "Approved" : "Pending"}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Session Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
        <Detail label="Doctor" value={doctor_name || "Unknown"} />
        <Detail label="Session" value={session_type || "Not Set"} />
        <Detail
          label="Available Time"
          value={
            start_time && end_time
              ? `${start_time} - ${end_time}`
              : "00:00:00 - 00:00:00"
          }
        />
        <Detail label="Fee" value={`LKR ${fee || "0.00"}`} />
        <Detail label="On Date" value={date ? formatDate(date) : "Unknown"} />
        <Detail
          label="Created On"
          value={created_at ? formatDate(created_at) : "Unknown"}
        />
      </div>

      <div className="border-t border-gray-200" />

      {/* Patient Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 ">
        <Detail label="Patient" value={patient || "Unknown"} />
        <Detail label="Contact" value={contact || "0"} />
        <Detail label="Alternate Contact" value={alternate_contact || "0"} />
        <Detail label="Email" value={email || "Not Set"} />
        <Detail
          label="Note"
          value={note || "Not Set"}
          classn={"sm:col-span-2"}
        />
      </div>

      <div className="flex flex-col gap-4">
        {/* Divider */}
        <div className="border-t border-gray-200" />
        <div className="flex flex-col sm:flex-row-reverse gap-3 justify-between items-center">
          {admin && (
            <div
              className="flex gap-2 items-center justify-end"
              ref={controlRef}
            >
              {is_confirmed ? (
                <Button
                  title={<FaXmark />}
                  bg={"bg-red-500 hover:bg-red-600 text-white"}
                  pd={`px-3 py-2 text-lg`}
                  onClick={() => {
                    handleClick(`reject`);
                  }}
                />
              ) : (
                <>
                  <Button
                    title={<RiDeleteBin6Line />}
                    bg={"bg-red-500 hover:bg-red-600 text-white"}
                    pd={"px-3 py-2 text-lg"}
                    onClick={() => {
                      handleClick(`remove`);
                    }}
                  />
                  <Button
                    title={<GiCheckMark />}
                    bg={"bg-[#00C950] hover:bg-green-600 text-white"}
                    pd={`px-3 py-2 text-lg`}
                    onClick={() => {
                      handleClick(`approve`);
                    }}
                  />
                </>
              )}
              <Button
                title={!is_printed ? <TbPrinter /> : <TbPrinterOff />}
                bg={
                  is_printed
                    ? `bg-blue-100 hover:bg-blue-300`
                    : `bg-slate-100 hover:bg-slate-200`
                }
                pd={"px-3 py-2 text-lg"}
                onClick={() => {
                  downloadAppointment();
                }}
              />
            </div>
          )}
          <span className=" text-sm font-bold text-[#0560D9]">
            Powered By K-Chord (Pvt) Ltd
          </span>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value, classn }) => (
  <div className={classn}>
    <span className="text-sm font-semibold text-gray-600">{label}: </span>
    <span className="text-sm text-gray-500">{value}</span>
  </div>
);

export default AppointmentCard;
