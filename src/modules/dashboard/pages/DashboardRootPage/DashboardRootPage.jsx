import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";

export default function DashboardRootPage() {
  return (
    <>
      <DashboardNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
