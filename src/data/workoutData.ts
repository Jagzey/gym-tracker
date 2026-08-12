export type Workout = {
    id: number,
    name: string,
    date: string,
    exercises: Exercise[],
    completed: boolean;
}

export type Exercise = {
    id: number;
    name: string,
    sets: Set[]
}

export type Set = {
    id: number,
    reps: number,
    weight: number,
    completed: boolean
}

export const templateSet: Set = {
    id: 1,
    reps: 5,
    weight: 100,
    completed: false
}

export const templateExercise: Exercise = {
    id: 1,
    name: "Bench Press",
    sets: [templateSet, templateSet, templateSet]
}

export const templateExercise2: Exercise = {
    id: 1,
    name: "Pull-ups",
    sets: [templateSet, templateSet, templateSet]
}

export const Workout1: Workout = {
    id: 1,
    name: "Push",
    date: "N/A",
    exercises: [templateExercise, templateExercise, templateExercise, templateExercise],
    completed: false
}

export const Workout2: Workout = {
    id: 1,
    name: "Pull",
    date: "N/A",
    exercises: [templateExercise2, templateExercise2, templateExercise2],
    completed: false
}

export const createdWorkouts: Workout[] = [
    Workout1, Workout2
];

export function getBestWeight(workout: Workout): number {
    let bestWeight = 0;
    workout.exercises.forEach((exercise: Exercise) => {
        exercise.sets.forEach((set: Set) => {
            if (set.weight > bestWeight) {
                bestWeight = set.weight;
            }
        })
    })
    return bestWeight;
}