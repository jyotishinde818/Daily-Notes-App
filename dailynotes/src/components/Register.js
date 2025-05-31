import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

export default function Register() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        contanctno: "",
        password: "",
        urole: "user",
    });

    // Function to handle form field changes
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Function to handle user registration
    const registerUser = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/users/register", user)
            .then(() => alert("User Registered"))
            .catch((err) => console.error(err));
    };

    return (
        <div className="register-page">

            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={registerUser} className="register-form">
                    <input
                        name="username"
                        onChange={handleChange}
                        placeholder="Username"
                        required
                    />
                    <input
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        name="contanctno"
                        onChange={handleChange}
                        placeholder="Contact No"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                    <select name="urole" onChange={handleChange}>
                        <option value="select">Select</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type="submit">Register</button>
                </form>

                <p className="login-link">
                    Already have an account? <Link to="/">Login here</Link>
                </p>
            </div>
        </div>

    );
}