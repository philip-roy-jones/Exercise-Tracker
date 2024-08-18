function Form({formData, onInputChange}) {
    return (
        <>
            <form>
                <div className="form-divider">
                    <label htmlFor="name">Exercise Name: </label>
                    <input type="text" name="name" value={formData.name} onChange={onInputChange}></input>
                </div>
                <div className="form-divider">
                    <label htmlFor="reps">Reps: </label>
                    <input type="number" name="reps" min="1" step="1" value={formData.reps} onChange={onInputChange}></input>
                </div>
                <div className="form-divider">
                    <label htmlFor="weight">Weight: </label>
                    <input type="number" name="weight" min="1" step="1" value={formData.weight} onChange={onInputChange}></input>
                </div>
                <div className="form-divider">
                    <label htmlFor="unit">Unit: </label>
                    <select name="unit" value={formData.unit} onChange={onInputChange}>
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                    </select>
                </div>
                <div className="form-divider">
                    <label htmlFor="date">Date (MM-DD-YY): </label>
                    <input type="text" name="date" value={formData.date} onChange={onInputChange}></input>
                </div>
            </form>
        </>
    )
}

export default Form;