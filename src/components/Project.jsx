import React from "react";

export const Project = () =>{
    const [formData, setFormData] = useState({projectTitle:" ", description:" ", projectLink:" "});
    
    const handleChange = (e) =>{
        const [name, value] = e.target;
        setFormData({...formData, [name]:value});
    }

    return (
        <>
        <h1>Projects</h1>
        <h4>List your most recent project</h4>
        <form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                {[
                    {label:"Project Title", name:"projectTitle"},
                    {label:"Description", name:"description"},
                    {label:"Project link", name:"projectLink"}
                ].map(({label, name}) => (
                    <div key={name} style={{display:"flex", flexDirection:"column"}}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            type="text"
                            name={name}
                            id={name}
                            value={nameData[name]}
                            onChange={handleChange}
                            style={{
                                marginRight:"70rem",
                                padding: name===description ? "4rem" : "0.5rem",
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