const UpcomingWorkouts = () => {
    return (
        <div className="generic-card upcoming-workouts-card">
            <section>
                <h3>Upcoming Workouts</h3>

                <div className="table-scroll">
                    <table className="generic-table">
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>DATE</th>
                                <th>EXERCISES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Push</td>
                                <td>N/A</td>
                                <td>5</td>
                            </tr>

                            <tr>
                                <td>Pull</td>
                                <td>N/A</td>
                                <td>4</td>
                            </tr>

                            <tr>
                                <td>Push</td>
                                <td>N/A</td>
                                <td>5</td>
                            </tr>

                            <tr>
                                <td>Pull</td>
                                <td>N/A</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
            </section>
        </div>
    )
};

const RecentWorkouts = () => {
    return (
        <div className="generic-card recent-workouts-card">
            <section>
                <h3>Recent Workouts</h3>

                <div className="table-scroll">
                    <table className="generic-table">
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>DATE COMPLETED</th>
                                <th>EXERCISES</th>
                                <th>BEST WEIGHT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Push</td>
                                <td>N/A</td>
                                <td>5</td>
                                <td>110 kg</td>
                            </tr>

                            <tr>
                                <td>Pull</td>
                                <td>N/A</td>
                                <td>4</td>
                                <td>65kg</td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                
            </section>
        </div>
        
    )
};

const Dashboard = () => {
    return (
        <div className="main-section">
            <main className="dashboard-content">
                <div className="dashboard-header">
                    <h3>Welcome back, Bradley!</h3>
                </div>
                <UpcomingWorkouts />
                <RecentWorkouts />
            </main>
        </div>
        
    )
};

export default Dashboard;