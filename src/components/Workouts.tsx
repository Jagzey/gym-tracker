import { createdWorkouts } from '../data/workoutData'
import type { Workout } from '../data/workoutData'
import { useState } from 'react'

const defaultWorkout: Workout = {
    id: -1,
    name: "",
    date: "N/A",
    exercises: [],
    completed: false
};

type CreatedWorkoutProps = {
    exampleWorkouts: Workout[];
    onClick: () => void;
}

// to show pop-up when 'Create Workout' is pressed
type CreateWorkoutButtonProps = {
    handleClick: () => void;
}

type CreateWorkoutCardProps = {
    closeCard: () => void;
}

const CreateWorkoutButton = ({ handleClick }: CreateWorkoutButtonProps) => {
    return (
        <button onClick={handleClick} className="generic-button create-workout-button">
            <p>+</p> <p>Create Workout</p>
        </button>
    )
}

const CreatedWorkoutsList = ({ exampleWorkouts, onClick }: CreatedWorkoutProps) => {
    return (
        <>
        {exampleWorkouts.map((workout: Workout) => (
            <tr onClick={() => {onClick}} key={workout.id}>
                <td>{workout.name}</td>
                <td>{workout.date}</td>
                <td>{workout.exercises.length}</td>
            </tr>
        ))}
        </>
    );
}

const CreateWorkoutCard = ({ closeCard }: CreateWorkoutCardProps) => {
    return (
            <div className="generic-card create-workout-card">
                <div className="create-workout-card-header">
                    <h3>Create New Workout</h3>
                    <button onClick={closeCard} className="close-button">—</button>
                </div>
                
            </div>
        
    )
}

const EditWorkoutCard = ({ closeCard }: CreateWorkoutCardProps) => {
    
    const handleSubmit = () => {
        return (
            <>
            </>
        )
    }

    return (
            <div className="generic-card edit-workout-card">
                <div className="create-workout-card-header">
                    <h3>Edit Workout</h3>
                    <button onClick={closeCard} className="close-button">—</button>
                </div>

                
                <form className="edit-workout-form" onSubmit={handleSubmit}>
                    <ul>
                        <li className="name">
                            <p className="card-text">
                                Name: 
                                <span>
                                    <input className="generic-input" name="workout-name" value={""} onChange={(e) => e}></input>
                                </span>
                            </p>
                        </li>
                        <li className="date">
                            <p className="card-text">
                                Date: 
                                <span>
                                    <input className="generic-input" name="workout-date" value={""} onChange={(e) => e}></input>
                                </span>
                            </p>
                        </li>
                        <li className="exercises">
                            <p className="card-text">
                                Total Exercises: 
                                <span>
                                    <input className="generic-input" name="profile-sex" value={0} onChange={(e) => e}></input>
                                </span>
                            </p>
                        </li>
                    </ul>

                    <button className="update-workout-button" type="submit">Update Workout</button>
                </form>
                
            </div>
        
    )
}

const CreatedWorkoutsCard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedWorkout, setSelectedWorkout] = useState<Workout>(defaultWorkout);

    setSelectedWorkout(defaultWorkout);
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
                            <CreatedWorkoutsList exampleWorkouts={createdWorkouts} onClick={() => setIsEditing(true)} />
                        </tbody>
                        
                    </table>
                </div>

                {isEditing && selectedWorkout.id >= 0 &&
                <div className="edit-profile-overlay">
                    <EditWorkoutCard closeCard={() => setIsEditing(false)} />
                </div>
                }
                
            </section>
        </div>
        
    )
}

const Workouts = () => {
    const [isCreating, setIsCreating] = useState(false);

    return (
        <div className="main-section">
            <main className="workouts-content">
                <div className="workouts-header">
                    <h2>Workouts</h2>
                    <CreateWorkoutButton handleClick={() => setIsCreating(true)} />
                </div>
                <CreatedWorkoutsCard />
                {isCreating && 
                <div className="edit-profile-overlay">
                    <CreateWorkoutCard closeCard={() => setIsCreating(false)}/>
                </div>
                }
                
            </main>
        </div>
    )
};

export default Workouts;