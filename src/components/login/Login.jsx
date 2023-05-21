import { useState, useEffect } from "react";
import "./Login.css";
import Joi from "joi-browser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .regex(/^[a-zA-Z0-9_.+-]+@gmail.com$/)
      .required(),
    password: Joi.string().min(8).required(),
  });

  const handleSubmit = (e) => {
    const { error } = schema.validate({ email, password });
    if (error) {
      setError(error.details[0].message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      setError("successfull Login");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  console.log(typeof error);
  console.log(error);
  return (
    <>
      {error && (
        <div class="alert alert-success" role="alert">
          {error}
        </div>
      )}

      <div className="login-container">
        <div className="login-form">
          <h3 className="text-center">Login</h3>
          <div className="email">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="enter email id"
            />
          </div>
          <div className="password">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="enter password"
            />
          </div>
          <div className="submit d-flex justify-content-center">
            <button onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
