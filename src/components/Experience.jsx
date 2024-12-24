import React from "react";

export const Experience = () =>{
    const [formData, setFormData] = useState({jobTitle:" ", companyName:" ", location:" ", startDate:" ", endDate:" "});
    
    const handleChange = (e) =>{
        const [name, value] = e.target;
        setFormData({...formData, [name]:value});
    }
    
    return(
        <>
        <h1>Work Experience</h1>
        <h4>Include your career history. Give a brief insight into the role you played.</h4>
        <form style={{display:"flex", flexDirection:"column", gap:"2rem"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                <label htmlFor="jobTitle">Job Title</label>
                <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    style={{
                        marginRight:"70rem",
                        padding: "0.5rem",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                      }}
                ></input>
            </div>
            <div style={{display:"flex", gap:"1rem"}}>
                      {[
                        {label:"Company Name", name:"companyName"},
                        {label:"Location", name:"location"}
                      ].map(({label, name}) => (
                        <div key={name} style={{display:"flex", flexDirection:"column"}}>
                            <label htmlFor={name}>{label}</label>
                            <input
                                type="text"
                                name={name}
                                id={name}
                                value={formData[name]}
                                onChange={handleChange}
                                style={{
                                    // marginRight:"70rem",
                                    padding: "0.5rem",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                  }}
                            ></input>
                        </div>
                      ))}
            </div>
            <div style={{display:"flex", gap:"1rem"}}>
                      {[
                        {label:"Start Date", name:"startDate"},
                        {label:"End Date", name:"endDate"}
                      ].map(({label, name}) => (
                        <div key={name} style={{display:"flex", flexDirection:"column"}}>
                            <label htmlFor={name}>{label}</label>
                            <input
                                type="text"
                                name={name}
                                id={name}
                                value={formData[name]}
                                onChange={handleChange}
                                style={{
                                    // marginRight:"70rem",
                                    padding: "0.5rem",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                  }}
                            ></input>
                        </div>
                      ))}
            </div>
        </form>
        </>
    );
}