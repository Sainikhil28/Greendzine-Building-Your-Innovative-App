import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import custom CSS styles

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            navigate('/home');
        } else {
            alert('Wrong credentials!');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin} disabled={!username || !password}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
