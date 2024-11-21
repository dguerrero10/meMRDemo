import { createBrowserRouter } from "react-router-dom";
import DashboardRootPage from "./modules/dashboard/pages/DashboardRootPage/DashboardRootPage";
import DashboardPage from "./modules/dashboard/pages/DashboardPage/DashboardPage";
import History from "./modules/dashboard/components/History/History";
import VaccinesImmunizations from "./modules/dashboard/components/VaccinesImmunizations/VaccinesImmunizations";
import DrugAllergies from "./modules/dashboard/components/DrugAllergies/DrugAllergies";
import Medications from "./modules/dashboard/components/Medications/Medications";
import Providers from "./modules/dashboard/components/Providers/Providers";
import Documents from "./modules/dashboard/components/Documents/Documents";
import AuthPage from "./modules/auth/pages/AuthPage/AuthPage";
import Home from "./modules/dashboard/components/Home/Home";
import Vitals from "./modules/dashboard/components/Vitals/Vitals";
import NotFoundPage from "./shared/NotFoundPage/NotFoundPage";


export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />
  },
  {
    path: "/dashboard",
    element: <DashboardRootPage />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
        children: [
          {
            path: "home",
            element: <Home />
          },
          {
            path: "history", 
            element: <History />,
          },
          {
            path: "vaccines-immunizations", 
            element: <VaccinesImmunizations />,
          },
          {
            path: "drug-allergies", 
            element: <DrugAllergies />,
          },
          {
            path: "medications", 
            element: <Medications />,
          },
          {
            path: "providers", 
            element: <Providers />,
          },
          {
            path: "documents", 
            element: <Documents />,
          },
          {
            path: "vitals", 
            element: <Vitals />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);
