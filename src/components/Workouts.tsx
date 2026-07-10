const CreateWorkoutButton = () => {
    return (
        <button className="generic-button create-workout-button">
            <p>+</p> <p>Create Workout</p>
        </button>
    )
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