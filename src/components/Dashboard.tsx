import { createdWorkouts, getBestWeight, type Workout } from '../data/workoutData'

type WorkoutProps = {
    exampleWorkouts: Workout[];
}

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
                            <UpcomingWorkoutsList exampleWorkouts={createdWorkouts}/>
                        </tbody>
                        
                    </table>
                </div>
            </section>
        </div>
    )
};

const UpcomingWorkoutsList = ({ exampleWorkouts }: WorkoutProps) => {
    return (
        <>
        {exampleWorkouts.map((workout: Workout) => (
            <tr key={workout.id}>
                <td>{workout.name}</td>
                <td>{workout.date}</td>
                <td>{workout.exercises.length}</td>
            </tr>
        ))}
        </>
    );
}

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
                            <RecentWorkoutsList exampleWorkouts={createdWorkouts} />
                        </tbody>
                        
                    </table>
                </div>
                
            </section>
        </div>
        
    )
};

const RecentWorkoutsList = ({ exampleWorkouts }: WorkoutProps) => {
    return (
        <>
        {exampleWorkouts.map((workout: Workout) => (
            <tr key={workout.id}>
                <td>{workout.name}</td>
                <td>{workout.date}</td>
                <td>{workout.exercises.length}</td>
                <td>{getBestWeight(workout)}</td>
            </tr>
        ))}
        </>
    );
}

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