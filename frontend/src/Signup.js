import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
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
    if(errors.name === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/signup', values)
        .then(res => {
          navigate('/');
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
            <label htmlFor="name">
              <strong>Name</strong>{" "}
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              required
              className="form-control rounded-0"
              name="name"
              onChange={handleInput}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>{" "}
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              required
              className="form-control rounded-0"
              name="email"
              onChange={handleInput}
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
              className="form-control rounded-0"
              name="password"
              onChange={handleInput}
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Register</strong>
          </button>
          <p>You are agree to our terms and policies</p>
          <Link
            to="/"
            type="submit"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            <strong>Already have an Account</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
