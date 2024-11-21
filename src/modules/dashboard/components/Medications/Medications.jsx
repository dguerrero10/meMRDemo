import { Button, Divider } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import HeaderWrapper from "../../shared/ui/HeaderWrapper/HeaderWrapper";
import DataAccordion from "../../shared/ui/DataAccordion/DataAccordion";

import { DUMMY_DATA_DRUG_MEDICATIONS } from "../../../../utils/demo/DummyMedications";

export default function Medications() {
  return (
    <>
      <HeaderWrapper>
        <h2 className="no-margin">My Medications</h2>
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
      <DataAccordion data={DUMMY_DATA_DRUG_MEDICATIONS} />
    </>
  );
}
