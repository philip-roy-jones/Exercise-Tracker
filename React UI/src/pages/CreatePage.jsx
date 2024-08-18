import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import { useState } from "react";

function CreatePage({exercises, setExercises}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        reps: 1,
        weight: 1,
        unit: 'lbs',
        date: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch('/exercises',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            alert("Successfully Created!")
            const updatedResponse = await fetch('/exercises');
            const updatedExercises = await updatedResponse.json();
            setExercises(updatedExercises);
            navigate('/')
        } else {
            alert("Failed to Create :(")
            navigate('/')
        }
    }

    return (
        <>
            <h2>Create an Exercise</h2>
            <Form formData={formData} onInputChange={handleInputChange}/>
            <button className="submit-buttons" type="submit" onClick={handleFormSubmit}>Create</button>
        </>
    )
}

export default CreatePage;