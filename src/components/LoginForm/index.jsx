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
    <div>
      <h1>LoginForm</h1>
      <form onSubmit={handleFormSubmint}>
        <label>
          <span>Name:</span>
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="name"
            autoFocus
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            email="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="yourmail@gmail"
            autoFocus
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            email="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="********"
            autoFocus
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default LoginForm;
