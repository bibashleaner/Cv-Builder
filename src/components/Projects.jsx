import React, {useState} from "react";

export const Project = ({onSubmit}) =>{
    const [formData, setFormData] = useState({projectTitle:" ", description:" ", projectLink:" "});
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        onSubmit(formData);
    }

    return (
        <>
        <h1>Projects</h1>
        <h4>List your most recent project</h4>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                {[
                    {label:"Project Title", name:"projectTitle"},
                    {label:"Project link", name:"projectLink"}
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
                                marginRight:"70rem",
                                padding: "0.5rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                              }}
                        ></input>
                    </div>
                ))}
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                {[
                    {label:"Description", name:"description"}
                ].map(({label, name}) => (
                    <div key={name} style={{display:"flex", flexDirection:"column"}}>
                        <label htmlFor={name}>{label}</label>
                        <textarea
                            type="text"
                            rows={10}
                            name={name}
                            id={name}
                            value={formData[name]}
                            onChange={handleChange}
                            style={{
                                marginRight:"70rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                              }}
                        ></textarea>
                    </div>
                ))}
            </div>
            <button type="submit" style={{ padding:"5px", margin:"2rem 0rem 0rem 9rem"}}>Submit</button>
        </form>
        
        </>
    );
}