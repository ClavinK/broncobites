import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../App.css';

function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function submit(e) {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post("https://bronco-bites-backend-files-ae95bc7ab207.herokuapp.com/account/signup", { email, password });
            localStorage.setItem('token', response.data.token);
            history("/login");
        } catch (error) {
            console.error('Error during signup:', error);
            setError(error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : 'An error occurred during signup.');
        }

    }

    return (
        <div className="login">
            <h1>Signup</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={submit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="submit-button" type="submit">Sign Up</button>
            </form>
            <br />
            <div className="switch-acc">
                <p>Already have an account?</p>
                <Link to="/login">Login Page</Link>
            </div>

        </div>
    );
}

export default Signup;