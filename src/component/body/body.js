import React from "react";
import styles from "./body.module.css";
const Body = (props) => {
  return (
    <div className={styles.body}>
      <ul>
        {props.list.map((item, i) => {
          return (
            <div className={styles.list}>
              <li>
                <span>취미</span>
                <span>{item.habit}</span>
                <span>{item.count}</span>
              </li>
              <button
                onClick={() => {
                  let arr = [...props.list];
                  arr[i].count++;
                  props.setlists(arr);
                }}
              >
                추가하기
              </button>
              <button
                onClick={() => {
                  let arr = [...props.list];
                  console.log(arr);
                  let arr2 = arr.filter((items) => {
                    return item.id != items.id;
                  });
                  props.setlists(arr2);
                }}
              >
                삭제하기
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Body;
