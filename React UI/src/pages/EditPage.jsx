import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "../components/Form";
import { API_BASE_URL } from "../config";

function EditPage({exercises, setExercises}) {
    const navigate = useNavigate();
    const location = useLocation();
    const {name, reps, weight, unit, date, id} = location.state || {};      // Passing the chosen exercise's properties

    const [formData, setFormData] = useState({
        name: name || '',
        reps: reps || '',
        weight: weight || '',
        unit: unit || '',
        date: date || ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${API_BASE_URL}/exercises/${id}`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            alert("Successfully Edited!")
            const updatedExercises = exercises.map(exercise => 
                exercise._id === id ? { ...exercise, ...formData } : exercise
            );

            setExercises(updatedExercises);
            navigate('/')
        } else {
            alert("Failed to Edit :(")
            navigate('/')
        }
    }

    return (
        <>
            <h2>Editing</h2>
            <Form formData={formData} onInputChange={handleInputChange} />
            <button className="submit-buttons" type="submit" onClick={handleFormSubmit}>Edit</button>
        </>
    )
}

export default EditPage;