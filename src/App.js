import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./component/nav/nav";
import Body from "./component/body/body";
import Login from "./component/login/login";
import { Route, Routes } from "react-router-dom";
function App({ authService }) {
  useEffect(() => {
    let i = 0;
    list.map((item) => {
      if (item.count > 0) {
        i++;
        console.log(list);
      }
    });
    setsum(i);
  });
  let [sum, setsum] = useState(0);
  let [list, setlist] = useState([]);
  let [input, setinput] = useState("");
  return (
    <div className="App">
      <div className="main-page">
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
        </Routes>
      </div>
      <Routes>
        <Route
          path="/main"
          element={
            <Nav
              list={list}
              setlists={setlist}
              input={input}
              setinput={setinput}
              sum={sum}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/main"
          element={<Body list={list} setlists={setlist}></Body>}
        />
      </Routes>
    </div>
  );
}

export default App;
