import React from "react";
import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import Validation from "./LoginValidation";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if(res.data === "Success") {
            navigate('/home');
        }else {
            alert("Invalid Credentials");
        }
        })
        .catch(err => {
          console.log(err);
    })
  }
    
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>{" "}
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              name="email"
              required
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="psssword">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Login</strong>
          </button>
          <p>You are agree to our terms and policies</p>
          <Link
            to="/signup"
            type="submit"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            <strong>Create Account</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}


export default Login;
