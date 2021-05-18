import React from "react";
interface Props {
  repositories: {
    name: string;
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
      <div className="profile__repos__title">Top Repositories</div>
      <div className="profile__repos__cards">
        {filteredRepos.map((repo) => {
          return (
            <div className="profile__repos__cards__card">
              <div>{repo.name}</div>
              <div>{repo.description}</div>
              <div>{repo.language}</div>
              <div>{repo.stargazers_count}</div>
              <div>{repo.forks_count}</div>
              <div>{repo.size}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
