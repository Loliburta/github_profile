import { useState, useEffect } from "react";
import { SetDate } from "../../utilities/SetDate";

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

const r = [
  {
    id: 333186597,
    node_id: "MDEwOlJlcG9zaXRvcnkzMzMxODY1OTc=",
    name: "Allegro_price_tracker",
    full_name: "Loliburta/Allegro_price_tracker",
    private: false,
    owner: {
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
      starred_url:
        "https://api.github.com/users/Loliburta/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Loliburta/subscriptions",
      organizations_url: "https://api.github.com/users/Loliburta/orgs",
      repos_url: "https://api.github.com/users/Loliburta/repos",
      events_url: "https://api.github.com/users/Loliburta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Loliburta/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Loliburta/Allegro_price_tracker",
    description:
      "A web app that keeps track of a user's specified product and notifies him when the price goes down via email",
    fork: false,
    url: "https://api.github.com/repos/Loliburta/Allegro_price_tracker",
    forks_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/forks",
    keys_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/teams",
    hooks_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/hooks",
    issue_events_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/events",
    assignees_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/tags",
    blobs_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/languages",
    stargazers_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/stargazers",
    contributors_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/contributors",
    subscribers_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/subscribers",
    subscription_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/subscription",
    commits_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/merges",
    archive_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/downloads",
    issues_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Loliburta/Allegro_price_tracker/deployments",
    created_at: "2021-01-26T19:00:54Z",
    updated_at: "2021-02-26T21:40:01Z",
    pushed_at: "2021-01-26T19:03:54Z",
    git_url: "git://github.com/Loliburta/Allegro_price_tracker.git",
    ssh_url: "git@github.com:Loliburta/Allegro_price_tracker.git",
    clone_url: "https://github.com/Loliburta/Allegro_price_tracker.git",
    svn_url: "https://github.com/Loliburta/Allegro_price_tracker",
    homepage: "",
    size: 5,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
];
interface Props {
  username: string;
}
export const Profile: React.FC<Props> = ({ username }) => {
  const [data, setData] = useState<any>({});
  const [repositories, setRepositories] = useState([{}]);
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    (async () => {
      // const profile = await fetch(`https://api.github.com/users/${username}`);
      // const profileJson = await profile.json();
      // setData(profileJson);
      // const repositories = await fetch(profileJson.repos_url);
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
        <div className="profile__hero__bio">{data.bio}</div>
        <div className="profile__hero__about">
          <div className="profile__hero__about__location">{data.location}</div>
          <div className="profile__hero__about__joined">Joined {createdAt}</div>
        </div>
        <ul>
          <li>{data.blog}</li>
          <li>{data.public_repos}</li>
          <li>{data.following}</li>
          <li>{data.followers}</li>
        </ul>
      </div>
    </div>
  );
};
