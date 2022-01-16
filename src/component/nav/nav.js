import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nav.module.css";
const Nav = (props) => {
  let navigator = useNavigate();
  const nameInput = useRef();
  return (
    <div className={styles.nav}>
      <h1>습관들 모음</h1>
      <span>{props.sum}</span>
      <input
        ref={nameInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const value = nameInput.current.value;
            if (value === "") {
              return;
            } else {
              nameInput.current.value = "";
              nameInput.current.focus();
              let arr = [...props.list];
              console.log(arr);
              arr.push({ id: Date.now(), habit: props.input, count: 0 });
              props.setlists(arr);
            }
          }
        }}
        onChange={(e) => {
          props.setinput(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          let arr = [...props.list];
          console.log(arr);
          if (props.input != "") {
            arr.push({ id: Date.now(), habit: props.input, count: 0 });
          }
          props.setlists(arr);
          nameInput.current.value = "";
          props.setinput("");
          nameInput.current.focus();
        }}
      >
        습관추가하기
      </button>
      <button
        onClick={() => {
          navigator("/");
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default Nav;
