import { createdWorkouts } from '../data/workoutData'
import type { Workout } from '../data/workoutData'

type WorkoutProps = {
    exampleWorkouts: Workout[];
}

const CreateWorkoutButton = () => {
    return (
        <button className="generic-button create-workout-button">
            <p>+</p> <p>Create Workout</p>
        </button>
    )
}

const CreatedWorkoutsList = ({ exampleWorkouts }: WorkoutProps) => {
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

const WorkoutsCard = () => {
    return (
        <div className="generic-card workouts-card">
            <section>
                <h3>Created Workouts</h3>

                <div className="table-scroll">
                    <table className="generic-table created-workouts-table">
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>DATE</th>
                                <th>EXERCISES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CreatedWorkoutsList exampleWorkouts={createdWorkouts}/>
                        </tbody>
                        
                    </table>
                </div>

                
            </section>
        </div>
        
    )
}

const Workouts = () => {
    return (
        <div className="main-section">
            <main className="workouts-content">
                <div className="workouts-header">
                    <h2>Workouts</h2>
                    <CreateWorkoutButton />
                </div>
                <WorkoutsCard />
            </main>
        </div>
    )
};

export default Workouts;