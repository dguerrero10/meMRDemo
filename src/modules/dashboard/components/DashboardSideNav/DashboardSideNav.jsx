import { Button, Divider, ThemeProvider } from "@mui/material";

import { grayButtonTheme } from "../../../../utils/Themes";

import classes from "./DashboardSideNav.module.css";
import {
  MeButtons,
  MedicalRecordButtons,
} from "../../shared/DashboardSideNavButtons";
import { NavLink } from "react-router-dom";
import { LogoutOutlined } from "@mui/icons-material";

export default function DashboardSideNav() {
  return (
    <ThemeProvider theme={grayButtonTheme}>
      <div className={classes["dashboard-sidenav"]}>
        <p>Me</p>
        <Divider />
        <ul className={classes["dashboard-sidenav__list"]}>
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
        </ul>

        <p>Medical Records (Do not work)</p>
        <Divider />
        <ul className={classes["dashboard-sidenav__list"]}>
          {MedicalRecordButtons.map(({ title, icon }) => (
            <Button
              sx={{
                gap: 2,
              }}
              size="small"
              startIcon={icon}
            >
              {title}
            </Button>
          ))}
        </ul>
        <Divider sx={{ marginBottom: "1.25rem" }} />
        <NavLink to={"/auth"}>
          <Button
            sx={{
              gap: 2,
            }}
            size="small"
            startIcon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </NavLink>
      </div>
    </ThemeProvider>
  );
}
