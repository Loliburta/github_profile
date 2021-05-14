import { useState } from "react";
export const App = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const submitHandler = async (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);
    const repositories = await fetch(profileJson.repos_url);
    const reposJson = await repositories.json();
    console.log(reposJson);
  };
  return (
    <div>
      <input type="text" value={username} onChange={onChangeHandler}></input>
      <button type="submit" onClick={submitHandler}>
        Search
      </button>
    </div>
  );
};
