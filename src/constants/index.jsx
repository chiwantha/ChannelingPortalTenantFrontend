import channeling from "../assets/icons/channeling.png";
import channel_history from "../assets/icons/channel_history.png";
import pharmacy from "../assets/icons/pharmacy.png";
import lab from "../assets/icons/lab.png";
import prescription from "../assets/icons/prescription.png";
import help from "../assets/icons/help.png";
import {
  FaUserMd,
  FaTooth,
  FaFlask,
  FaXRay,
  FaProcedures,
} from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaPills } from "react-icons/fa";

export const Company = {
  name: "SL Hospitals (Pvt) Ltd",
  description: `This Hospitals is committed to providing quality healthcare with
            compassion and excellence. Our online channeling portal allows you
            to easily book appointments with trusted doctors from anywhere`,
  proud: `Proud to be Sri Lanka’s most trusted hospital for 
            compassionate and quality healthcare`,

  services: [
    {
      service: "Channeling",
      icon: <FaUserMd />,
    },
    {
      service: "OPD",
      icon: <MdOutlineLocalHospital />,
    },
    {
      service: "Dental",
      icon: <FaTooth />,
    },
    {
      service: "Labrotary",
      icon: <FaFlask />,
    },
    {
      service: "Pharmacy",
      icon: <FaPills />,
    },
    {
      service: "Digital X-Ray",
      icon: <FaXRay />,
    },
    {
      service: "Inward Care",
      icon: <FaProcedures />,
    },
  ],
};

export const ColorPallet = {
  //arogya
  theme: `bg-[#0460D9]`, // main theme,
  theme_text: `text-[#0460D9]`,
  theme_hover: `hover:bg-[#0460D9]`, // main theme hover
  theme_border: `border-[#0460D9]`,
  action: `bg-[#FFC935]`, // main action ( for background sometimes )
  action_text: `text-[#FFC935]`, // action text for topics sometimes
  theme_dark: `bg-[#0349A4]`, // theme color little bit darker
  primary_btn: `bg-[#0460D9]`,
  primary_btn_hover: `hover:bg-[#0B4A9C]`,
  primary_btn_text: `text-[#FFFFFF]`,
  secondary_btn: `bg-[#4CB847]`,
  secondary_btn_hover: `hover:bg-[#00A63E]`,
  secondary_btn_text: `text-[#FFFFFF]`,
};

export const ColorPallet2 = {
  //prime
  theme: `bg-[#0073C4]`, // main theme
  theme_text: `text-[#0073C4]`,
  theme_hover: `hover:bg-[#0073C4]`, // main theme hover
  theme_border: `border-[#0073C4]`,
  action: `bg-[#CDF50F]`, // main action ( for background sometimes )
  action_text: `text-[#CDF50F]`, // action text for topics sometimes
  theme_dark: `bg-[#005A9D]`, // theme color little bit darker
  primary_btn: `bg-[#0073C4]`,
  primary_btn_hover: `hover:bg-[#0269A0]`,
  primary_btn_text: `text-[#ffffff]`,
  secondary_btn: `bg-[#5BC443]`,
  secondary_btn_hover: `hover:bg-[#3EA130]`,
  secondary_btn_text: `text-[#1a1a1a]`,
};

export const Specialization = [
  {
    id: 1,
    name: "Cardiologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296406.png",
  },
  {
    id: 2,
    name: "Chest Physician",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296411.png",
  },
  {
    id: 3,
    name: "Dermatologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296411.png",
  },
  {
    id: 4,
    name: "Dietician and Nutrician",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296412.png",
  },
  {
    id: 5,
    name: "Endocrinologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296413.png",
  },
  {
    id: 6,
    name: "ENT Surgeon",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296413.png",
  },
  {
    id: 7,
    name: "Eye Surgeon",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296414.png",
  },
  {
    id: 8,
    name: "Family Physician",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296414.png",
  },
  {
    id: 9,
    name: "Gastroenterologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296415.png",
  },
  {
    id: 10,
    name: "Genito Urinary Surgeon",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296415.png",
  },
  {
    id: 11,
    name: "Gynaecologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296416.png",
  },
  {
    id: 12,
    name: "Haematologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296416.png",
  },
  {
    id: 13,
    name: "Microbiologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296417.png",
  },
  {
    id: 14,
    name: "Neonatologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296417.png",
  },
  {
    id: 15,
    name: "Nephorologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296418.png",
  },
  {
    id: 16,
    name: "Neuro Physician",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296418.png",
  },
  {
    id: 17,
    name: "Oncologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296419.png",
  },
  {
    id: 18,
    name: "OMF Surgeon",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296419.png",
  },
  {
    id: 19,
    name: "Orthopaedic Surgeon",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296420.png",
  },
  {
    id: 20,
    name: "Paediatric Neurologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296420.png",
  },
  {
    id: 21,
    name: "Paediatrician",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296421.png",
  },
  {
    id: 22,
    name: "Physician",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296421.png",
  },
  {
    id: 23,
    name: "Phsiotherapist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296422.png",
  },
  {
    id: 24,
    name: "Psychiatrist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296422.png",
  },
  {
    id: 25,
    name: "Psychological counselor",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296423.png",
  },
  {
    id: 26,
    name: "Rheumatologist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296423.png",
  },
  {
    id: 27,
    name: "Sexual medicine and Sexual health",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296424.png",
  },
  {
    id: 28,
    name: "Speech and Language therapist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296424.png",
  },
  {
    id: 29,
    name: "Sports Medicine",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296425.png",
  },
  {
    id: 30,
    name: "Surgeon",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296425.png",
  },
  {
    id: 31,
    name: "Venerelogist",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/296426.png",
  },
];

export const Menu = [
  {
    title: "Channeling",
    icon: channeling,
    subtitle: "Channel a doctor",
    help: "Book doctor appointments from your phone or computer.",
    badge: "New !",
    badgeColor: "hot",
    link: "/channeling",
  },
  {
    title: "Channel History",
    icon: channel_history,
    subtitle: "Browse your history",
    help: "See your previous appointments and doctor visit records.",
    badge: "New !",
    badgeColor: "hot",
    link: "/myappointment",
  },
  {
    title: "Online Pharmacy",
    icon: pharmacy,
    subtitle: "Buy medicine online",
    help: "Order your medications online and get doorstep delivery.",
    badge: "Comming Soon !",
    badgeColor: "warning",
    link: "",
  },
  {
    title: "Lab Appointments",
    icon: lab,
    subtitle: "Book lab tests",
    help: "Schedule lab tests online without waiting in line.",
    badge: "Comming Soon !",
    badgeColor: "warning",
    link: "",
  },
  {
    title: "Online Prescriptions",
    icon: prescription,
    subtitle: "Your e-prescriptions",
    help: "View prescriptions issued through your channeling visits.",
    badge: "Comming Soon !",
    badgeColor: "warning",
    link: "",
  },
  {
    title: "Help Desk",
    icon: help,
    subtitle: "How to use",
    help: "Read documents and guides for easy navigation and system use.",
    badge: "Try Now !",
    badgeColor: "success",
    link: "",
  },
];

export const Instructions = {
  english: `After you submit your appointment, we will 
  call you within 30 minutes to confirm the date and time. 
  Please wait for our call`,
  sinhala: `ඔබ ඔබගේ හමුවීම ඉදිරිපත් කළ පසු, දිනය සහ වේලාව තහවුරු 
  කිරීම සඳහා අපි විනාඩි 30ක් ඇතුළත ඔබට කතා කරන්නෙමු. 
අපගේ ඇමතුම එනතෙක් රැඳී සිටින්න.`,
};
