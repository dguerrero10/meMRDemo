import { LineChart } from "@mui/x-charts/LineChart";

export default function PulseRateChart() {
  return (
    <LineChart
      xAxis={[
        {
          scaleType: "time",
          data: [
            new Date("2023-01-22"),
            new Date("2023-11-20"),
            new Date("2024-03-05"),
            new Date("2024-010-06"),
          ],
        },
      ]}
      series={[
        {
          label: "In (bpm)",
          curve: "linear",
          data: [95, 75, 105, 85],
        },
      ]}
      height={300}
    />
  );
}
