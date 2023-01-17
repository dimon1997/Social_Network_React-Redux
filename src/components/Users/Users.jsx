import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/photoUsers/user.png";
import { Link, NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className="userPage">
      <div>
        {pages.map((p) => {
          return (
            <Link
              className={s.selectedPage}
              //className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              key={p}
            >
              {p}
            </Link>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={s.userItem}>
            <div className={s.followBlock}>
              {u.followed ? (
                <button
                  disabled={props.followingInProgres.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgres.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div className={s.avaBlock}>
              <div className={s.ava}>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt="don't load"
                  />
                </NavLink>
              </div>
            </div>
            <div className={s.discriptionBlock}>
              <div className={s.discription}>
                <div>User name:<p>{u.name}</p> </div>
                <div>Status: <p>{u.status}</p></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;

/* <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="don't load"
                  className={s.ava}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgres.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgres.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span> */
