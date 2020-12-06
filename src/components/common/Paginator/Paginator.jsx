import React, { useState } from "react";
import styles from "./Paginator.module.css";


let Paginator = (props) => {
  debugger;
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / props.portionSize);
  let [portionNumber, SetPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  let rightPortionPageNumber = portionNumber * props.portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && 
        <button onClick={() => {SetPortionNumber(portionNumber - 1)}}>PREV</button>
      }
      {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
        return (
          <span
            className={props.currentPage === p && styles.selectedPage}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
      {portionCount > portionNumber && 
        <button onClick={() => {SetPortionNumber(portionNumber + 1)}}>NEXT</button>
      }
    </div>
  );
};

export default Paginator;
