import React from 'react';
import AddActivities from '../../Components/AddActivities/AddActivities';
import StudentDashboard from '../StudentDashboard/StudentDashboard';

const Dashboard = () => {
    return (
        <div>
            <AddActivities></AddActivities>
            <StudentDashboard></StudentDashboard>
        </div>
    );
};

export default Dashboard;