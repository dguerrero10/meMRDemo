import { LineChart } from "@mui/x-charts/LineChart";

export default function WeightChart() {
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
          label: "In (lbs)",
          curve: "linear",
          data: [180, 200, 195, 220],
        },
      ]}
      height={300}
    />
  );
}
