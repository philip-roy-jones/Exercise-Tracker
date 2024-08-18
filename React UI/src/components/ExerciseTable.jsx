import ExerciseRow from "./ExerciseRow";

function ExerciseTable({exercises, setExercises}) {
    return (
        <table>
            <caption>Exercises</caption>
            <thead id="table-header-row">
                <tr>
                    <th>Exercise</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exerciseObject) => (
                    <ExerciseRow
                        name={exerciseObject.name}
                        reps={exerciseObject.reps}
                        weight={exerciseObject.weight}
                        unit={exerciseObject.unit}
                        date={exerciseObject.date}
                        key={exerciseObject._id}
                        id={exerciseObject._id}
                        exercises={exercises}
                        setExercises={setExercises}
                    />
                ))}
                </tbody>
        </table>
    )
}

export default ExerciseTable;