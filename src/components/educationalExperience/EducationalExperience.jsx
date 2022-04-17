import './education.css'

function EducationalExperience() {
    return (
        <section className="educational-experience">
        <h2>Educational Experience</h2>
        <div className="form-inputs-container">
        <label>School Name</label>
        <input type="text" placeholder="School Name"/>
        <label>Title of Study</label>
        <input type="text" placeholder="Title of Study"/>
        <label>Date of Study</label>
        <input type="date"  placeholder="Date of Study"/>
        </div>
    </section>
    )
}

export default EducationalExperience
