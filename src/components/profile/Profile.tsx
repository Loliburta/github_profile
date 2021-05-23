import { useState, useEffect } from "react";
import { SetDate } from "../../utilities/SetDate";
import { Icon } from "@iconify/react";
import calendar from "@iconify-icons/bi/calendar-event";
import location from "@iconify-icons/akar-icons/location";
import GhPolyglot from "gh-polyglot";
import { Graphs } from "../graphs/Graphs";
import { Repositories } from "../repositories/Repositories";
import { BarLoader } from "react-spinners";

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
  const [loading, isLoading] = useState(true);
  const [languages, setLanguages] = useState([
    { label: "", value: 0, color: "" },
  ]);
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    (async () => {
      const profile = await fetch(`https://api.github.com/users/${username}`);
      const profileJson = await profile.json();
      const repositories = await fetch(`${profileJson.repos_url}?per_page=100`);
      setData(profileJson);
      setRepositories(await repositories.json());
      setCreatedAt(SetDate(profileJson.created_at));
      const getLangData = async () => {
        const me = new GhPolyglot(username);
        me.userStats((err: any, stats: any) => {
          if (err) {
            console.error("Error:", err);
          }
          setLanguages(stats);
          isLoading(false);
        });
      };
      await getLangData();
    })();
  }, [username]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <BarLoader color="white" width={200} height={30} />
        </div>
      ) : ( 
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
              {data.location ? (
                <div className="profile__hero__about__location">
                  <Icon
                    className="profile__hero__about__about__icon"
                    icon={location}
                  />
                  <div className="profile__hero__about__location__text">
                    {data.location}
                  </div>
                </div>
              ) : (
                ""
              )}
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
                <div className="profile__hero__info__item__text">
                  REPOSITORIES
                </div>
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
      )}
    </>
  );
};
