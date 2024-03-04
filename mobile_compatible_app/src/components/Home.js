import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import custom CSS styles

const employeesData = [
    { id: 1, name: 'John Doe', dob: '1990-05-15', role: 'Manager' },
    { id: 2, name: 'Jane Smith', dob: '1985-10-20', role: 'Developer' },
    { id: 3, name: 'Alice Johnson', dob: '1993-02-28', role: 'Designer' },
    { id: 4, name: 'Bob Brown', dob: '1988-07-10', role: 'Analyst' },
    { id: 5, name: 'Eva Davis', dob: '1991-11-05', role: 'Engineer' }
];

const Home = () => {
    const [searchId, setSearchId] = useState('');
    const [employee, setEmployee] = useState(null);

    const handleSearch = () => {
        const foundEmployee = employeesData.find(emp => emp.id === parseInt(searchId));
        setEmployee(foundEmployee);
    };

    return (
        <div className="container">
            <h2>Welcome to Greendzine Technologies</h2>
            <div className="search-container">
                <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder="Search by ID" className="form-control mr-2" />
                <button onClick={handleSearch} className="btn btn-primary btn-sm">Search</button>
            </div>
            <div className="employee-list">
                <h3>List of Employees:</h3>
                <ul>
                    {employeesData.map(employee => (
                        <li key={employee.id}>{employee.id}</li>
                    ))}
                </ul>
            </div>
            {employee ? (
                <div className="employee-details">
                    <h3>Employee Details:</h3>
                    <p>ID: {employee.id}</p>
                    <p>Name: {employee.name}</p>
                    <p>DOB: {employee.dob}</p>
                    <p>Role: {employee.role}</p>
                </div>
            ) : (
                <p>No employee found with ID: {searchId}</p>
            )}
            <Link to="/" className="btn btn-secondary btn-sm mr-2">Back to Login</Link>
            <Link to="/employee" className="btn btn-info btn-sm">View All Employees</Link>
        </div>
    );
};

export default Home;
