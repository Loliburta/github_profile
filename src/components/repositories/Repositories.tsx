import React from "react";
import { LanguageColors } from "../../utilities/LanguageColors";
import { Repo } from "./repo/Repo";
interface Props {
  repositories: {
    name: string;
    html_url?: string;
    description?: string;
    language: string | null;
    stargazers_count: number;
    forks_count?: number;
    size?: number;
    fork: boolean;
  }[];
}
export const Repositories: React.FC<Props> = ({ repositories }) => {
  console.log(repositories);
  const sortBy = ["stars", "forks", "size"];
  const filteredRepos = repositories
    .filter((repo) => !repo.fork)
    .sort((prev, val) => val.stargazers_count - prev.stargazers_count)
    .slice(0, 8);
  console.log(filteredRepos);
  return (
    <div className="profile__repos">
      <div className="profile__repos__head">
        <div className="profile__repos__head__title">Top Repositories</div>
        <div className="profile__repos__head__menu">menu</div>
      </div>
      <div className="profile__repos__cards">
        {filteredRepos.map((repo) => {
          let color = "yellow";
          if (repo.language) {
            color = LanguageColors[repo.language];
          }
          return (
            <Repo
              name={repo.name}
              html_url={repo.html_url}
              description={repo.description}
              language={repo.language}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              size={repo.size}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
};
