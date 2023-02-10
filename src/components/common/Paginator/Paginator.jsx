import React from "react";
import s from "./Paginator.module.css";
import { Link} from "react-router-dom";
import { useState } from "react";

let Paginator = ({onPageChanged, totalItemsCount, pageSize, currentPage, portionSize = 10}) => {
  
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

 let portionCount = Math.ceil(pagesCount / portionSize);
 let [portionNumber, setPortionNumber] = useState(1);
 let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
 let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>back</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
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
      {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}  
    </div>
  );
};

export default Paginator;

