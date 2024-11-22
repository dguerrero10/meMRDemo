import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import MasksOutlinedIcon from "@mui/icons-material/MasksOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";
import SettingsOverscanOutlinedIcon from "@mui/icons-material/SettingsOverscanOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";

export const MeButtons = [
  {
    to: "/dashboard/home",
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    to: "/dashboard/vitals",
    title: "Vitals",
    icon: <MonitorHeartOutlinedIcon />,
  },
  {
    to: "/dashboard/history",
    title: "History",
    icon: <MedicalInformationOutlinedIcon />,
  },
  {
    to: "/dashboard/vaccines-immunizations",
    title: "Vaccines/Immunizations",
    icon: <VaccinesOutlinedIcon />,
  },
  {
    to: "/dashboard/medications",
    title: "Medications",
    icon: <MedicationOutlinedIcon />,
  },
  {
    to: "/dashboard/documents",
    title: "Documents",
    icon: <AssignmentOutlinedIcon />,
  },
  {
    to: "/dashboard/providers",
    title: "Providers",
    icon: <HealthAndSafetyOutlinedIcon />,
  },
  {
    to: "/dashboard/drug-allergies",
    title: "Drug Allergies",
    icon: <MasksOutlinedIcon />,
  },
];

export const MedicalRecordButtons = [
  {
    to: "/dashboard/lab-tests",
    title: "Lab Tests",
    icon: <BiotechOutlinedIcon />,
  },
  {
    to: "/dashboard/trended-bloodwork",
    title: "Trended Bloodwork",
    icon: <BloodtypeOutlinedIcon />,
  },
  {
    to: "/dashboard/imaging",
    title: "Imaging",
    icon: <SettingsOverscanOutlinedIcon />,
  },
  {
    to: "/dashboard/provider-facility-notes",
    title: "Provider/Facility Notes",
    icon: <HistoryEduOutlinedIcon />,
  },
  {
    to: "/dashboard/procedure-notes",
    title: "Procedure Notes",
    icon: <ChecklistRtlOutlinedIcon />,
  },
  {
    to: "/dashboard/hei-data",
    title: "HEI Data",
    icon: <CreateNewFolderOutlinedIcon />,
  },
];

