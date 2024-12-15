import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import { signUp } from "../../../utils/utils";

const Register = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signUp(form);
    console.log(res);
    alert("Success");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className={styles.label}>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" id="email" name="email" />
        </div>
        <div className={styles.label}>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <input type="submit" value={"Sign In"} className={styles.btn} />

        <div className={styles.links}>
          Already have an account?
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
