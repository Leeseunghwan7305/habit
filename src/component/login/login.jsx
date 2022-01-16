import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToHabit = (userId) => {
    navigate({ pathname: "/main", state: { id: userId } });
  };
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToHabit(data.user.id));
  };
  return (
    <div className="main-page">
      <section className={styles.main}>
        <Header />
        <section>
          <h1>Login</h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Google
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Github
              </button>
            </li>
          </ul>
        </section>
        <Footer />
      </section>
    </div>
  );
};

export default Login;
