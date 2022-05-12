import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:3100/use/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // send http request
    sendRequest()
      .then(() => history("/cart"));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input name="email"
            onChange={handleChange}
            value={inputs.email} type="email" class="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input name="password"
            onChange={handleChange}
            value={inputs.password} type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>


      </form>
    </div>
  )
}

export default Login;