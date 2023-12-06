import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../App.css';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function submit(e) {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        if (!email || !password) {
            setError('Email and password are required');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axiosInstance.post("https://broncobites-7f6a4d17acb3.herokuapp.com/account/login", { email, password });
            localStorage.setItem('token', response.data.token);
            history("/restaurants");
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'Failed to login');
            } else {
                setError('Failed to login');
            }
            console.error('Login error:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={submit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="submit-button" type="submit" disabled={isSubmitting}>Login</button>
            </form>
            <br />
            <div className="switch-acc">
                <p>Need an account?</p>
                <Link to="/signup">Sign up Page</Link>
            </div>
        </div>
    );
}

export default Login;