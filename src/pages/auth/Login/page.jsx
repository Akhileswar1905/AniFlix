import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Login</h2>
        <div className={styles.label}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className={styles.label}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value={"Sign In"} className={styles.btn} />

        <div className={styles.links}>
          Don't have an account?
          <Link to="/register" className={styles.link}>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
