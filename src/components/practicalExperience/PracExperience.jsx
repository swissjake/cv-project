import './practical.css'

function PracExperience() {
    return (
        <section className="pract-experience">
        <h2>Practical Experience</h2>
        <div className="form-inputs-container">
        <label>Company Name</label>
        <input type="text" placeholder="Company Name"/>
        <label>Position Title</label>
        <input type="text" placeholder="Position Title"/>
        <label>Description</label>
        <textarea cols="40" rows="10" placeholder="Job Description"/>
        
        <div className="start-date">
            <div className="start">
             <label>Start-Date</label>
             <input type="date" id="start" value="2018-07-22"></input>
            </div>

            <div className="start">
        <label>End Date</label>
         <input type="date" id="end" value="2022-04-16"></input> 
            </div>
            </div> 
        </div>
       
    </section>
    )
}

export default PracExperience
