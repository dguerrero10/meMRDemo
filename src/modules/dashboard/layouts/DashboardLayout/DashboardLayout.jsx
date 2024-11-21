import classes from "./DashboardLayout.module.css";

export default function DashboardLayout({ children }) {
  return <div className={classes["dashboard-grid-layout"]}>{children}</div>;
}
