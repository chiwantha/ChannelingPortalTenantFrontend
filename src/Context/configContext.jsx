import { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Create context
// eslint-disable-next-line react-refresh/only-export-components
export const ConfigContext = createContext();

export const ConfigContextProvider = ({ children }) => {
  const [appConfig, setAppConfig] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

  const { data, isLoading, error } = useQuery({
    queryKey: ["appConfig"],
    queryFn: async () => {
      const res = await makeRequest.get("/config/appData/");
      return res.data; // Make sure to return res.data if using Axios
    },
  });

  // Set app config once data is fetched
  useEffect(() => {
    let delayTimer;

    if (data) {
      setAppConfig(data);
      // Always show loading for minimum 3 seconds
      delayTimer = setTimeout(() => {
        setShowLoading(false);
      }, 500);
    }

    return () => clearTimeout(delayTimer); // clean up on unmount
  }, [data]);

  if (isLoading || showLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center h-dvh
        text-xl md:text-2xl uppercase font-bold
        text-[#0560D9]"
      >
        <img
          src={"/app_res/loading.gif"}
          alt="loading.gif"
          width={100}
          height={100}
          className="animate-pulse aspect-square"
        />
      </motion.div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
          fontSize: "1.1rem",
        }}
      >
        Error loading config: {error.message}
      </div>
    );
  }

  return (
    <ConfigContext.Provider value={{ appConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
