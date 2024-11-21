import { LineChart } from "@mui/x-charts/LineChart";

export default function TemperatureChart() {
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
          label: "In (Degrees F)",
          curve: "linear",
          data: [98.6, 98.8, 97.3, 98.5],
        },
      ]}
      height={300}
    />
  );
}
