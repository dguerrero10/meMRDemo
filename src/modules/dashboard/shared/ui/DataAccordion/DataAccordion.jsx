import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../../../../utils/Themes";

import classes from './DataAccordion.module.css';

export default function DataAccordion({ data }) {
  return (
    <div className={classes["data-accordion"]}>
      {data.map(({title, details}) => (
        <Accordion key={title}>
          <AccordionSummary aria-controls="panel1d-content" id={title}>
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}