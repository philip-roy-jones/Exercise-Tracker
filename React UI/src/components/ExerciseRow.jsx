import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ExerciseRow({name, reps, weight, unit, date, id, exercises , setExercises}) {
    const navigate = useNavigate()

    function handleEditClick(){
        navigate(`/edit/${id}`, {
            state: {
                name:name,
                reps:reps,
                weight:weight,
                unit:unit,
                date:date,
                id: id
            }
        })
    }

    async function handleDeleteClick() {
        try {
            const response = await fetch(`/exercises/${id}`, {method:'DELETE'})

            if (!response.ok) {
                throw new Error('Failed to delete exercise');
            }

            setExercises(exercises.filter(e => e._id !== id))
        } catch (err) {
            console.error("Error", err)
        }
        
    }
        
    return (
        <tr>
            <td>{name}</td>
            <td>{reps}</td>
            <td>{weight}</td>
            <td>{unit}</td>
            <td>{date}</td>
            <td><FaEdit onClick={handleEditClick} className="action-icons"/></td>
            <td><MdDeleteForever onClick={handleDeleteClick} className="action-icons"/></td>
        </tr>
    )
}

export default ExerciseRow;