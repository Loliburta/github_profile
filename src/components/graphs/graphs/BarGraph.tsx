import React from "react";
import { Bar } from "react-chartjs-2";
interface Props {
  repositories: { stargazers_count: number; fork: boolean; name: string }[];
}
export const BarGraph: React.FC<Props> = ({ repositories }) => {
  const data = repositories
    .filter((repo) => !repo.fork)
    .sort(
      (a: { stargazers_count: number }, b: { stargazers_count: number }) =>
        b.stargazers_count - a.stargazers_count
    )
    .slice(0, 4);
  const labels = data.map((repo) => repo.name);
  return (
    <Bar
      className="profile__graphs__graph__barGraph"
      type="Bar"
      options={{
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              font: {
                size: 10,
              },
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: -50,
              },
            },
          },
        },
      }}
      data={{
        labels: labels,
        redraw: true,

        datasets: [
          {
            label: "",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};
