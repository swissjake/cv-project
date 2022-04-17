import './generalInfo.css'


function GeneralInfo() {
    return (
        <section className="general-info">
            <h2>General Information</h2>
            <div className="form-inputs-container">
            <label>Name</label>
            <input type="text" placeholder="Your FullName"/>
            <label>Email</label>
            <input type="email" placeholder="Your Email"/>
            <label>Phone Number</label>
            <input type="tel" placeholder="Your Phone Number"/>
            </div>
        </section>
    )
}

export default GeneralInfo
