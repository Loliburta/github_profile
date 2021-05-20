import { useState } from "react";
import { Profile } from "../profile/Profile";
import { Icon } from "@iconify/react";
import github from "@iconify-icons/codicon/github-alt";

export const Search = () => {
  const [username, setUsername] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    setProfile(<Profile username={username} />);
  };
  const [profile, setProfile] = useState<JSX.Element>();

  return (
    <>
      {profile ? (
        profile
      ) : (
        <div className="search">
          <Icon icon={github} className="search__icon" />
          <div className="search__title">View your github profile</div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="search__input"
              placeholder="Search"
              value={username}
              onChange={onChangeHandler}
            />
          </form>
        </div>
      )}
    </>
  );
};
