import { LineChart } from "@mui/x-charts/LineChart";

export default function RespiratoryRateChart() {
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
          label: "In (br/m)",
          curve: "linear",
          data: [18, 18, 17, 20],
        },
      ]}
      height={300}
    />
  );
}
