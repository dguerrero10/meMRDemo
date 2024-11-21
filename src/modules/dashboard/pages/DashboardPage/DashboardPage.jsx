import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import DashboardSideNav from "../../components/DashboardSideNav/DashboardSideNav";

import classes from "./DashboardPage.module.css";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardSideNav />
      <div className={classes["dashboard-wrapper"]}>
        <Outlet />
      </div>
    </DashboardLayout>
  );
}
