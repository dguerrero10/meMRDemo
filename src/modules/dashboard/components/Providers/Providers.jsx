import { Button, Divider } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import DataAccordion from "../../shared/ui/DataAccordion/DataAccordion";
import HeaderWrapper from "../../shared/ui/HeaderWrapper/HeaderWrapper";

import { DUMMY_DATA_DRUG_PROVIDERS } from "../../../../utils/demo/DummyDataProviders";

export default function Providers() {
  return (
    <>
      <HeaderWrapper>
        <h2 className="no-margin">My Providers</h2>
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
      <DataAccordion data={DUMMY_DATA_DRUG_PROVIDERS} />
    </>
  );
}
