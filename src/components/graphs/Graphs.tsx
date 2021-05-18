import React from "react";
import { BarGraph } from "./graphs/BarGraph";
import { DonutGraph } from "./graphs/DonutGraph";
import { PieGraph } from "./graphs/PieGraph";
interface Props {
  repositories: {
    stargazers_count: number;
    fork: boolean;
    name: string;
    language: string | null;
  }[];
  languages: {
    label: string;
    value: number;
    color: string;
  }[];
}
export const Graphs: React.FC<Props> = ({ repositories, languages }) => {
  return (
    <div className="profile__graphs">
      {/* <div className="profile__graphs__graph">{data.public_repos}</div>
          <div className="profile__graphs__graph">{data.following}</div>
          <div className="profile__graphs__graph">{data.followers}</div> */}
      <div className="profile__graphs__graph">
        <div className="profile__graphs__graph__title">Top Languages</div>
        <PieGraph languages={languages} />
      </div>
      <div className="profile__graphs__graph">
        <div className="profile__graphs__graph__title">Most Starred</div>
        <BarGraph repositories={repositories} />
      </div>
      <div className="profile__graphs__graph">
        <div className="profile__graphs__graph__title">Stars per language</div>
        <DonutGraph repositories={repositories} />
      </div>
    </div>
  );
};
