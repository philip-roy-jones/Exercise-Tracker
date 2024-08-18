import ExerciseTable from "../components/ExerciseTable";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomePage({exercises, setExercises}) {
    const navigate = useNavigate();

    const handleCreateButton = () => {
        return navigate('/create')
    }

    return (
        <>
            <div id="home-content">
                <div className="table-container">
                    {exercises.length ===0 ? (
                        <>
                            <h3>No Exercises Available</h3>
                            <p>Click the "+" to get started</p>
                        </>
                        ) : (
                        <ExerciseTable exercises={exercises} setExercises={setExercises}/>)}
                </div>
                <button id="create-button" onClick={handleCreateButton}><FaPlus /></button>
            </div>
        </>
        
    )
}

export default HomePage;