import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "../../components/common/Button";
import DoctorCard from "../../components/user/DoctorCard";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Skeleton from "../../components/common/Skeliton";
import { ColorPallet, Specialization } from "../../constants";
import { useContext } from "react";
import { ConfigContext } from "../../Context/configContext";

const Channeling = () => {
  const { appConfig } = useContext(ConfigContext);

  const [Queryfilter, setQueryfilter] = useState({
    doctor_name: "",
    specialization: "",
    gender: "",
    day: "",
  });

  const [specializationQuery, setSpecializationQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Use the Specialization constant directly instead of fetching from API
  const specializations = Specialization.map((item) => item.name);

  const filteredSpecializations =
    specializationQuery === ""
      ? specializations
      : specializations.filter((s) =>
          s.toLowerCase().includes(specializationQuery.toLowerCase())
        );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQueryfilter((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "doctor_name") {
      setSearchTerm(value);
    }
    setCurrentPage(1);
  };

  const handleSpecializationChange = (value) => {
    setQueryfilter((prev) => ({
      ...prev,
      specialization: value,
    }));
    setSpecializationQuery("");
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setSearchTerm(Queryfilter.doctor_name);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setQueryfilter({
      doctor_name: "",
      specialization: "",
      gender: "",
      day: "",
    });
    setSpecializationQuery("");
    setSearchTerm("");
    setCurrentPage(1);
  };

  // fetch doctors list to page
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["doctorList"],
    queryFn: async () => {
      const res = await makeRequest.post(`/doctors/list/`, {
        hospital_id: appConfig && appConfig.id,
      });
      return res.data;
    },
    enabled: !!appConfig?.id,
  });

  // Filter doctors based on search term (client-side fallback)
  const filteredDoctors =
    data?.filter((doctor) => {
      const matchesName = doctor.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesSpecialization = Queryfilter.specialization
        ? doctor.specialization === Queryfilter.specialization
        : true;
      return matchesName && matchesSpecialization;
    }) || [];

  // Pagination calculations
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDoctors = filteredDoctors.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
  };

  return (
    <div className="space-y-4">
      {/* Filter Component */}
      <div
        className={`${
          appConfig ? appConfig.theme : ColorPallet.theme
        } rounded-lg py-4 px-2 shadow-md grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 gap-4`}
      >
        {/* Doctor Name */}
        <div className="space-y-2">
          <div className="text-sm text-slate-100">Doctor name</div>
          <input
            type="search"
            name="doctor_name"
            className="bg-white rounded-md outline-none w-full px-2 py-2"
            placeholder="Doctor Name ..."
            value={Queryfilter.doctor_name}
            onChange={handleInputChange}
          />
        </div>

        {/* Specialization Combobox */}
        <div className="space-y-2">
          <div className="text-sm text-slate-100">Specialization</div>
          <Combobox
            value={Queryfilter.specialization}
            onChange={handleSpecializationChange}
          >
            <div className="relative">
              <Combobox.Input
                className="w-full bg-white outline-none rounded-md px-2 py-2"
                placeholder="Search specialization..."
                displayValue={(specialization) => specialization}
                onChange={(e) => setSpecializationQuery(e.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <FaAngleDown className="w-5 h-5 text-gray-500" />
              </Combobox.Button>
              <Combobox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto bg-slate-100 rounded-md shadow-lg">
                {filteredSpecializations.length > 0 ? (
                  filteredSpecializations.map((item, i) => (
                    <Combobox.Option
                      key={i}
                      value={item}
                      className={({ active }) =>
                        `cursor-pointer select-none px-4 py-2 ${
                          active ? "bg-blue-500 text-white" : "text-gray-800"
                        }`
                      }
                    >
                      {item}
                    </Combobox.Option>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No specializations found
                  </div>
                )}
              </Combobox.Options>
            </div>
          </Combobox>
        </div>

        {/* Search and Clear Buttons */}
        <div className="flex gap-4 items-end md:col-span-1 sm:col-span-2">
          <Button
            title={"Search"}
            onClick={handleSearch}
            bg={`${
              appConfig ? appConfig.secondary_btn : ColorPallet.secondary_btn
            } ${
              appConfig
                ? appConfig.secondary_btn_hover
                : ColorPallet.secondary_btn_hover
            } ${
              appConfig
                ? appConfig.secondary_btn_text
                : ColorPallet.secondary_btn_text
            } text-center font-normal py-2 w-full`}
          />
          <Button
            title={"Clear Filters"}
            onClick={handleClearFilters}
            bg={"bg-gray-500 text-center text-white font-normal py-2 w-full"}
          />
        </div>
      </div>

      {/* Card Grid with Pagination */}
      <div className="space-y-4">
        {/* Error state */}
        {error && <div>Error loading doctors: {error.message}</div>}

        {/* Empty state */}
        {!isLoading && !isFetching && filteredDoctors.length === 0 && (
          <div className="col-span-full text-center py-8">
            No doctors found matching your criteria
          </div>
        )}

        {/* Doctors grid */}
        {(isLoading || isFetching) && !data ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Skeleton skfor={"DoctorCard"} />
            <Skeleton skfor={"DoctorCard"} />
            <Skeleton skfor={"DoctorCard"} />
            <Skeleton skfor={"DoctorCard"} />
          </div>
        ) : (
          filteredDoctors.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {paginatedDoctors.map((item, index) => (
                  <DoctorCard
                    key={index}
                    id={item.id}
                    gender={item.gender}
                    name={item.name}
                    specialization={item.specialization}
                    img={item.image}
                  />
                ))}
              </div>

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-1 bg-slate-300 rounded-lg disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span className="text-gray-500">
                    {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-1 bg-slate-300 rounded-lg disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Channeling;
