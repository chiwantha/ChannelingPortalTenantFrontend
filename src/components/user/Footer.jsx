import { useContext } from "react";
import { ColorPallet, Company } from "../../constants";
import { ConfigContext } from "../../Context/configContext";

const Footer = () => {
  const { appConfig } = useContext(ConfigContext);

  const Likns = [
    {
      title: "Main Web",
      link: appConfig ? appConfig.web_link : `/`,
    },
    {
      title: "Arogya Channeling",
      link: appConfig ? appConfig.portal_link : `/`,
    },
    {
      title: "About Arogya",
      link: appConfig ? appConfig.about_page_link : `/`,
    },
    {
      title: "Services",
      link: appConfig ? appConfig.service_page_link : `/`,
    },
  ];

  const Contact = [
    `Lan : ${appConfig ? appConfig.lan : "Unknown"}`,
    `WhatsApp : ${appConfig ? appConfig.whatsapp : "Unknown"}`,
    `Mail : ${appConfig ? appConfig.email : "Unknown"}`,
    `Address : ${appConfig ? appConfig.address : "Unknown"}`,
  ];

  return (
    <footer className="w-full border-t-2 shadow-md border-gray-500">
      {/* top strip */}
      <div
        className={`${appConfig ? appConfig.theme : ColorPallet.theme} py-4 `}
      >
        <div
          className="mx-auto max-w-7xl px-2 flex flex-col items-center 
        justify-center space-y-4"
        >
          {/* Description */}
          <p className="text-neutral-200 max-w-4xl text-center">
            {appConfig ? appConfig.description : Company.description}
          </p>
          {/* separator */}
          <hr className="border-gray-300/50 w-full" />
          {/* breef boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {/* hospital breef */}
            <div
              className={`flex flex-col items-center justify-center 
            space-y-3 p-3 rounded-lg text-center ${
              appConfig ? appConfig.action : ColorPallet.action
            }`}
            >
              <img
                src={`/hospital/logo/${
                  appConfig ? appConfig.logo : "default.png"
                }`}
                width={100}
                height={100}
                alt=""
              />
              {/* <hr className="border-gray-500/50  w-1/2" /> */}
              <p className="text-gray-600">
                {appConfig ? appConfig.footer_desc : Company.proud}
              </p>
            </div>
            {/* important links */}
            <div className="flex flex-col items-end text-right">
              <h2
                className={`text-2xl font-black uppercase mb-1 ${
                  appConfig ? appConfig.action_text : ColorPallet.action_text
                }`}
              >
                {appConfig ? appConfig.name.split(" ")[0] : "Hospital"} Links
              </h2>
              {Likns.map((item, index) => (
                <span className="text-neutral-200 mb-1" key={index}>
                  <a href={item.link}>{item.title} -</a>
                </span>
              ))}
            </div>
            {/* Contact */}
            <div
              className="flex flex-col items-start text-left
            border-neutral-300/50 md:border-l md:pl-4"
            >
              <h2
                className={`text-2xl font-black uppercase mb-1 ${
                  appConfig ? appConfig.action_text : ColorPallet.action_text
                }`}
              >
                Contact {appConfig ? appConfig.name.split(" ")[0] : "Hospital"}
              </h2>
              {Contact.map((item, index) => (
                <span className="text-neutral-100 mb-1" key={index}>
                  - {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* bottom strip */}
      <div
        className={`${
          appConfig ? appConfig.theme_dark : ColorPallet.theme_dark
        } py-4 `}
      >
        <div className="mx-auto max-w-7xl px-2 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-300 text-center gap-2">
          <span>
            © {new Date().getFullYear()} K-Chord (Pvt) Ltd. All rights reserved.
          </span>
          <span>
            System Design & Developed by{" "}
            <strong className="text-white">
              <a href="https://www.kchord.com">K-Chord (Pvt) Ltd</a>
            </strong>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
