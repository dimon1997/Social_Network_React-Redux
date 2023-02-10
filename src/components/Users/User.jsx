import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/photoUsers/user.png";
import { NavLink } from "react-router-dom"; //Link, 
//import Paginator from "../common/Paginator/Paginator";


let User = ({user, followingInProgres, unfollow, follow}) => {
  return (
    <div className="userPage">
        <div>
          <div className={s.userItem}>
            <div className={s.followBlock}>
              {user.followed ? (
                <button
                  disabled={followingInProgres.some((id) => id === user.id)}
                  onClick={() => {
                    unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followingInProgres.some((id) => id === user.id)}
                  onClick={() => {
                    follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div className={s.avaBlock}>
              <div className={s.ava}>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={user.photos.small != null ? user.photos.small : userPhoto}
                    alt="don't load"
                  />
                </NavLink>
              </div>
            </div>
            <div className={s.discriptionBlock}>
              <div className={s.discription}>
                <div>User name:<p>{user.name}</p> </div>
                <div>Status: <p>{user.status}</p></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default User;

