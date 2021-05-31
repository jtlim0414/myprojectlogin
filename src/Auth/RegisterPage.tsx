import React, { useState } from "react";
import { Link } from "react-router-dom";
import { onRegister } from "./auth.api";
import { AuthForm } from "./Auth.components";

const RegisterPage = () => {
  const [{ username, password, email, phone }, setRegisterData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const register = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onRegister({
      username,
      password,
      email,
      phone,
    });

    if (response && response.error) {
      setError(response.error);
    }
  };
  return (
    <AuthForm onSubmit={register}>
      <label htmlFor="username">Username</label>
      <input
        value={username}
        id="username"
        required
        onChange={(event) =>
          setRegisterData({
            username: event.target.value,
            password,
            email,
            phone,
          })
        }
      />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        id="password"
        type="password"
        required
        onChange={(event) =>
          setRegisterData({
            username,
            password: event.target.value,
            email,
            phone,
          })
        }
      />
      <label htmlFor="password">Email</label>
      <input
        value={email}
        id="Email"
        type="email"
        required
        onChange={(event) =>
          setRegisterData({
            username,
            password,
            email: event.target.value,
            phone,
          })
        }
      />
      <label htmlFor="phone">Phone</label>
      <input
        value={phone}
        id="Phone"
        type="tel"
        required
        onChange={(event) =>
          setRegisterData({
            username,
            password,
            email,
            phone: event.target.value,
          })
        }
      />
      <button type="submit">Register</button>
      {error.length > 0 && <p>{error}</p>}
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </AuthForm>
  );
};

export default RegisterPage;
