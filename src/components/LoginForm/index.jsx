import { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmint = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.containerForm}>
      <h1 className={styles.titleForm}>LoginForm</h1>
      <form className={styles.loginForm} onSubmit={handleFormSubmint}>
        <label className={styles.labelForm}>
          <span className={styles.inputCaption}>Name:</span>
          <input
            className={styles.formInput}
            type="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="name"
            autoFocus
          />
        </label>
        <label className={styles.labelForm}>
          <span className={styles.inputCaption}>Email:</span>
          <input
            className={styles.formInput}
            type="email"
            email="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="yourmail@gmail"
            autoFocus
          />
        </label>
        <label className={styles.labelForm}>
          <span className={styles.inputCaption}>Password:</span>
          <input
            className={styles.formInput}
            type="password"
            email="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="********"
            autoFocus
          />
        </label>
        <button className={styles.subminBtn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
