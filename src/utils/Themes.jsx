import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const customButtonTheme = createTheme({
  palette: {
    primary: {
      main: "#8ac5c2",
    },
    secondary: {
      main: "#62b0ac",
    },
    tertiary: {
      main: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: ".4em",
          padding: ".25rem .75rem",
          textTransform: "none",
          fontWeight: "500",
          boxShadow: "none",
        },
        contained: {
          backgroundColor: "#8ac5c2",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#75a3a1",
            boxShadow: "none",
          },
        },
        outlined: {
          backgroundColor: "transparent",
          color: "#000",
          "&:hover": {
            backgroundColor: "#000",
            color: "#fff",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export const grayButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#6c6b6b",
          borderRadius: ".6em",
          fontWeight: "600",
          padding: ".25rem .75rem",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#f1f1f1",
          },
        },
      },
    },
  },
});

export const blackButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderRadius: ".6em",
          fontWeight: "600",
          padding: ".25rem .75rem",
          textTransform: "none",
          backgroundColor: "#000",
          "&:hover": {
            backgroundColor: "#f1f1f1",
          },
        },
      },
    },
  },
});

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
