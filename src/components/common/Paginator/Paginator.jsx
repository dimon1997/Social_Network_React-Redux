import React from "react";
import s from "./Paginator.module.css";
import { Link} from "react-router-dom";

let Paginator = ({onPageChanged, totalUsersCount, pageSize, currentPage}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
      <div>
        {pages.map((p) => {
          return (
            <Link
              className={s.selectedPage}
              //className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                onPageChanged(p);
              }}
              key={p}
            >
              {p}
            </Link>
          );
        })}
      </div>
  );
};

export default Paginator;

