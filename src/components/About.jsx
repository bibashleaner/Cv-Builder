import React, { useState } from "react";

export const About = ({onSubmit}) =>{
    const [nameData, setNameData] = useState({firstName:" ", lastName:" ", address:" ", contact:" ", mail:" ", summary:" "});

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setNameData({...nameData, [name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(nameData);
    }

    return (
        <>
        <h1>About yourself</h1>
        <h4>Fill out your primary infromation.</h4>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{display:"flex", gap:"1rem"}}>
                {[
                    {label:"First Name", name:"firstName"},
                    {label:"Last Name", name:"lastName"}
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
                                padding: "0.5rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                              }}
                        ></input>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", flexDirection:"column", gap: "1rem" }}>
                {[
                    {label:"Address", name:"address"},
                    {label:"Contact", name:"contact"},
                    {label:"Email", name:"mail"},
                ].map(({label, name}) =>(
                    <div key={name} style={{ display: "flex", flexDirection: "column"}}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            type="text"
                            name={name}
                            id={name}
                            value={nameData[name]}
                            onChange={handleChange}
                            style={{
                                marginRight:"70rem",
                                padding:"0.5rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                              }}
                        ></input>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", flexDirection:"column", gap: "1rem" }}>
                {[
                    {label:"Summary", name:"summary"}
                ].map(({label, name}) =>(
                    <div key={name} style={{ display: "flex", flexDirection: "column"}}>
                        <label htmlFor={name}>{label}</label>
                        <textarea
                            type="text"
                            rows={10}
                            name={name}
                            id={name}
                            value={nameData[name]}
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