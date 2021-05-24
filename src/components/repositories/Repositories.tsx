import { useState } from "react";
import { LanguageColors } from "../../utilities/LanguageColors";
import { Repo } from "./repo/Repo";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
  const [sortBy, setSortBy] = useState("stargazers_count");
  const [text, setText] = useState("Stars");
  const filteredRepos = repositories
    .filter((repo) => !repo.fork)
    .sort((prev: any, val: any) => val[sortBy] - prev[sortBy])
    .slice(0, 8);
  return (
    <div className="profile__repos">
      <div className="profile__repos__head">
        <div className="profile__repos__head__title">Top Repositories</div>
        <div className="profile__repos__head__menu">
          <DropdownButton id="dropdown-basic-button" title={text}>
            <Dropdown.Item
              className="item1"
              onClick={() => {
                setText("Stars");
                setSortBy("stargazers_count");
              }}
            >
              Stars
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setText("Forks");
                setSortBy("forks_count");
              }}
            >
              Forks
            </Dropdown.Item>
            <Dropdown.Item
              className="item3"
              onClick={() => {
                setText("Size");
                setSortBy("size");
              }}
            >
              Size
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      <div className="profile__repos__cards">
        {filteredRepos.map((repo) => {
          let color = "yellow";
          if (repo.language) {
            color = LanguageColors[repo.language];
          }
          return (
            <Repo
              key={repo.name}
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
