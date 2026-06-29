const UpcomingWorkouts = () => {
    return (
        <div className="upcoming-workouts">
            <section>
                <h3>Upcoming Workouts</h3>
                /* Workout Name | Date | Exercises */
            </section>
        </div>
    )
};

const RecentWorkouts = () => {
    return (
        <div className="recent-workouts">
            <section>
                <h3>Recent Workouts</h3>
                /* Workout Name | Date Completed | Best Weight */
            </section>
        </div>
    )
};

function Welcome() {
  return (
    <span className="welcome"><strong>Welcome back, Bradley!</strong></span>
  )
};

const Dashboard = () => {
    return (
        <div className="main-section">
            <main className="dashboard-content">
                <Welcome />
                <UpcomingWorkouts />
                <RecentWorkouts />
            </main>
        </div>
        
    )
};

export default Dashboard;