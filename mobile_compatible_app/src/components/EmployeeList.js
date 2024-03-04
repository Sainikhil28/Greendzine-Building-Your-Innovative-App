// EmployeeDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Employee-dashboard.css'; // Import custom CSS styles

const EmployeeDashboard = () => {
    // Dummy data for productivity stats
    const productivityStats = [
        { day: 'Monday', tasksCompleted: 10, hoursWorked: 8 },
        { day: 'Tuesday', tasksCompleted: 12, hoursWorked: 7 },
        { day: 'Wednesday', tasksCompleted: 8, hoursWorked: 9 },
        { day: 'Thursday', tasksCompleted: 11, hoursWorked: 8 },
        { day: 'Friday', tasksCompleted: 9, hoursWorked: 8 }
    ];

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Employee Productivity Dashboard</h2>
            <div className="dashboard-table-container">
                <table className="dashboard-table">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Tasks Completed</th>
                            <th>Hours Worked</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productivityStats.map((stat, index) => (
                            <tr key={index}>
                                <td>{stat.day}</td>
                                <td>{stat.tasksCompleted}</td>
                                <td>{stat.hoursWorked}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link to="/home" className="back-link">Back to Home</Link> {/* Back button to Home page */}
        </div>
    );
};

export default EmployeeDashboard;
