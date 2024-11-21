import PulseRateChart from "../../modules/dashboard/components/Vitals/Charts/PulseRateChart";
import RespiratoryRateChart from "../../modules/dashboard/components/Vitals/Charts/RespiratoryRateChart";
import TemperatureChart from "../../modules/dashboard/components/Vitals/Charts/TemperatureChart";
import WeightChart from "../../modules/dashboard/components/Vitals/Charts/WeightChart";

export const DUMMY_DATA_DRUG_VITALS = [
  {
    title: "Weight",
    details: <WeightChart />,
  },
  {
    title: "Pulse Rate",
    details: <PulseRateChart />,
  },
  {
    title: "Temperature",
    details: <TemperatureChart />,
  },
  {
    title: "Respiratory Rate",
    details: <RespiratoryRateChart />,
  },
];
