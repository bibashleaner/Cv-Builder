import React, {useState} from "react";

export const Eduction = () =>{
    const [formData, setFormData] = useState({school:" ", degree:" ", city:" ", startDate:" ", graduationDate:" "});

    const handleChange = (e) =>{
        const [name, value] = e.target;
        setFormData({...formData, [name]:value});
    }

    return(
        <>
        <h1>Education</h1>
        <h4>Fill out your academic infromation.</h4>
        <form style={{display:"flex", flexDirection:"column", gap:"2rem"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    name="school"
                    id="school"
                    value={formData.school}
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
                        {label:"Degree", name:"degree"},
                        {label:"City", name:"city"}
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
                        {label:"Graduation Date", name:"graduationDate"}
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