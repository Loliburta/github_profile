import { useState, useEffect } from "react";
import { SetDate } from "../../utilities/SetDate";
import { Icon } from "@iconify/react";
import calendar from "@iconify-icons/bi/calendar-event";
import location from "@iconify-icons/akar-icons/location";

import GhPolyglot from "gh-polyglot";

import { r } from "../../utilities/DummyRepos";
import { Graphs } from "../graphs/Graphs";
import { Repositories } from "../repositories/Repositories";

const d = {
  login: "Loliburta",
  id: 53707739,
  node_id: "MDQ6VXNlcjUzNzA3NzM5",
  avatar_url: "https://avatars.githubusercontent.com/u/53707739?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Loliburta",
  html_url: "https://github.com/Loliburta",
  followers_url: "https://api.github.com/users/Loliburta/followers",
  following_url:
    "https://api.github.com/users/Loliburta/following{/other_user}",
  gists_url: "https://api.github.com/users/Loliburta/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Loliburta/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Loliburta/subscriptions",
  organizations_url: "https://api.github.com/users/Loliburta/orgs",
  repos_url: "https://api.github.com/users/Loliburta/repos",
  events_url: "https://api.github.com/users/Loliburta/events{/privacy}",
  received_events_url: "https://api.github.com/users/Loliburta/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "loliburta.github.io/portfolio-v2/",
  location: "Warsaw",
  email: null,
  hireable: true,
  bio: "Algorithms here --> www.codewars.com/users/Loliburta",
  twitter_username: null,
  public_repos: 18,
  public_gists: 0,
  followers: 1,
  following: 3,
  created_at: "2019-08-04T17:20:30Z",
  updated_at: "2021-05-14T17:36:13Z",
};

const l = [
  { label: "JavaScript", value: 16, color: "#f1e05a" },
  { label: "CSS", value: 9, color: "#563d7c" },
  { label: "HTML", value: 7, color: "#e34c26" },
  { label: "Vue", value: 5, color: "#2c3e50" },
  { label: "Others", value: 2, color: "#ccc" },
  { label: "Shell", value: 2, color: "#89e051" },
];

interface Props {
  username: string;
}

export const Profile: React.FC<Props> = ({ username }) => {
  const [data, setData] = useState<any>({});
  const [repositories, setRepositories] = useState<
    {
      stargazers_count: number;
      fork: boolean;
      name: string;
      language: string | null;
    }[]
  >([{ stargazers_count: 0, fork: false, name: "", language: "" }]);
  const [languages, setLanguages] = useState([
    { label: "", value: 0, color: "" },
  ]);
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    (async () => {
      // const profile = await fetch(`https://api.github.com/users/${username}`);
      // const profileJson = await profile.json();
      // setData(profileJson);
      // const repositories = await fetch(`${profileJson.repos_url}?per_page=100`);
      // setRepositories(await repositories.json());
      setData(d);
      setRepositories(r);
      // todo for each repository get language add to array and show on chart.js

      //repositories.name
      //repositories.html_url
      //repositories.description
      //repositories.language
      //repositories.size
      //repositories.watchers
      //repositories.forks
      setCreatedAt(SetDate(d.created_at));
      // const getLangData = () => {
      //   const me = new GhPolyglot(`${"Loliburta"}`);
      //   me.userStats((err: any, stats: any) => {
      //     if (err) {
      //       console.error("Error:", err);
      //     }
      //     console.log(stats);
      //     setLanguages(stats);
      //   });
      // };
      // getLangData();
      setLanguages(l);
    })();
  }, []);

  return (
    <div className="profile">
      <div className="profile__hero">
        <div className="profile__hero__avatar">
          <img
            src={data.avatar_url}
            alt="user avatar"
            className="profile__hero__avatar__img"
          />
        </div>
        <a className="profile__hero__name" href={data.html_url}>
          {data.login}
        </a>
        {data.blog ? (
          <div className="profile__hero__site">
            <a href={`https://${data.blog}`} rel="noopener noreferrer">
              <b>Personal Site</b>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="profile__hero__bio">{data.bio}</div>
        <div className="profile__hero__about">
          <div className="profile__hero__about__location">
            <Icon
              className="profile__hero__about__about__icon"
              icon={location}
            />
            <div className="profile__hero__about__location__text">
              {data.location}
            </div>
          </div>
          <div className="profile__hero__about__joined">
            <Icon
              className="profile__hero__about__joined__icon"
              icon={calendar}
            />
            <div className="profile__hero__about__joined__text">
              Joined {createdAt}
            </div>
          </div>
        </div>

        <div className="profile__hero__info">
          <div className="profile__hero__info__item">
            <div className="profile__hero__info__item__count">
              {data.public_repos}
            </div>
            <div className="profile__hero__info__item__text">REPOSITORIES</div>
          </div>
          <div className="profile__hero__info__item">
            <div className="profile__hero__info__item__count">
              {data.following}
            </div>
            <div className="profile__hero__info__item__text">FOLLOWING</div>
          </div>
          <div className="profile__hero__info__item">
            <div className="profile__hero__info__item__count">
              {data.followers}
            </div>
            <div className="profile__hero__info__item__text">FOLLOWERS</div>
          </div>
        </div>
      </div>

      <Graphs repositories={repositories} languages={languages} />
      <Repositories repositories={repositories} />
    </div>
  );
};
