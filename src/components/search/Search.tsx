import { useState } from "react";
import { Profile } from "../profile/Profile";
export const Search = () => {
  const [username, setUsername] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const [profile, setProfile] = useState<JSX.Element>();
  const submitHandler = async (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setProfile(<Profile username={username} />);
  };
  return (
    <>
      {profile ? (
        profile
      ) : (
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search"
            value={username}
            onChange={onChangeHandler}
          />
          <button
            className="search__button"
            type="submit"
            onClick={submitHandler}
          >
            Search
          </button>
        </div>
      )}
    </>
  );
};
