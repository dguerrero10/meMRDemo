import { Button, Divider, ThemeProvider } from "@mui/material";

import { grayButtonTheme } from "../../../../utils/Themes";

import classes from "./DashboardSideNav.module.css";
import {
  MeButtons,
  MedicalRecordButtons,
} from "../../static/DashboardSideNavButtons";
import { NavLink } from "react-router-dom";

export default function DashboardSideNav() {
  return (
    <div className={classes["dashboard-sidenav"]}>
      
      <p>Me</p>
      <Divider />
      <ul className={classes["dashboard-sidenav__list"]}>
        <ThemeProvider theme={grayButtonTheme}>
          {MeButtons.map(({ to, title, icon }) => (
            <NavLink key={title} to={to}>
              {({ isActive }) => (
                <Button
                  sx={{
                    gap: 2,
                    backgroundColor: isActive ? "#f1f1f1" : "inherit",
                  }}
                  size="small"
                  startIcon={icon}
                >
                  {title}
                </Button>
              )}
            </NavLink>
          ))}
        </ThemeProvider>
      </ul>

      <p>Medical Records</p>
      <Divider />
      <ul className={classes["dashboard-sidenav__list"]}>
        <ThemeProvider theme={grayButtonTheme}>
          {MedicalRecordButtons.map(({ to, title, icon }) => (
            <NavLink key={title} to={to}>
              {({ isActive }) => (
                <Button
                  sx={{
                    gap: 2,
                    backgroundColor: isActive ? "#f1f1f1" : "inherit",
                  }}
                  size="small"
                  startIcon={icon}
                >
                  {title}
                </Button>
              )}
            </NavLink>
          ))}
        </ThemeProvider>
      </ul>
    </div>
  );
}
