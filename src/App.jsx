import { RouterProvider } from "react-router-dom";
import { router } from "./routerConfig";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { customButtonTheme } from "./utils/Themes";
import { Box, Modal, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 12,
  textAlign: "center",
  p: 4,
};

let hasDisplayedDisclaimerMessage = false;

function App() {
  const [open, setOpen] = useState(
    hasDisplayedDisclaimerMessage ? false : true
  );
  
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={customButtonTheme}>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h3>Disclaimer:</h3>
          <p>
            This website is <span style={{fontWeight: "bold"}}>NOT AFFILIATED </span>
            with memrHealth.
            I built this dummy application to demonstrate some of the skills I have to offer.
            That said, the dashboard is primarily non-functional
            and due to time constraints, is not mobile friendly -- it's just a
            vision I had for what I would do based on your current design. There
            is no intent to misuse or infringe upon any intellectual property or
            copyright.
          </p>
          <p>This message will display again upon every refresh.</p>
          <Button
            variant="contained"
            className="width-100"
            onClick={handleClose}
          >
            Okay
          </Button>
        </Box>
      </Modal>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
