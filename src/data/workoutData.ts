export type Workout = {
    id: number,
    name: string,
    date: string,
    exercises: Exercise[],
    completed: boolean
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