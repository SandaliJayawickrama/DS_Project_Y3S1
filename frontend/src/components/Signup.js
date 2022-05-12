import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const history = useNavigate();

    const [inputs, setInputs] = useState({
        name: "",
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
            .post("http://localhost:3100/use/signup", {
                name: inputs.name,
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
        sendRequest().then(() => history("/login"));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input  name="name"
                            onChange={handleChange}
                            value={inputs.name} type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input  name="email"
                            onChange={handleChange}
                            value={inputs.email} type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input  name="password"
                            onChange={handleChange}
                            value={inputs.password} type="password" class="form-control" id="password" />
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>


            </form>
        </div>
    );
};

export default Signup;