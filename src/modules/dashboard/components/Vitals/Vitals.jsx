import { Button, Divider, Snackbar } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import DataAccordion from "../../shared/ui/DataAccordion/DataAccordion";
import HeaderWrapper from "../../shared/ui/HeaderWrapper/HeaderWrapper";

import { DUMMY_DATA_DRUG_VITALS } from "../../../../utils/demo/DummyDataVitals.jsx";
import { useState } from "react";

export default function Vitals() {
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(true);

  const handleClose = (event, reason) => {
    setSnackbarIsOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <h2 className="no-margin">My Vitals</h2>
        <Button
          size="small"
          color="secondary"
          sx={{ marginLeft: "1rem" }}
          disableElevation
          startIcon={<AddIcon />}
        >
          Add new
        </Button>
      </HeaderWrapper>
      <Divider />
      <DataAccordion data={DUMMY_DATA_DRUG_VITALS} />

      <Snackbar
        open={snackbarIsOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="I understand these charts may not make technical sense."
        onClose={handleClose}
      />
    </>
  );
}
