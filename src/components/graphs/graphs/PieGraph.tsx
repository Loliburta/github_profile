import React from "react";
import { Pie } from "react-chartjs-2";
interface Props {
  languages: { label: string; value: number; color: string }[];
}
export const PieGraph: React.FC<Props> = ({ languages }) => {
  console.log(languages);
  const labels = languages.map((v) => {
    return v.label;
  });
  const data = languages.map((v) => {
    return v.value;
  });
  const backgroundColor = languages.map((v) => {
    return v.color;
  });

  return (
    <Pie
      type="Pie"
      data={{
        redraw: true,
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: data,
            backgroundColor: backgroundColor,
            hoverOffset: 4,
          },
        ],
      }}
    />
  );
};
