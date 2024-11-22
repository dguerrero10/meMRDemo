import { createBrowserRouter, Navigate } from "react-router-dom";

import { lazy, Suspense } from "react";
import { lazyLoadingScreen } from "./shared/ui/LazyLoadingScreen";

const DashboardRootPage = lazy(() => import("./modules/dashboard/pages/DashboardRootPage/DashboardRootPage"));
const DashboardPage = lazy(() => import("./modules/dashboard/pages/DashboardPage/DashboardPage"));
const History = lazy(() => import("./modules/dashboard/components/History/History"));
const VaccinesImmunizations = lazy(() => import("./modules/dashboard/components/VaccinesImmunizations/VaccinesImmunizations"));
const DrugAllergies = lazy(() => import("./modules/dashboard/components/DrugAllergies/DrugAllergies"));
const Medications = lazy(() => import("./modules/dashboard/components/Medications/Medications"));
const Providers = lazy(() => import("./modules/dashboard/components/Providers/Providers"));
const Documents = lazy(() => import("./modules/dashboard/components/Documents/Documents"));
const AuthPage = lazy(() => import("./modules/auth/pages/AuthPage/AuthPage"));
const Home = lazy(() => import("./modules/dashboard/components/Home/Home"));
const Vitals = lazy(() => import("./modules/dashboard/components/Vitals/Vitals"));
const NotFoundPage = lazy(() => import("./shared/NotFoundPage/NotFoundPage"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth" replace />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={lazyLoadingScreen}>
        <DashboardRootPage />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={lazyLoadingScreen}>
            <DashboardPage />
          </Suspense>
        ),
        children: [
          {
            path: "home",
            element: (
              <Suspense fallback={lazyLoadingScreen}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: "history",
            element: (
              <Suspense fallback={lazyLoadingScreen}>
                <History />
              </Suspense>
            ),
          },
          {
            path: "vaccines-immunizations",
            element: (
              <Suspense fallback={lazyLoadingScreen}>
                <VaccinesImmunizations />
              </Suspense>
            ),
          },
          {
            path: "drug-allergies",
            element: (
              <Suspense fallback={lazyLoadingScreen}>
                <DrugAllergies />
              </Suspense>
            ),
          },
          {
            path: "medications",
            element: (
              <Suspense fallback={lazyLoadingScreen}>
                <Medications />
              </Suspense>
            ),
          },
          {
            path: "providers",
            element: (
              <Suspense fallback={lazyLoadingScreen}>
                <Providers />
              </Suspense>
            ),
          },
          {
            path: "documents",
            element: (
              <Suspense fallback={lazyLoadingScreen}>
                <Documents />
              </Suspense>
            ),
          },
          {
            path: "vitals",
            element: (
              <Suspense fallback={lazyLoadingScreen}>
                <Vitals />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
