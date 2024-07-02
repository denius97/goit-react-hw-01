import s from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ userData: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={s.profile}>
      <div>
        <img src={avatar} alt="User avatar" />

        <p className={clsx(s.username, s.bold)}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span className={s.bold}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={s.bold}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={s.bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
