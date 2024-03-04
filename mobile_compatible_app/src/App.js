// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList'; // Import EmployeeList component

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username, password) => {
        // Perform credential validation (dummy validation)
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
        } else {
            alert('Wrong credentials!');
        }
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/employee" element={<EmployeeList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
